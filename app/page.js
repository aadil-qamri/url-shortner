import Image from "next/image";
import Link from "next/link";
import zalando from "../lib/fonts-imp/font";

export default function Home() {
  return (
    <main className="bg-teal-100 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 h-[70vh] md:h-[50vh]">
        {/* Text Section */}
        <div className="flex flex-col gap-4 items-center md:items-start justify-center px-6 md:px-16 text-center md:text-left">
          <p className={`text-2xl md:text-3xl font-bold ${zalando.className}`}>
            The Best URL Shortener in Market Currently
          </p>
          <p className="text-sm md:text-base px-4 md:px-0">
            We are the most straightforward URL Shortener. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Laudantium repellat architecto
            voluptatem sequi distinctio aspernatur sunt, veniam perspiciatis!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
            <Link href="/shorten">
              <button className="cursor-pointer bg-teal-400 text-white rounded-lg shadow-lg px-4 py-2 font-bold w-full sm:w-auto">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="cursor-pointer bg-teal-400 text-white rounded-lg shadow-lg px-4 py-2 font-bold w-full sm:w-auto">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-start relative w-full h-64 md:h-full mt-6 md:mt-0">
          <Image
            className="object-contain mix-blend-darken"
            src="/vector.jpg"
            alt="Vector"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
