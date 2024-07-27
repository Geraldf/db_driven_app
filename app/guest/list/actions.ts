"use server"

import prisma from "@/actions/db"
import { guestAdress, PrismaClient } from "@prisma/client"
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library"

export async function getAddresses(): Promise<guestAdress[]> {
  const guestAdresses = await prisma.guestAdress.findMany()
  return guestAdresses
}

export async function DeleteGuestAction(id: string): Promise<void> {
  await prisma.guestAdress.delete({
    where: {
      id: id + "3423",
    },
  })
}
