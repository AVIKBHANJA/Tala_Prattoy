export default function DiscoverSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image grid */}
          <div className="grid grid-cols-1 gap-4">
            <div className="aspect-video overflow-hidden relative rounded-lg">
              <div className="h-full w-full bg-[url('/rec41.jpg')] bg-cover bg-center"></div>
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-all">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="pl-0 md:pl-8">
            <h2 className="text-4xl font-bold mb-6">
              Discover <span className="text-white">Tala</span>
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
              We are unveiling the looks that will glorify the art aspects of
              Durga Puja. Essence of creativity combining the looks and outfits
              of art and art exhibition expressing the futuristic images of the
              festival. Tala Prattoy&apos;s work exhibition has always been on
              Durga Puja as a specific art genre where the public space is being
              transformed into art venue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
