import Link from "next/link"
import { redirect } from "next/navigation"

import { Button } from "@/components/ui/button"

export function DataTableAddButton() {
  return (
    <Link href={"/guest/new"}>
      <Button className="mr-3 h-8 bg-[#bbf7d0]" variant={"outline"}>
        Add New Guest
      </Button>
    </Link>
  )
}
