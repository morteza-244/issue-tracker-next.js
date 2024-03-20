import { Skeleton } from "@/app/components";
import { Avatar, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AuthStatus = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <Skeleton width={"3rem"} />;
  if (status === "unauthenticated")
    return (
      <Link href="/auth/signIn" className="nav-link">
        Login
      </Link>
    );

  return (
    <Flex align={"center"}>
      {status === "authenticated" && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <div className="w-10 h-10 rounded-full">
              <Avatar
                src={session.user!.image!}
                fallback={session.user!.name!.slice(0, 2).toUpperCase()}
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
              <Link href="/api/auth/signout" className="nav-link">
                Logout
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
    </Flex>
  );
};

export default AuthStatus;
