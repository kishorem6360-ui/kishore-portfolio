import { Section } from "../section-wrapper";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  const { mutate: submitForm, isPending } = useSubmitContact({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Failed to send message",
          description: error.error?.error || "Please try again later.",
          variant: "destructive",
        });
      }
    }
  });

  const onSubmit = (data: FormData) => {
    submitForm({ data });
  };

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you have a data project in mind or just want to chat about analytics and photography, I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <a href="mailto:kishorem6360@gmail.com" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-card/40 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg group-hover:shadow-primary/30">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">kishorem6360@gmail.com</p>
              </div>
            </a>

            <a href="tel:+917353643967" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-card/40 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-foreground transition-all duration-300 shadow-lg group-hover:shadow-accent/30">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">+91 7353643967</p>
              </div>
            </a>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-semibold">Social Profiles</p>
            <div className="flex gap-4">
              <a href="https://github.com/kishorem6360-ui" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:bg-white/10 hover:text-primary transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kishore-m-419763382/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:bg-white/10 hover:text-primary transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Your Name</label>
              <Input 
                {...form.register("name")} 
                placeholder="John Doe" 
                className="bg-background/50 border-white/10 focus-visible:ring-primary/50 h-12 rounded-xl"
              />
              {form.formState.errors.name && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <Input 
                {...form.register("email")} 
                placeholder="john@example.com" 
                type="email"
                className="bg-background/50 border-white/10 focus-visible:ring-primary/50 h-12 rounded-xl"
              />
              {form.formState.errors.email && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea 
                {...form.register("message")} 
                placeholder="How can we work together?" 
                className="bg-background/50 border-white/10 focus-visible:ring-primary/50 min-h-[150px] rounded-xl resize-none"
              />
              {form.formState.errors.message && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              disabled={isPending} 
              className="w-full h-14 text-lg rounded-xl shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              {isPending ? "Sending..." : (
                <>Send Message <Send className="w-5 h-5 ml-2" /></>
              )}
            </Button>
          </form>
        </div>

      </div>
    </Section>
  );
}
