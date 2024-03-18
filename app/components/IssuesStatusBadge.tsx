import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

type StatusColors = "green" | "red" | "violet";

const statusMap: Record<Status, { label: string; color: StatusColors }> = {
  CLOSED: { label: "Closed", color: "green" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  OPEN: { label: "Open", color: "red" },
};

const IssuesStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssuesStatusBadge;
