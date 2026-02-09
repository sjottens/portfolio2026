"use client";

import Link from "next/link";
import Image from "next/image";
import Elviko from '../../public/logo/ELVIKO-kl-nb-logo.png';
import { usePathname } from "next/navigation";
import { useState, ChangeEvent } from "react";

const navLinks = [
  { name: "Home", href: "/", style: { "--i": 0 } as React.CSSProperties },
  { name: "About me", href: "/pages/about", style: { "--i": 1 } as React.CSSProperties },
  { name: "Projects", href: "/pages/projects", style: { "--i": 2 } as React.CSSProperties },
  { name: "Stack", href: "/pages/stack", style: { "--i": 3 } as React.CSSProperties },
  { name: "Contact", href: "/pages/contact", style: { "--i": 4 } as React.CSSProperties },
];

function MainMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleToggle = (e: ChangeEvent<HTMLInputElement>): void => {
    setOpen(e.target.checked);
  };

  const closeMenu = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Link href="/" className="logo">
        <Image src={Elviko} alt="Elviko Frontend Craftsmanship" />
      </Link>

      {/* controlled checkbox */}
      <input
        type="checkbox"
        id="menu-toggle"
        checked={open}
        onChange={handleToggle}
        hidden
      />

      <label htmlFor="menu-toggle" className="menu-icon">
        <i className="bx bx-menu cursor-hover"></i>
        <i className="bx bx-x cursor-hover"></i>
      </label>

      <nav className="navbar">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              key={link.name}
              href={link.href}
              style={link.style}
              className={isActive ? "link-active" : "cursor-hover"}
              onClick={closeMenu}   // 👈 closes menu on mobile
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

export default MainMenu;