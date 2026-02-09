import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/dist/client/link";

export const metadata: Metadata = {
  title: "Tack stack I Bring to the Table",
  description: "Technical: HTML, CSS/SCSS, JavaScript, TypeScript, jQuery, React, Next.js, Git. Workflow & Collaboration: Scrum, Jira, Agile development. Soft Skills: Strong communication, teamwork, problem-solving, adaptability, strong work ethic.",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center font-sans pt-[97px]">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-8 px-16 sm:items-start">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pl-3 md:pl-12">
          Tack stack I Bring to the Table
        </h1>
        <p className="mb-10 text-lg leading-8 text-zinc-600 dark:text-zinc-400 pl-3 md:pl-12">
          <strong>Technical</strong>: HTML, CSS/SCSS, JavaScript, TypeScript, jQuery, React, Next.js, Git. <br/>
          <strong>Workflow & Collaboration</strong>: Scrum, Jira, Agile development. <br/>
          <strong>Soft Skills</strong>: Strong communication, teamwork, problem-solving, adaptability, strong work ethic.<br/>
        </p>
        <h2 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pl-3 md:pl-12">
          My Preferred Tech Stack
        </h2>
        <p className="mb-10 text-lg leading-8 text-zinc-600 dark:text-zinc-400 pl-3 md:pl-12">
          HTML | CSS/SCSS | JavaScript/TypeScript | Jquery | React | Next.js | Git | SCRUM
        </p>
        <h2 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pl-3 md:pl-12">
          Tech Stack I can work with
        </h2>
        <p className="mb-10 text-lg leading-8 text-zinc-600 dark:text-zinc-400 pl-3 md:pl-12">
          HTML | CSS/SCSS | JavaScript/TypeScript | Jquery | React | Next.js | Angular | Vue | Git
        </p>
       
        
        <div className="mb-10 flex flex-col gap-4 text-base font-medium sm:flex-row pl-3 md:pl-12">
          <Link className="cursor-hover flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/pages/contact"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Contact me
          </Link>
        </div>
      </main>
    </div>
  );
}