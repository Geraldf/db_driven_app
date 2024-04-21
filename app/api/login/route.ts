import { NextRequest, NextResponse } from "next/server"

import { Schema } from "@/schemas/loginSchema"

export async function POST(request: NextRequest) {
  try {
    // Parsing the data yet again on the server-side
    // to guarantee 100% security.
    const { email, password } = Schema.parse(await request.json())
    console.log("email: " + email, "password: " + password)
    // Your server-side logic here...

    return new NextResponse("It works")
  } catch (err: any) {
    console.log(err.message)
    return new NextResponse("this is an error")
  }
}