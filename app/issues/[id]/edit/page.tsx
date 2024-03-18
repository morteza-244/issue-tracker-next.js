import IssueForm from "@/app/issues/_components/IssueForm";
import prisma from "@/prisma/client";

const EditIssuePage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  return <IssueForm issue={issue!} />;
};

export default EditIssuePage;
