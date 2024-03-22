import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface IssueSummaryProps {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ closed, inProgress, open }: IssueSummaryProps) => {
  const cards: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
  ];
  return (
    <Flex gap={"5"}>
      {cards.map((card) => (
        <Card key={card.label}>
          <Flex direction={"column"} gap={"2"} align={'center'}>
            <Link
              className="text-sm font-medium"
              href={`/issues/list?status=${card.status}`}
            >
              {card.label}
            </Link>
            <Text size={"5"} className="font-bold font-mono">
              {card.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
