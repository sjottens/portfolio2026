import Image from "next/image";
import type { Metadata } from "next";
import LinkToButton from "@/app/components/LinkToButton";
import RogierOttens from "@/public/fotoRogier.jpg";


export const metadata: Metadata = {
  title: "About me page",
  description: "Hi, I’m Rogier Ottens — a Frontend Developer from the Netherlands with a passion for building clean, user-friendly interfaces.",
};

export default function AboutPage() {
  return (
      <div className="flex items-center justify-center font-sans pt-[97px]">
        <main className="flex w-full max-w-3xl flex-col items-center justify-between py-8 px-16 sm:items-start">
          <div className="md:flex gap-4 text-base font-medium pl-3 md:pl-12">
            <div className="w-full max-w-30 pb-3">
              <Image
                className="personalImage"
                src={RogierOttens}
                alt="Rogier Ottens"
                width={100}
                height={100} 
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div>
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-100">
                Hi, I’m Rogier Ottens — a Frontend Developer from the Netherlands with a passion for building clean, user-friendly interfaces.<br/>
                <br/>
              </p>
            </div>
          </div>
          
          <p className="mb-10 text-lg leading-8 text-zinc-600 dark:text-zinc-100 pb-8 pl-3 md:pl-12">
            I have 11 years of professional experience as a frontend developer, supported by 15 years as a Desktop Publisher.<br/>
            That mix of design and development allows me to translate designs into well-structured, high-quality frontend solutions.<br/>
            <br/>
            I’ve worked on projects for brands like ALKO, PLUS, Isero, Xerox, Hoogvliet, BMN, and Body&Fit, mainly focusing on UI implementation using HTML, Less, JavaScript, and jQuery, often within the Intershop e-commerce framework.<br/>
            I’m comfortable working in Scrum-based environments and collaborating with international teams.<br/>
            <br/>
            I’ve also contributed to A/B testing and experimentation, using VWO for BMN and Optimizely for Body&Fit, helping teams make informed, data-driven UX improvements.<br/>
            <br/>
            Alongside my core skill set, I have experience working with modern frameworks such as Angular, React, and Vue, and I enjoy continuously expanding my frontend toolkit.<br/>
            <br/>
            Born in Amsterdam, now living in Aalsmeer with my girlfriend, two kids, and our dog.<br/>
            Outside of work, I recharge by wavesurfing whenever possible 🌊
          </p>
          
          <div className="mb-10 gap-4 text-base font-medium pl-3 md:pl-12">
            <LinkToButton href="/pages/contact" target="" title="Link to contact page" buttonName="Contact Me"/>
          </div>
        </main>
      </div>
    );
}