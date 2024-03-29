"use client";
import { Card } from "@radix-ui/themes";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface IssueChartProps {
  issuesStatus: {
    open: number;
    inProgress: number;
    closed: number;
  };
}

const IssueChart = ({
  issuesStatus: { closed, inProgress, open },
}: IssueChartProps) => {
  const data = [
    { label: "Open", value: open },
    { label: "Closed", value: closed },
    { label: "In Progress", value: inProgress },
  ];
  return (
    <Card>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart data={data}>
          <XAxis dataKey={"label"} className="text-[12px] md:text-[17px]" />
          <YAxis />
          <Bar
            dataKey={"value"}
            barSize={70}
            style={{ fill: "var(--accent-9)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
