import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Code2 className="w-16 h-16 md:w-20 md:h-20 text-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center justify-center gap-2 text-accent">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Your Name</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate developer crafting beautiful digital experiences. 
              I specialize in building elegant solutions to complex problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/projects">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              I'm a creative developer with a passion for building intuitive and 
              engaging web applications. With expertise in modern technologies, 
              I transform ideas into reality through clean code and thoughtful design.
            </p>
            <p>
              My journey in development has been driven by curiosity and a constant 
              desire to learn. I believe in writing code that not only works but is 
              also maintainable, scalable, and elegant.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source, or working on side projects that push 
              my creative boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
            { title: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
            { title: "Tools", skills: ["Git", "Docker", "VS Code", "Figma"] },
          ].map((category) => (
            <div key={category.title} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
