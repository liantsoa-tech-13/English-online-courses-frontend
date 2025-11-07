"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from 'react';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  size: number;
  onPageChange: (newPage: number) => void;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: Dispatch<SetStateAction<RowSelectionState>>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  page,
  size,
  onPageChange,
  rowSelection,
  onRowSelectionChange
}: DataTableProps<TData, TValue>) {

  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    state: { rowSelection },
    onRowSelectionChange,
  });

  // for the selected users
  //const selectedUsers = table.getSelectedRowModel().rows.map(row => row.original);

  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (data.length === size) onPageChange(page + 1);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {data.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-auto py-2 flex items-center justify-between">

        <Button variant="outline" onClick={handlePrev} disabled={page === 1}>
          Previous
        </Button>

        <span className="text-sm text-gray-600">Page {page}</span>

        <Button
          variant="outline"
          onClick={handleNext}
          disabled={data.length < size}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
