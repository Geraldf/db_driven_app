"use server"

import prisma from "@/actions/db"
import { guestAdress } from "@prisma/client"

export async function getAddresses(): Promise<guestAdress[]> {
  const guestAdresses = await prisma.guestAdress.findMany()
  return guestAdresses
}
