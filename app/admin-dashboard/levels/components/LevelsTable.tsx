'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

interface Levels{
    id: number
    name: string
}

export default function LevelsTable(){
    const [levels, setLevels] = useState<Levels[]>([]);
    
      useEffect(() => {
        const fetchLevels = async () => {
    
          const res = await fetch(`/levels`);
          const data = await res.json();
          setLevels(data);
        };
        fetchLevels();
      }, );

    return (
      <div>
        {levels.map((l) => (
          <Link href='/level/'> {l.name}</Link>
        ))}
      </div>
    )
}