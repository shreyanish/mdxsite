"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  const links = [
    { name: "about", url: "/" },
    { name: "work", url: "/work" },
    { name: "notes", url: "/notes" },
  ];

  return (
    <nav className="
      col-span-4 md:col-span-1 md:col-start-7 md:row-start-1
      flex flex-col items-end md:justify-start 
      gap-[8px] 
      text-[14px] leading-none
      mb-[40px] md:mb-0 md:mt-[55px]
    ">
      {links.map((link) => {
        const isActive = pathname === link.url;
        return (
          <Link
            key={link.name}
            href={link.url}
            className={`${isActive ? "text-[#1C45FF]" : "text-[#A2A2A2]"
              } hover:text-[#1C45FF] underline underline-offset-4 decoration-1 transition-colors`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
