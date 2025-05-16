import Image from "next/image";
export default function GallerySection() {
  const galleryItems = [
    { id: 1, src: "/rec45.jpg", alt: "Gallery image 45" },
    { id: 2, src: "/rec46.jpg", alt: "Gallery image 46" },
    { id: 3, src: "/rec47.jpg", alt: "Gallery image 47" },
    { id: 4, src: "/rec48.jpg", alt: "Gallery image 48" },
    { id: 5, src: "/rec49.jpg", alt: "Gallery image 49" },
    { id: 6, src: "/rec50.jpg", alt: "Gallery image 50" },
    { id: 7, src: "/rec51.jpg", alt: "Gallery image 51" },
    { id: 8, src: "/rec52.jpg", alt: "Gallery image 52" },
  ];

  return (
    <section className="py-10 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Gallery</h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>

        <div className="border-2 border-blue-500 p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden group h-48 md:h-64"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
