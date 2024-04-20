import type { Metadata } from "next";

import Table from "@/app/ui/customers/table";

export const metadata: Metadata = {
  title: {
    template: "%s | Customers",
    default: "Customers",
  },
};

export default async function Page({
  searchParams,
}: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || "";
  return (
    <div className="w-full">
      <Table query={query} />
    </div>
  );
}
