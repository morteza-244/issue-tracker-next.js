import { Bug } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex items-center gap-5 bg-slate-50 shadow-lg p-5">
      <Link href={"/"}>
        <Bug size={32} />
      </Link>
      <ul className="space-x-5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-900 transition-colors font-medium"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
