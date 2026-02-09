import Image from "next/image";
import type { Metadata } from "next";
import LinkToButton from "@/app/components/LinkToButton";
import PlusHomePage from "../../../public/projectImages/plus/project2.png";

export const metadata: Metadata = {
  title: "PLUS projects",
  description: "Built cross-browser website/shop using HTML, Less, JavaScript, Jquery and intershops isml, integrating with Intershop's backend services. Improved web performance and user experience through code optimization and testing. Coordinated with the product team to implement features based on feedback. Using: Intershop, HTML, Less, Bootstrap, JavaScript, Jquery, Git, Jira, Photoshop/Figma.",
};

export default function Pluspage() {
  return (
      <div className="flex items-center justify-center font-sans pt-[97px]">
        <main className="flex w-full max-w-3xl flex-col items-center justify-between py-8 px-16 sm:items-start">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pl-3 md:pl-12">
                PLUS.nl
            </h1>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-100 pb-8 pl-3 md:pl-12">
                Built cross-browser website/shop using HTML, Less, JavaScript, Jquery and intershops isml, integrating with Intershop's backend services.<br />
                Improved web performance and user experience through code optimization and testing.<br/>
                Coordinated with the product team to implement features based on feedback.<br/>
                Using: Intershop, HTML, Less, Bootstrap, JavaScript, Jquery, Git, Jira, Photoshop/Figma.
            </p>

            <div className="gap-4 text-base font-medium pl-3 py-3 md:pl-12">
                <LinkToButton href="https://www.plus.nl" target="blank" title="Link to plus.nl" buttonName="Visit PLUS.nl"/>
            </div>
            <div className="mb-10 gap-4 text-base font-medium pl-3 md:pl-12">
                <Image src={PlusHomePage} alt="BMN.nl home page" />
            </div>

            <div className="mb-10 gap-4 text-base font-medium pl-3 md:pl-12">
                <LinkToButton href="/pages/contact" target="" title="Link to contact page" buttonName="Contact Me"/>
            </div>
        </main>
      </div>
    );
}