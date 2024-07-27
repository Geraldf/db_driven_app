"use client"

import * as React from "react"
import { useActionState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/i18n/client"
import { GuestAdress } from "@/prisma/zod/guestadress"
import { useConfirm } from "@/providers/alert-provider"
import { EMPTY_FORM_STATE } from "@/utils/to-form-state"
import { ColumnDef } from "@tanstack/react-table"
import { AlertCircle, ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import MBC from "@/components/mbc"

import { addAddress } from "../new/actions"
import { DeleteGuestAction, getAddresses } from "./actions"
import { DataTable } from "./components/data-table"

const columns: ColumnDef<unknown, any>[] = [
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
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }: { row: any }) => (
      <Link href={row.original.id}>
        <div className="lowercase">{row.getValue("email")}</div>
      </Link>
    ),
  },
  {
    accessorKey: "firstName",
    header: "FirstName",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("firstName")}</div>
    ),
  },
  {
    accessorKey: "lastName",
    header: "LastName",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lastName")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: function Cell({ row }: { row: any }) {
      const rowID = row.original.id
      const confirm = useConfirm()
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(rowID)}
            >
              copy Guest ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={async () => {
                const d = await confirm({
                  title: "Delete Guest",
                  body: "realy delete this guest?",
                  cancelButton: "I changed my mind",
                }) // true | false
                if (d) {
                  console.log(DeleteGuestAction(rowID))
                }
              }}
            >
              Delete Guest
            </DropdownMenuItem>
            {/* <AlertConfirmation
              trigger={
                <Button className="w-full text-left" variant="ghost">
                  Delete Guest
                </Button>
              }
            /> */}

            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function Page() {
  const { t } = useTranslation("common")
  const p = usePathname()
  const slices = p.split("/").filter((s) => s !== "")
  const [formState, action] = useActionState(addAddress, EMPTY_FORM_STATE)

  const [addresses, setAddresses] = React.useState([] as GuestAdress[])
  useEffect(() => {
    getAddresses().then((data: GuestAdress[]) => {
      setAddresses(data)
    })
  }, [])

  return (
    <ContentLayout title={t(`${slices.join(".")}.title`)}>
      <MBC />
      <DataTable data={addresses} columns={columns} />

      {formState.status == "ERROR" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{formState.message}</AlertDescription>
        </Alert>
      )}
    </ContentLayout>
  )
}
