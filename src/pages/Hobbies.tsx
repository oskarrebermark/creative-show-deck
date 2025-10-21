import { Camera, Music, Palette, Mountain, Book, Gamepad2, MoveIcon, FilmIcon, HammerIcon } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Music,
      title: "Music",
      description: "While I can't play an instrument, I always listen to music and explore new genres.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HammerIcon,
      title: "DIY Woodworking",
      description: "In my free time, I enjoy working with wood and buiding furniture pieces.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Digital Art",
      description: "Creating illustrations and experimenting with design tools.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Mountain,
      title: "Hiking",
      description: "Exploring nature trails and mountains. Nothing beats a good view to reset the mind.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FilmIcon,
      title: "Movies & Series",
      description: "Watching a variety of films and shows for relaxation and inspiration.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Playing strategy and puzzle games. Gaming teaches problem-solving and quick thinking.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Hobbies</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond working/studying, these are the activities that inspire me and keep me creative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className={`absolute inset-0 blur-2xl opacity-20 bg-gradient-to-br ${hobby.color} rounded-full`}></div>
                  <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${hobby.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{hobby.title}</h3>
                <p className="text-muted-foreground">{hobby.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Why Hobbies Matter</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I believe that a well-rounded life includes more than just work. My hobbies 
                help me stay creative, manage stress, and approach problems from different angles.
              </p>
              <p>
                Each hobby brings unique benefits: music fuels me creatively, woodworking sharpens my 
                attention to detail, digital art enhances my visual thinking,
                hiking clears my mind, and 
                reading expands my perspective.
              </p>
              <p>
                These activities aren't just pastimes—they're essential parts of who I am 
                and how I approach my work as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hobbies;
