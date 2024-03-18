"use client";
import classNames from "classnames";
import { Bug } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
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
            className={classNames({
              "text-zinc-900": link.href === pathname,
              "text-zinc-500": link.href !== pathname,
              "hover:text-zinc-800 transition-colors font-medium": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
