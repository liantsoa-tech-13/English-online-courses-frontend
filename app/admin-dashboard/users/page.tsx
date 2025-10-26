import { columns, User } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<User[]> {
  const res = await fetch("http://localhost:8080/api/admin/users", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
