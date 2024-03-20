"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const issueStatus: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "In Progress", value: "IN_PROGRESS" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  return (
    <Select.Root
      onValueChange={(status) => {
        const query = status === "All" ? "" : `?status=${status}`;
        router.push(`/issues/list` + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content position="popper">
        <Select.Group>
          <Select.Label>All Status</Select.Label>
          {issueStatus.map((status) => (
            <Select.Item key={status.value} value={status.value || "All"}>
              {status.label}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
