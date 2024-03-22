import { Pagination } from "@/app/components";

export default function Home() {
  return (
    <div>
      <Pagination currentPage={2} itemCount={100} pageSize={10} />
    </div>
  );
}
