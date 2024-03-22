import { Button, Flex, Text } from "@radix-ui/themes";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ currentPage, itemCount, pageSize }: PaginationProps) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;
  return (
    <Flex align={"center"} gap={"2"}>
      <Text size={"2"}>
        Page {currentPage} of {pageCount}
      </Text>
      <Button variant="soft" color="gray" disabled={currentPage === 1}>
        <ChevronsLeft size={20} />
      </Button>
      <Button variant="soft" color="gray" disabled={currentPage === 1}>
        <ChevronLeft size={20} />
      </Button>
      <Button variant="soft" color="gray" disabled={currentPage === pageCount}>
        <ChevronRight size={20} />
      </Button>
      <Button variant="soft" color="gray" disabled={currentPage === pageCount}>
        <ChevronsRight size={20} />
      </Button>
    </Flex>
  );
};

export default Pagination;
