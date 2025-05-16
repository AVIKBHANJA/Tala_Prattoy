import Image from "next/image";

export default function ObjectivesSection() {
  const objectives = [
    {
      title: "Immersive Experience",
      description:
        "Engage with art through cutting-edge interactive installations",
      imagePath: "/41a.jpg",
    },
    {
      title: "Cultural Storytelling",
      description:
        "Discover narratives that blend tradition with contemporary expression",
      imagePath: "/41b.jpg",
    },
    {
      title: "Visual Innovation",
      description:
        "Experience pioneering techniques that push artistic boundaries",
      imagePath: "/41c.jpg",
    },
    {
      title: "Sensory Journey",
      description:
        "Explore multisensory exhibits designed to transform perception",
      imagePath: "/41d.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Objective & features</h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {objectives.map((objective, index) => (
            <div key={index} className="relative overflow-hidden h-48">
              <Image
                src={objective.imagePath}
                alt={objective.title}
                fill
                className="absolute inset-0 object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-red-500 mb-2">
                  {objective.title}
                </h3>
                <p className="text-gray-300 text-sm">{objective.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
