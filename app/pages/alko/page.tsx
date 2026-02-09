import Image from "next/image";
import type { Metadata } from "next";
import LinkToButton from "@/app/components/LinkToButton";
import alkoHomePage from "../../../public/projectImages/alko/project1.png";
import alkoGiftCardPage from "../../../public/projectImages/alko/alko-gift-card-page.png";

export const metadata: Metadata = {
  title: "Alko project",
  description: "At Alko, I worked on implementing the UI components, removing deprecated code from the legacy codebase, and developing the new UI for the gift card page. I also implemented the updated UI for the checkout pages.",
};

export default function Alkopage() {
  return (
      <div className="flex items-center justify-center font-sans pt-[97px]">
        <main className="flex w-full max-w-3xl flex-col items-center justify-between py-8 px-16 sm:items-start">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pl-3 md:pl-12">
                Alko.fi
            </h1>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-100 pb-8 pl-3 md:pl-12">
                At Alko, I worked on implementing the UI components, removing deprecated code from the legacy codebase, and developing the new UI for the gift card page.<br/>
                I also implemented the updated UI for the checkout pages.<br/>
                Using: Intershop, HTML, Less, Bootstrap, JavaScript, Jquery, Git, Jira, Figma.
            </p>

            <div className="gap-4 text-base font-medium pl-3 py-3 md:pl-12">
                <LinkToButton 
                    href="https://www.alko.fi/en" 
                    target="blank" 
                    title="Link to alko.fi" 
                    buttonName="Visit Alko.fi"
                />
            </div>
            <div className="mb-10 gap-4 text-base font-medium pl-3 md:pl-12">
                <Image src={alkoHomePage} alt="Alko home page" />
            </div>
            <div className="mb-10 gap-4 text-base font-medium pl-3 md:pl-12">
                <Image src={alkoGiftCardPage} alt="Alko gift card page" />
            </div>

            <div className="mb-10 gap-4 text-base font-medium pl-3 md:pl-12">
                <LinkToButton href="/pages/contact" target="" title="Link to contact page" buttonName="Contact Me"/>
            </div>
        </main>
      </div>
    );
}