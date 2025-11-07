"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

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
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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