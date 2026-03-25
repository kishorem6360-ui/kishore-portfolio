import { Section } from "../section-wrapper";
import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    { name: "SQL", level: 85, color: "bg-blue-500" },
    { name: "Python", level: 75, color: "bg-yellow-500" },
    { name: "Data Analysis", level: 80, color: "bg-green-500" },
    { name: "Photography", level: 70, color: "bg-purple-500" },
    { name: "Videography", level: 65, color: "bg-pink-500" },
  ];

  return (
    <Section id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">Tools and skills I use to bring data to life.</p>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-3xl space-y-8">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between items-end mb-2">
                <span className="text-lg font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full ${skill.color} relative`}
                >
                  <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
