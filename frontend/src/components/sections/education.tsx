import { Section } from "../section-wrapper";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <Section id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
          Education & <span className="text-accent">Growth</span>
        </h2>
        
        <div className="relative">
          {/* Vertical line timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent md:left-1/2 md:-ml-px" />

          {/* Education Card */}
          <div className="relative pl-20 md:pl-0 md:w-1/2 md:pr-16 ml-auto md:ml-0 group">
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-auto md:right-[-20px] top-6 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform duration-300" />
            
            <div className="bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 text-primary mb-4">
                <GraduationCap className="w-6 h-6" />
                <span className="font-semibold tracking-wider uppercase text-sm">Undergraduate</span>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                Bachelor of Computer Applications (BCA)
              </h3>
              
              <div className="space-y-2 mt-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">Kristu Jayanti University</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">2023 – Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
