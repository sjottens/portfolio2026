import Image from "next/image";
import type { Metadata } from "next";
import LinkToButton from "@/app/components/LinkToButton";
import BmnHomePage from "../../../public/projectImages/bmn/project3.png";

export const metadata: Metadata = {
  title: "BMN project",
  description: "At BMN, I collaborated with business analysts and designers to implement A/B tests for validating new design ideas before development. Using: VWO, HTML, CSS, JavaScript, Trello, Figma.",
};

export default function Bmnpage() {
  return (
      <div className="flex items-center justify-center font-sans pt-[97px]">
        <main className="flex w-full max-w-3xl flex-col items-center justify-between py-8 px-16 sm:items-start">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pl-3 md:pl-12">
                BMN.nl
            </h1>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-100 pb-8 pl-3 md:pl-12">
                At BMN, I collaborated with business analysts and designers to implement A/B tests for validating new design ideas before development.<br/>
                Using: VWO, HTML, CSS, JavaScript, Trello, Figma.
            </p>

            <div className="gap-4 text-base font-medium pl-3 py-3 md:pl-12">
                <LinkToButton 
                    href="https://www.bmn.nl" 
                    target="blank" 
                    title="Link to bmn.nl" 
                    buttonName="Visit BMN.nl"
                />
            </div>
            <div className="mb-10 gap-4 text-base font-medium pl-3 md:pl-12">
                <Image src={BmnHomePage} alt="BMN.nl home page" />
            </div>
          
            <div className="mb-10 gap-4 text-base font-medium pl-3 md:pl-12">
                <LinkToButton href="/pages/contact" target="" title="Link to contact page" buttonName="Contact Me"/>
            </div>
        </main>
      </div>
    );
}