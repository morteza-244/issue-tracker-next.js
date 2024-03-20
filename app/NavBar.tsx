"use client";
import {
  Container,
  Flex,
  DropdownMenu,
  Avatar,
  Button,
  Text,
} from "@radix-ui/themes";
import classNames from "classnames";
import { Bug } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const authPath = pathname === "/auth/signIn" || pathname === "/auth/signUp";
  const { data: session, status } = useSession();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="gap-5 bg-slate-50 shadow-lg p-5">
      <Container>
        <Flex justify={"between"}>
          <Flex align={"center"} gap={"4"}>
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
          </Flex>
          {!authPath && (
            <Flex align={"center"}>
              {status === "authenticated" && (
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <div className="w-10 h-10 rounded-full">
                      <Avatar
                        src={session.user!.image!}
                        fallback={session.user!.name!.slice(0, 2)}
                        radius="full"
                        className="cursor-pointer"
                      />
                    </div>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="center">
                    <DropdownMenu.Label>
                      <Text size="2">{session.user!.email}</Text>
                    </DropdownMenu.Label>
                    <DropdownMenu.Item>
                      <Link href="/api/auth/signout" className="font-medium">
                        Logout
                      </Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              )}
              {status === "unauthenticated" && (
                <Link href="/auth/signIn" className="font-medium">
                  Login
                </Link>
              )}
            </Flex>
          )}
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
