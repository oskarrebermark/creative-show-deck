import { Mail, Linkedin, Github, Twitter, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "www.linkedin.com/in/oskar-kallebo-rebermark",
      username: "@oskar-kallebo-rebermark",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/oskarrebermark",
      username: "@oskarrebermark",
      color: "from-gray-700 to-gray-500",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/yourhandle",
      username: "@yourhandle",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:oskar.rebermark@gmail.com",
      username: "oskar.rebermark@gmail.com",
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. 
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-6 group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{link.label}</h3>
                      <p className="text-muted-foreground text-sm">{link.username}</p>
                    </div>
                    <Send className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Location & Availability */}
          <div className="glass-card rounded-xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Location & Availability</h2>
                <p className="text-muted-foreground">
                  Based in Stockholm, Sweden
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm currently <span className="text-accent font-semibold">available</span> for 
                master thesis projects and part-time opportunities. Whether you have a project in mind 
                or just want to connect, I'd love to hear from you.
              </p>
              <p>
                I typically respond within 24-48 hours. For urgent inquiries, 
                email is the fastest way to reach me.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card rounded-xl p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether it's a new project, collaboration, or just a chat about technology, 
              I'm always excited to connect with fellow developers and creators.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
              asChild
            >
              <a href="mailto:oskar.rebermark@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
