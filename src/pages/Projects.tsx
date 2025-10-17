import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A comprehensive web application built with React and Node.js. Features include user authentication, real-time updates, and a responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#",
    },
    {
      title: "Project Two",
      description: "An innovative mobile-first application that provides seamless user experience across all devices. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
      tags: ["TypeScript", "Next.js", "Tailwind"],
      demo: "#",
      github: "#",
    },
    {
      title: "Project Three",
      description: "A data visualization dashboard that transforms complex data into intuitive and interactive charts. Perfect for business analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      tags: ["React", "D3.js", "PostgreSQL"],
      demo: "#",
      github: "#",
    },
    {
      title: "Project Four",
      description: "An e-commerce platform with advanced features like payment integration, inventory management, and order tracking.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80",
      tags: ["React", "Stripe", "Express"],
      demo: "#",
      github: "#",
    },
    {
      title: "Project Five",
      description: "A social media application with real-time messaging, post sharing, and user profiles. Built for scalability and performance.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=80",
      tags: ["React", "WebSocket", "Redis"],
      demo: "#",
      github: "#",
    },
    {
      title: "Project Six",
      description: "An AI-powered content generation tool that helps writers and marketers create engaging content efficiently.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=80",
      tags: ["React", "OpenAI", "Python"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work and personal projects that showcase my skills and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:border-primary/40">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:border-primary/40">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
