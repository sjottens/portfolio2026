import Image from "next/image";
import type { Metadata } from "next";
import LinkToButton from "@/app/components/LinkToButton";
import IseroHomePage from "../../../public/projectImages/isero/isero-home-page.png";

export const metadata: Metadata = {
  title: "Isero project",
  description: "Led the development of the UI implementation for the webshop, focusing on responsiveness.",
};

export default function Iseropage() {
  return (
      <div className="flex items-center justify-center font-sans pt-[97px]">
        <main className="flex w-full max-w-3xl flex-col items-center justify-between py-8 px-16 sm:items-start">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pl-3 md:pl-12">
                isero.nl
            </h1>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-100 pb-8 pl-3 md:pl-12">
                Led the development of the UI implementation for the webshop, focusing on responsiveness.<br/>
                Worked with backend engineers to integrate APIs seamlessly with the frontend.<br/>
                Contributed to the new checkout flow/design that were used with the Intershop ecosystem.<br/>
                Using: Intershop, HTML, Less, Bootstrap, JavaScript, Jquery, Git, Jira, Figma.
            </p>

            <div className="gap-4 text-base font-medium pl-3 py-3 md:pl-12">
                <LinkToButton 
                    href="https://www.isero.nl" 
                    target="blank" 
                    title="Link to isero.nl" 
                    buttonName="Visit isero.nl"
                />
            </div>
            <div className="mb-10 gap-4 text-base font-medium pl-3 md:pl-12">
                <Image src={IseroHomePage} alt="isero.nl home page" />
            </div>

            <div className="mb-10 gap-4 text-base font-medium pl-3 md:pl-12">
                <LinkToButton href="/pages/contact" target="" title="Link to contact page" buttonName="Contact Me"/>
            </div>
        </main>
      </div>
    );
}