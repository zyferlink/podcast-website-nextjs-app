"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoIcon from "../../../public/images/Logo-icon.png";
import MenuIcon from "../../../public/images/Menu-dot.svg";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Other", href: "/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`px-[8%] lg:px-[16%] fixed top-0 left-0 w-full z-50 navbar transition-all duration-300 
            ${scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black "} `}
      >
        <div className="flex justify-between items-center gap-5 py-3">
          <div className="flex items-center gap-8">
            <Link href="/">
              <div className="flex items-center gap-2 overflow-hidden">
                <Image
                  src={LogoIcon}
                  alt="Logo"
                  className="object-cover w-8 h-8"
                />
                <h1 className="font-kanit text-4x1 tracking-wider">
                  Voice<span className="text-primary">Flow</span>
                </h1>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <nav className="hidden lg:flex space-x-6 menu-link relative z-40">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className={`flex Circular-font text-lg font-medium 
                        ${
                          pathname === link.href
                            ? "text-white underline font-semibold"
                            : "text-white"
                        } items-center gap-1 hover:text-primary`}
                    >
                      {link.label}
                      <Image
                        src={MenuIcon}
                        alt="MenuDot"
                        className="invert brightness-100 grayscale"
                      />
                    </Link>

                    <div className="absolute left-0 top-full hidden group-hover:block bg-gray shadow-xl p-2 rounded-lg min-[230px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={`block px-4 py-1 rounded-md font-medium text-lg 
                            ${
                              pathname === item.href
                                ? "text-white underline font-semibold"
                                : "text-white"
                            } hover:text-primary hover:translate-x-1 transition-all duration-200`}
                        >
                          <Image
                            src={MenuIcon}
                            alt="MenuDot"
                            className="invert brightness-100"
                          />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`flex gap-2 text-lg font-medium 
                        ${
                          pathname === link.href
                            ? "text-white font-semibold"
                            : "text-white"
                        } hover:text-primary`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
