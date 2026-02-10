import Link from "next/dist/client/link";
import type { Metadata } from "next";
import "./projects.scss";
import Image from "next/image";
import alkoLogo from "../../../public/projectImages/alko-logo-kl.png";
import bmnLogo from "../../../public/projectImages/BMN-logo-kl.png";
import iseroLogo from "../../../public/projectImages/Isero-logo-kl.png";
import plusLogo from "../../../public/projectImages/PLUS-logo-kl.png";
import LinkToButton from "@/app/components/LinkToButton";

export const metadata: Metadata = {
  title: "Latest projects",
  description: "Latest projects I have worked on.",
};


export default function ProjectsPage() {
  return (
    <div className="main-body flex items-center justify-center font-sans pt-[97px]">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-8 px-16 sm:items-start">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pl-3 md:pl-12">
          Latest projects
        </h1>
        <div className="intro-tekst pl-3 md:pl-12">
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-100 pb-8">
            I have worked on a variety of projects where I was primarily responsible for the UI implementation from Figma. Most projects were built using the Intershop CMS, with templating handled in ISML (Intershop Markup Language) and data retrieved through pipelines.<br />
            <br />
            The frontend was developed directly within ISML using HTML, LESS, JavaScript, and jQuery, with a strong focus on clean, maintainable, and user-friendly interfaces. I worked closely with backend developers, testers, and designers to ensure seamless integration, high quality, and a consistent user experience across all projects.<br />
            <br />
            Version control was managed using Git, and all projects were developed in multidisciplinary SCRUM teams. Sprint planning and task management were handled in Jira, supporting efficient collaboration and on-time delivery.
          </p>
        </div>

        {/*PROJECT TILES*/}
        <div className="body-projects w-full space-y-16">
          <div className="container">
            <div className="card">
              <div className="lines"></div>
              <div className="imgBx">
                <Image src={alkoLogo} alt="Alko logo" />
              </div>
              <div className="content">
                <div className="details">
                  <h2>Alko.fi</h2>
                  <p>
                    Developed and maintained user-facing features for the Alko website.
                  </p>
                  <Link href="/pages/alko" className="cursor-hover">Read More</Link>
                </div>
              </div>
            </div>
            {/*BMN*/}
            <div className="card">
              <div className="lines"></div>
              <div className="imgBx">
                <Image src={bmnLogo} alt="Bouw Materialen Nederland" />
              </div>
              <div className="content">
                <div className="details">
                  <h2>BMN.nl</h2>
                  <p>
                    Built A/B tests using the VWO framework on their React storefront.
                  </p>
                  <Link href="/pages/bmn" className="cursor-hover">Read More</Link>
                </div>
              </div>
            </div>
            {/*ISERO*/}
            <div className="card">
              <div className="lines"></div>
              <div className="imgBx">
                <Image src={iseroLogo} alt="Isero" />
              </div>
              <div className="content">
                <div className="details">
                  <h2>isero.nl</h2>
                  <p>
                    Led the development of the UI implementation for the webshop, focusing on responsiveness.
                  </p>
                  <Link href="/pages/isero" className="cursor-hover">Read More</Link>
                </div>
              </div>
            </div>
            {/*PLUS*/}
            <div className="card">
              <div className="lines"></div>
              <div className="imgBx">
                <Image src={plusLogo} alt="PLUS" />
              </div>
              <div className="content">
                <div className="details">
                  <h2>PLUS.nl</h2>
                  <p>
                    Built cross-browser website/shop using HTML, Less, JavaScript, Jquery and intershops isml.
                  </p>
                  <Link href="/pages/plus" className="cursor-hover">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-10 flex flex-col gap-4 text-base font-medium sm:flex-row pl-3 md:pl-12">
          <LinkToButton href="/pages/contact" target="" title="Link to contact page" buttonName="Contact Me"/>
        </div>
        
      </main>
    </div>
  )
}