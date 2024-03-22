import prisma from "@/prisma/client";
import { Badge, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import { IssuesStatusBadge } from "./components";

const LatestIssues = async () => {
  const latestIssues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 7,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card>
      <Heading size={"4"}>Latest Issues</Heading>
      <Table.Root>
        <Table.Body>
          {latestIssues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify={"between"} align={"center"}>
                  <Flex direction={"column"} align={"start"} gap={"2"}>
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <IssuesStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUserId && (
                    <Badge color="orange">{issue.assignedToUser?.name}</Badge>
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
