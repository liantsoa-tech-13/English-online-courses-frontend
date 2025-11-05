"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Lesson = {
  id: number;
  position: number;
  title: string;
  isSample: boolean;
  updatedAt: string;
  createdBy: number;
}

export const columns: ColumnDef<Lesson>[] = [
  {
    accessorKey: "id",
    header: "Lesson ID",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "isSample",
    header: "Sample",
  },
  {
    accessorKey: "updatedAt",
    header: "Last Updated"
  },
    {
    accessorKey: "createdBy",
    header: "Created By"
  }
]