"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowDownIcon,
} from "@radix-ui/react-icons";
import { difficulty, statuses } from "./data/data";
import { Task } from "./data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import Link from "next/link";

export const columns: ColumnDef<Task>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Problem" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className={`mr-2 h-6 w-6 text-muted-foreground ${status.color}`} />
          )}
          {/* <span>{status.label}</span> */}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
    enableSorting: false
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);
      
      return (
        <Link href={`/problems/${row.id}`}>
          <div className="flex space-x-2 hover:text-blue-300">
            {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
            <span className="max-w-[500px] truncate font-medium text-lg">
              {row.getValue("title")}
            </span>
          </div>
        </Link>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "difficulty",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Difficulty" />
    ),
    cell: ({ row }) => {
      let difficulties = difficulty.find(
        (difficulty) => difficulty.value === row.getValue("difficulty")
      );

      if (!difficulties) {
        // return null;
        difficulties = {
          color: 'text-emerald-500',
          label: 'Easy',
          value: 'easy',
          numVal: 1,
          icon: ArrowDownIcon
        }
      }

      return (
        <div className="flex items-center">
          {/* {difficulties.icon && (
            <difficulties.icon
              className="mr-2 h-4 w-4 text-muted-foreground"
            />
          )} */}
          <span className={`${difficulties?.color} text-lg`}>
            {difficulties?.label}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];
