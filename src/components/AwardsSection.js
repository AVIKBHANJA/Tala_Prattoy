import Link from "next/link";
import Image from "next/image";

export default function AwardsSection() {
  const awards = [
    { id: 1, name: "Best Art Installation", icon: "FD" },
    { id: 2, name: "Creative Excellence", icon: "FD" },
    { id: 3, name: "Innovative Design", icon: "FD" },
    { id: 4, name: "Cultural Impact", icon: "FD" },
    { id: 5, name: "Audience Favorite", icon: "FD" },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Award</h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto mt-2"></div>
        </div>

        <div className="flex justify-center gap-8 md:gap-12 lg:gap-16">
          {awards.map((award) => (
            <div key={award.id} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">
                  {award.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
