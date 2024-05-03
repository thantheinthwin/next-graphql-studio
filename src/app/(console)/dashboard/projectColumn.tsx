import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ProjectsListViewData } from "@/packages/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ProjectsListViewData>[] = [
  {
    accessorKey: "name",
    header: () => <div>Name</div>,
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: () => <div>Description</div>,
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  {
    id: "actions",
    cell: ({ row, table }) => (
      <Button
        size="icon"
        variant="ghost"
        className="flex h-fit w-fit p-2 text-red-500 hover:bg-accent hover:text-red-500 focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:bg-muted"
        onClick={() => {
          (table.options.meta as any).removeItem(row.getValue("id"));
        }}
      >
        <Icons.Trash className="h-4 w-4" />
        <span className="sr-only">Open actions</span>
      </Button>
    ),
    meta: {
      cellClass: "w-10",
    },
  },
  {
    accessorKey: "id",
  },
];
