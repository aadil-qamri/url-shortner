import Image from "next/image";
import Link from "next/link";
import zalando from "../lib/fonts-imp/font";


export default function Home() {
  return (
    <main className="bg-teal-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${zalando.className}`}>
            The Best URL Shortner in Market currently
          </p>
          <p className="px-34 text-center">
            We Are the most straightforward URL Shortner Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat architecto voluptatem sequi distinctio aspernatur sunt, veniam perspiciatis!
          </p>
          <div className='flex gap-3 '>
        <Link href="/shorten"><button className='cursor-pointer bg-teal-400  text-white rounded-lg shadow-lg px-3 py-2 font-bold'>Try Now</button></Link>
        <Link href="/github"><button className='cursor-pointer bg-teal-400  text-white rounded-lg shadow-lg px-3 py-2 font-bold'>GitHub</button></Link>
        </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" src="/vector.jpg" alt="Vector" fill={true} />
        </div>
      </section>
    </main>
  );
}
