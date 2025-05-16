import Image from "next/image";
import Link from "next/link";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "New Exhibition Opening",
      date: "May 15, 2025",
      excerpt:
        "Experience the captivating new exhibition showcasing the essence of Durga Puja through artistic expression.",
      image: "/53a.jpg",
    },
    {
      id: 2,
      title: "Art Workshop Series",
      date: "May 20, 2025",
      excerpt:
        "Join our masterclass workshops and learn traditional art techniques from renowned artists.",
      image: "/53b.jpg",
    },
    {
      id: 3,
      title: "Cultural Festival Announcement",
      date: "June 5, 2025",
      excerpt:
        "Mark your calendars for our upcoming cultural festival celebrating the rich heritage of Bengal.",
      image: "/53c.jpg",
    },
    {
      id: 4,
      title: "Artist Collaboration",
      date: "June 12, 2025",
      excerpt:
        "Exciting new collaborations with international artists to create fusion artworks.",
      image: "/53d.jpg",
    },
    {
      id: 5,
      title: "Documentary Screening",
      date: "June 18, 2025",
      excerpt:
        "Special screening of our documentary on the making of traditional Durga Puja artworks.",
      image: "/53e.jpg",
    },
    {
      id: 6,
      title: "Community Art Project",
      date: "July 1, 2025",
      excerpt:
        "Join our community-based art project and contribute to a collective masterpiece.",
      image: "/53f.jpg",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Tala In News</h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative h-48 mb-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-red-600 text-sm mb-2">{item.date}</p>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.excerpt}</p>
              <Link
                href="#"
                className="text-red-600 inline-block mt-3 hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
