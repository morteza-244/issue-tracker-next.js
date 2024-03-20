"use client";
import { Container, Flex } from "@radix-ui/themes";
import { Bug } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthStatus from "./AuthStatus";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const pathname = usePathname();
  const authPath = pathname === "/auth/signIn" || pathname === "/auth/signUp";

  return (
    <nav className="gap-5 bg-slate-50 shadow-lg p-5">
      <Container>
        <Flex justify={"between"}>
          <Flex align={"center"} gap={"4"}>
            <Link href={"/"}>
              <Bug size={32} />
            </Link>
            <NavLinks pathname={pathname} />
          </Flex>
          {!authPath && <AuthStatus />}
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
