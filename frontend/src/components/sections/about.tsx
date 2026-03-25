import { Section } from "../section-wrapper";
import { Database, LineChart, Code2 } from "lucide-react";

export function About() {
  const highlights = [
    { icon: <Database className="w-6 h-6 text-primary" />, title: "Data Organization" },
    { icon: <LineChart className="w-6 h-6 text-accent" />, title: "Pattern Discovery" },
    { icon: <Code2 className="w-6 h-6 text-primary" />, title: "Technical Execution" },
  ];

  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full" />
          
          <div className="prose prose-invert prose-lg text-muted-foreground leading-relaxed">
            <p>
              My journey into data analytics started from a deep curiosity about how hidden patterns shape our world. As a BCA student at Kristu Jayanti University, I've immersed myself in the intersection of mathematics, programming, and visual storytelling.
            </p>
            <p>
              I believe that data without context is just noise. My goal is to clean, analyze, and translate complex datasets into clear, strategic narratives that drive informed decisions. Beyond the screen, my passion for photography and videography keeps my creative perspective sharp.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <div 
              key={i} 
              className={`p-6 rounded-3xl bg-card/40 backdrop-blur-sm border border-white/5 hover:border-primary/30 hover:bg-card/60 transition-colors duration-300 ${i === 2 ? 'sm:col-span-2' : ''}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                {h.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">{h.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
