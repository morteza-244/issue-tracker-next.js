import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";

export default async function Home() {
  const openIssues = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const closedIssues = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  const inProgressIssues = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  return (
    <IssueChart
      closed={closedIssues}
      inProgress={inProgressIssues}
      open={openIssues}
    />
  );
}
