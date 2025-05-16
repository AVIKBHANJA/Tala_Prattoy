import Link from "next/link";
import Image from "next/image";
import rec1 from "./../../public/rec1.jpg";
import rec2 from "./../../public/rec2.jpg";
import rec3 from "./../../public/rec3.jpg";
import rec4 from "./../../public/rec4.jpg";
import rec5 from "./../../public/rec5.jpg"; 

export default function Hero() {
  return (
    <div className="relative bg-black text-white w-full">
      <div className="h-screen relative">
        {/* Grid of images */}
        <div className="grid grid-cols-5 w-full h-full">
          {[
            { src: rec1, alt: "Architectural structure" },
            { src: rec2, alt: "Intricate dark structure" },
            { src: rec3, alt: "Eye with artistic design" },
            { src: rec4, alt: "Dome-like structure" },
            { src: rec5, alt: "Ornate structure with lights" },
          ].map((img, index) => (
            <div key={index} className="col-span-1 overflow-hidden relative">
              <Image
                src={img.src}
                alt={img.alt}
                className="opacity-80 object-cover transition-transform duration-700 hover:scale-110"
                fill
                sizes="20vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Dark overlay - adding proper background color */}
        <div className="absolute inset-0 bg-black/60 bg-opacity-40"></div>

        {/* Centered text and buttons */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-16 text-white tracking-wider">
            Tala Prattoy
          </h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#"
              className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition duration-300"
            >
              Art Walkthrough
            </Link>
            <Link
              href="#"
              className="px-8 py-3 rounded-full border-2 border-red-600 text-white font-medium hover:bg-red-600 hover:bg-opacity-20 transition duration-300"
            >
              Privileged Entry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
