'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { columns, Lesson } from "./columns";
import { DataTable } from "./data-table";

export default function LessonsPage() {
  const params = useParams(); 
  const rawId = params?.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;

  const [data, setData] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  useEffect(() => {
    if (!id) return; 

    const fetchLessons = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `${API_URL}/level/${id}/lessons`;
        console.log("Fetching lessons from:", url);

        const res = await fetch(url, { cache: "no-store" });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Fetch failed: ${res.status} - ${text}`);
        }

        const json: Lesson[] = await res.json();
        console.log("Fetched lessons:", json);

        setData(json);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("No lessons found or an error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [id, API_URL]);

  if (loading) {
    return (
      <div className="container mx-auto py-10 text-center">
        <p>Loading lessons...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="container mx-auto py-10 text-center">
        <p>No lessons available for this level.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
