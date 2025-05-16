import Link from "next/link";

export default function AdvertiseSection() {
  return (
    <section className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Advertise With Us</h2>
            <p className="text-gray-400 max-w-lg mt-2">
              We invite you to partner with Tala Prattoy for extraordinary
              collaborative opportunities that showcase artistic innovation.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 inline-block"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
