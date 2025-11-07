'use client';
import { useState, useEffect } from "react";
import { columns, User } from "./columns";
import { DataTable } from "./data-table";

export default function UsersPage() {
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const size = 2;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const url = `${API_URL}/admin/users?page=${page}&size=${size}`;
      console.log("Fetching:", url);
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const json: User[] = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page, size, API_URL]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="h-[300px] flex flex-col">
      <DataTable columns={columns} data={data} page={page} size={size} onPageChange={setPage} />
    </div>
  );
}
