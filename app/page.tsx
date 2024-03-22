import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";

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
    <IssueSummary
      closed={closedIssues}
      inProgress={inProgressIssues}
      open={openIssues}
    />
  );
}
