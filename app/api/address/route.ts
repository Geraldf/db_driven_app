import { NextResponse } from "next/server"
import prisma from "@/actions/db"
import { getErrorMessageByCode } from "@/prisma/errors"
import { getErrorText } from "@/prisma/getErrorText"

export async function POST(req: Request, res: NextResponse) {
  // Do whatever you want
  const body = await req.json()
  try {
    const result = await prisma.guestAdress.create({
      data: body,
    })
    return NextResponse.json(result)
  } catch (err) {
    // Remove the type annotation from the catch clause variable
    const s: string = getErrorMessageByCode(err.code)

    return NextResponse.json({ error: s, code: err.code }, { status: 444 })
  }
}
