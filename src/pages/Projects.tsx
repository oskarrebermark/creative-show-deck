import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import SummateImg from "../resources/SummatePresentation.png";
import AIGFacesImg from "../resources/AIG_faces.png";
import TracQuizImg from "../resources/tracQuizlogo.png";
import NotDogsImg from "../resources/NotDogsBoxFolded.png";
import AIG_Report from "../resources/Final Project report, PJ1_b.pdf";

const Projects = () => {
  const projects = [
    {
      title: "Summate",
      description: "The project centered around the concept of interdependence in hiking. Using the Double Diamond design framework, we explored logistical challenges faced by hikers, such as preparation and borrowing items.",
      image: SummateImg,
      tags: ["Figma", "Double Diamond", "Interaction Design"],
      demo: "https://www.figma.com/proto/JI7gso7NeuaHWgyLZkHq8L/Summate?node-id=0-1&t=ILEH0shLTm3kZXvw-1",
      github: "#",
    },
    {
      title: "AIG Faces",
      description: "This study investigated the differences in user perception when gym websites utilized AI-generated faces (AIG) versus real human faces. By embedding both types of faces into a gym website's user interface, the study analyzed how each impacted the perception of three dimensions.",
      image: AIGFacesImg,
      tags: ["Generative AI", "Interfaces", "Quantitative Study"],
      demo: AIG_Report,
      github: "#",
    },
    {
      title: "TracQuiz",
      description: "This project was centered on developing a dynamic web app from an original idea. By pasting a playlist, users are able to create a unique quiz that friends could join and play in a 'Kahoot-type' quiz.",
      image: TracQuizImg,
      tags: ["React", "Vite", "Firebase"],
      demo: "https://musicquiz-852ea.web.app/",
      github: "#",
    },
    {
      title: "NotDogs",
      description: "This project revolved around with designing different elements for an imaginary product of our choosing.",
      image: NotDogsImg,
      tags: ["Graphic Design", "Branding", "Affinity Designer"],
      demo: "#",
      github: "#",
    },
    {
      title: "Sunnify",
      description: "This project explored the possibility of conveying weather information through soundbites for a more intuitive experience.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=80",
      tags: ["React", "WebSocket", "Redis"],
      demo: "#",
      github: "#",
    },
    // {
    //   title: "Project Six",
    //   description: "An AI-powered content generation tool that helps writers and marketers create engaging content efficiently.",
    //   image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=80",
    //   tags: ["React", "OpenAI", "Python"],
    //   demo: "#",
    //   github: "#",
    // },
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
              <div className="relative overflow-hidden aspect-video bg-white">
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
                
                <div className="flex gap-3 pt-2 mt-auto">
                  {project.demo !== "#" && (<Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:border-primary/40">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                    </a>
                    Demo
                  </Button>)}
                  {/* <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:border-primary/40">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button> */}
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
