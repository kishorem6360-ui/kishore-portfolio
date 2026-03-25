import { Camera, Github, Linkedin, ArrowRight, Loader2 } from "lucide-react";
import { Section } from "../section-wrapper";
import { useTypingEffect } from "@/hooks/use-typing";
import { useGetProfileImage } from "@workspace/api-client-react";
import { useProfileUpload } from "@/hooks/use-profile-upload";
import { Button } from "@/components/ui/button";

export function Hero() {
  const tagline = useTypingEffect(["Aspiring Data Analyst", "BCA Student", "Data Enthusiast"], 100, 50, 2000);
  const { data: profileData, isLoading: isProfileLoading } = useGetProfileImage();
  const { mutate: uploadProfile, isPending: isUploading } = useProfileUpload();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadProfile(e.target.files[0]);
    }
  };

  return (
    <Section id="hero" className="min-h-[100vh] flex flex-col justify-center items-center text-center pt-24">
      {/* Profile Image with Upload */}
      <div className="relative group w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)] mb-10 transition-transform duration-500 hover:scale-105">
        {isProfileLoading ? (
          <div className="w-full h-full bg-muted animate-pulse" />
        ) : profileData?.hasCustomImage && profileData.imageUrl ? (
          <img 
            src={profileData.imageUrl} 
            alt="Kishore M" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-5xl font-display font-bold text-white shadow-inner">
            KM
          </div>
        )}

        <label className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${isUploading ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          {isUploading ? (
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          ) : (
            <>
              <Camera className="w-8 h-8 text-white mb-2" />
              <span className="text-xs font-medium text-white/90">Update Photo</span>
            </>
          )}
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleFileChange} 
            disabled={isUploading} 
          />
        </label>
      </div>

      {/* Typography */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Kishore M</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground h-10">
          {tagline}<span className="animate-pulse text-primary">|</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto pt-4 leading-relaxed">
          I transform raw data into actionable insights. Currently pursuing my BCA, combining analytical thinking with modern tools to solve real-world problems.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
        <Button asChild size="lg" className="rounded-full px-8 py-6 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
          <a href="#projects">
            View Projects <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-white/10 bg-white/5 hover:bg-white/10 hover:text-foreground backdrop-blur-sm transition-all duration-300">
          <a href="#contact">Contact Me</a>
        </Button>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 mt-12">
        <a 
          href="https://github.com/kishorem6360-ui" 
          target="_blank" 
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <Github className="w-7 h-7" />
        </a>
        <a 
          href="https://www.linkedin.com/in/kishore-m-419763382/" 
          target="_blank" 
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <Linkedin className="w-7 h-7" />
        </a>
      </div>
    </Section>
  );
}
