import { IssuesStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Flex, Card, Box, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

const IssueDetails = async ({ params }: { params: { id: string } }) => {

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issue) notFound();

  return (
    <Box className="max-w-xl">
      <Heading>{issue.title}</Heading>
      <Flex gap={"3"} my={"2"}>
        <IssuesStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{issue.description}</p>
      </Card>
    </Box>
  );
};

export default IssueDetails;
