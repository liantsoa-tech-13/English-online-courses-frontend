"use client"

import { ColumnDef } from "@tanstack/react-table"

export type User = {
  user_id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: {
    name: string;
  };
  is_active: boolean;
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "User ID",
  },
  {
    accessorKey: "firstname",
    header: "Firstname",
  },
  {
    accessorKey: "lastname",
    header: "Lastname",
  },
  {
    accessorKey: "email",
    header: "Email"
  }
]