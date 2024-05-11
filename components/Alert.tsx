import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Props {
  msg: string
}

export function AlertDestructive(props: Props) {
  return (
    <Alert variant="destructive" className="bg-red-500 text-white">
      <AlertCircle className="h-4 w-4 text-white" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="flex flex-row">
        {props.msg}
        <button className="ml-4 rounded bg-white px-2 py-1 text-sm text-red-500 hover:bg-red-100">
          resend
        </button>
      </AlertDescription>
    </Alert>
  )
}
