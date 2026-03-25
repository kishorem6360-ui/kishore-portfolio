import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-lg" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold text-foreground group">
          <span className="text-primary">K</span>M
          <span className="inline-block w-2 h-2 rounded-full bg-accent ml-1 transition-transform group-hover:scale-150" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Nav Button (Visual only for simplicity, Wouter doesn't strictly need it if we stick to anchors) */}
        <div className="md:hidden">
           <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
             <span className="w-6 h-0.5 bg-foreground rounded-full"></span>
             <span className="w-6 h-0.5 bg-foreground rounded-full"></span>
             <span className="w-6 h-0.5 bg-foreground rounded-full"></span>
           </div>
        </div>
      </div>
    </nav>
  );
}
