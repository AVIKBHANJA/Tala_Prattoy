import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Text content */}
          <div className="pr-0 md:pr-8">
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-white">Tala</span>
            </h2>{" "}
            <p className="text-gray-300 mb-4">
              Tala Prattoy upholds the art aspects of Durga Puja. Essence of
              creativity, combining the looks and outfits of art and art
              exhibition expressing the futuristic images of the festival. Tala
              Prattoy&apos;s work exhibition has always been on Durga Puja as a
              specific art genre where the public space is being transformed
              into an art venue.
            </p>
            <p className="text-gray-300 mb-4">
              Tala Prattoy upholds the art aspects of Durga Puja. Essence of
              creativity combining the looks and outfits of art and art
              exhibition expressing the futuristic images of the festival. Tala
              Prattoy&apos;s work exhibition has always been on Durga Puja as a
              specific art genre where the public space is being transformed
              into art venue. We are unveiling the looks that will gloried.
            </p>
          </div>          {/* Image grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden">
              <div className="relative h-full w-full overflow-hidden rounded-lg border-2 border-blue-500">
                <Image 
                  src="/rec38.jpg" 
                  alt="Art installation" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                  priority={false}
                />
              </div>
            </div>
            <div className="aspect-square overflow-hidden mt-8 sm:mt-16">
              <div className="relative h-full w-full rounded-lg">
                <Image 
                  src="/rec40.jpg" 
                  alt="Temple with lights" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                  priority={false}
                />
              </div>
            </div>
            <div className="aspect-square overflow-hidden col-span-2">
              <div className="relative h-full w-full rounded-lg">
                <Image 
                  src="/rec39.jpg" 
                  alt="Interior temple hall" 
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover"
                  loading="lazy"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
