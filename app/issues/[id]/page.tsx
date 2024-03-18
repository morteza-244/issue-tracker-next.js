import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueEditButton from "./IssueEditButton";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }}>
      <Box className="max-w-xl">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <IssueEditButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;