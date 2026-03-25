import { Section } from "../section-wrapper";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "Student Data Dashboard",
      description: "Analyzed academic performance data using SQL queries and Python pandas to identify trends and highlight areas for institutional improvement.",
      tools: ["Python", "SQL", "Excel", "Pandas"],
      link: "https://github.com/kishorem6360-ui"
    },
    {
      title: "Sales Data Analysis",
      description: "Cleaned and visualized messy retail sales data to identify seasonal trends and top-performing categories.",
      tools: ["Python", "Matplotlib", "Pandas"],
      link: "https://github.com/kishorem6360-ui"
    },
    {
      title: "Photography Portfolio",
      description: "Personal creative photography project showcasing visual storytelling, lighting techniques, and post-processing skills.",
      tools: ["Lightroom", "Capture One", "Composition"],
      link: "https://github.com/kishorem6360-ui"
    }
  ];

  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">Real-world applications of my skills.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative bg-card/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <DatabaseIcon />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
            <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools.map(tool => (
                <span key={tool} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-foreground border border-white/10 group-hover:border-primary/20">
                  {tool}
                </span>
              ))}
            </div>
            
            <Button asChild variant="outline" className="w-full gap-2 border-white/10 hover:bg-white/10 hover:text-foreground">
              <a href={project.link} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" /> View Source
              </a>
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DatabaseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
      <path d="M3 12A9 3 0 0 0 21 12"/>
    </svg>
  )
}
