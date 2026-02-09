import Image from "next/image";
import Link from "next/link";

interface LinkToButtonProps {
  href: string;
  target: string;
  title: string;
  buttonName: string;
}

const LinkToButton = ({ href, title, buttonName, target }: LinkToButtonProps) => {
  return (
    <Link
        className="cursor-hover flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        href={href}
        rel="noopener noreferrer" 
        title={title}
        target={target}
    >
        <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={16}
        height={16} 
        style={{ width: "16px", height: "16px" }}
        />
        {buttonName}
    </Link>
  )
}

export default LinkToButton