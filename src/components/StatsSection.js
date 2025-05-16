export default function StatsSection() {
  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900/70 rounded-lg p-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 md:col-span-1">
              <h2 className="text-3xl font-bold">
                Lorem <span className="text-white">Ipsum</span>
              </h2>
              <p className="text-gray-300 mt-2">
                Tala Prattoy upholds the art aspects of Durga Puja. Essence of
                creativity, combining the looks and outfits of art and art
                exhibitions expressing the futuristic images of the festival.
              </p>
            </div>

            <div className="col-span-3 md:col-span-2">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-2xl font-bold text-red-600">500K+</p>
                    <p className="text-gray-400 text-sm">
                      Existing Partnerships
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-2xl font-bold text-red-600">5M</p>
                    <p className="text-gray-400 text-sm">
                      Existing Partnerships
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-2xl font-bold text-red-600">100K+</p>
                    <p className="text-gray-400 text-sm">
                      Existing Partnerships
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-2xl font-bold text-red-600">5M</p>
                    <p className="text-gray-400 text-sm">Annual Viewership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
