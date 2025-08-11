"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/strings.utils"; 

const links = [
  { href: "/dashboard", label: "Home" },
  { href: "#", label: "Workbench" },
  { href: "#", label: "Tickets" },
  { href: "#", label: "Service Catalogue" },
  { href: "#", label: "Knowledge Management" },
  { href: "#", label: "Admin Settings" },
];

export default function Navlinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 items-center gap-3 ">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "p-2 rounded transition-colors duration-200 text-sm",
              isActive
                ? "bg-baz-primaryBlue100 text-baz-primaryBlue600"
                : "hover:bg-baz-primaryBlue100 hover:text-baz-primaryBlue600 text-baz-primaryText"
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
