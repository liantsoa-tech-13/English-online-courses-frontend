"use client";

import { Clock, Leaf } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export type Level = {
  id: number;
  name: string;
  status: string;
  lessonCount: number;
  updatedAt: string | null; 
};

export default function Box() {
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const res = await fetch("http://localhost:8080/levels");
        if (!res.ok) throw new Error("Failed to fetch levels");

        const data: Level[] = await res.json();

        const formatted: Level[] = data.map((l) => ({
          ...l,
          updatedAt: l.updatedAt ?? null,
        }));

        setLevels(formatted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLevels();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {levels.map((level) => (
        <div
          key={level.id}
          className="border-2 border-gray-400 rounded-3xl w-72"
        >
          <div className="flex flex-col justify-around bg-custom-beige-dark h-64 px-4 rounded-3xl bx-2 mx-2 mt-2">
            <div className="px-2 py-1 w-fit rounded-2xl bg-white flex items-center gap-1">
              <Clock className="w-5 h-5 text-gray-500" />
              <span className="text-sm">
                {level.updatedAt
                  ? new Date(level.updatedAt).toLocaleDateString()
                  : "No date"}
              </span>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div>
                <span className="text-sm">Level: {level.id}</span>
                <h1 className="text-3xl font-bold">{level.name}</h1>
              </div>

              <div className="rounded-full p-2 bg-white">
                <Leaf className="w-5 h-5 text-green-500" />
              </div>
            </div>

            <div className="w-fit rounded-2xl px-2 py-1 border border-black">
              <p>{level.status}</p>
            </div>
          </div>

          <div className="flex flex-row justify-around items-center mt-2 mb-4">
            <div className="w-fit text-center">
              <h1 className="text-2xl">Lessons:</h1>
              <span>{level.lessonCount}</span>
            </div>

            <Link href={`/admin-dashboard/level/${level.id}/lessons`}>
              <button className="rounded-3xl mt-4 px-4 py-2 bg-black text-white hover:bg-gray-500 transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
