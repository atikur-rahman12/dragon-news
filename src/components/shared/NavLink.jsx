"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md transition font-medium ${
        isActive
          ? "bg-purple-600 text-white !important"
          : "hover:text-purple-500"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
