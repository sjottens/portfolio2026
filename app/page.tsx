import Image from "next/image";
import Link from "next/dist/client/link";
import LinkToButton from "@/app/components/LinkToButton";

export default function Home() {

  return (
    <div className="flex items-center justify-center font-sans pt-[97px]">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-8 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left pl-3 md:pl-12">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Frontend Developer
          </h1>
        </div>
        <p className="mb-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400 pl-3 md:pl-12">
          Hi 👋 I’m Rogier Ottens, a Frontend Developer who enjoys building clean, responsive, and user-friendly interfaces.

          This portfolio gives an overview of some of my {" "}
          <Link href="/pages/projects" className="cursor-hover font-medium text-zinc-950 dark:text-zinc-50">
            Projects 
          </Link>{" "}
          and {" "}
          <Link href="/pages/stack" className="cursor-hover font-medium text-zinc-950 dark:text-zinc-50">
            Tack Stack
          </Link>{" "} 
        </p>
        <div className="mb-5 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pl-3 md:pl-12">
          <span>I have build this Portfolio site using</span> 
          <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> <span>React, TypeScript, SCSS and Tailwindcss.</span>
        </div>
        
        <div>
          <h2 className="mb-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400 pl-3 md:pl-12">
            Think I’d be a good fit for your team?<br/>
            Get in touch — I’d love to hear from you.
          </h2>
        </div>
        <div className="mb-10 flex flex-col gap-4 text-base font-medium sm:flex-row pl-3 md:pl-12">
          <LinkToButton href="/pages/contact" target="" title="Link to contact page" buttonName="Contact Me"/>
        </div>
      </main>
    </div>
  );
}
