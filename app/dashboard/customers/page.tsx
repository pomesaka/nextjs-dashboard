import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Customers",
    default: "Customers",
  },
};

export default function Page() {
  return <p>Coustomers Page</p>;
}
