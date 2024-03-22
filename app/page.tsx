import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  const issuesStatus = {
    open: await prisma.issue.count({
      where: {
        status: "OPEN",
      },
    }),
    closed: await prisma.issue.count({
      where: {
        status: "CLOSED",
      },
    }),
    inProgress: await prisma.issue.count({
      where: {
        status: "IN_PROGRESS",
      },
    }),
  };
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap={"5"}>
      <Flex direction={"column"} gap={"5"}>
        <IssueSummary issuesStatus={issuesStatus} />
        <IssueChart issuesStatus={issuesStatus} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}
