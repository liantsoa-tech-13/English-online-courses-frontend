'use client';
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { columns, Lesson } from "./columns";
import { DataTable } from "./data-table";

export default function LessonsPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [data, setData] = useState<Lesson[]>([]);
  const [page, setPage] = useState(1);
  const size = 3;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  useEffect(() => {
    if (!id) return;

    const fetchLessons = async () => {
      setLoading(true);
      const url = `${API_URL}/level/${id}/lessons?page=${page}&size=${size}`;
      console.log("Fetching:", url);
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const json: Lesson[] = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [id, page, size, API_URL]);

  if (loading) return <p>Loading lessons...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="h-[300px] flex flex-col">
      <DataTable columns={columns} data={data} page={page} size={size} onPageChange={setPage} />
    </div>
  );
}
