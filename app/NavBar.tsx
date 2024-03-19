"use client";
import { Box } from "@radix-ui/themes";
import classNames from "classnames";
import { Bug } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="flex items-center gap-5 bg-slate-50 shadow-lg p-5">
      <Link href={"/"}>
        <Bug size={32} />
      </Link>
      <ul className="gap-5 flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                "text-zinc-900": link.href === pathname,
                "text-zinc-500": link.href !== pathname,
                "hover:text-zinc-800 transition-colors font-medium": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Logout</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
