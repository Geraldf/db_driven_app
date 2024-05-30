//"use server"

import { notFound } from "next/navigation" // Importing the notFound function from Next.js for handling 404 errors.

import prisma from "@/prisma/prismaClient"
import type { guestAdress, User } from "@prisma/client" // Importing the Post type from the Prisma client library.

export async function fetchUsers(): Promise<User[]> {
  // Function to fetch all posts from the database.
  return await prisma.user.findMany({
    orderBy: [
      {
        updatedAt: "desc",
      },
    ],
  })
}

export async function fetchUserById(id: string): Promise<User | null> {
  // Function to fetch a single post by its ID.
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  })

  if (!user) {
    notFound() // If the post is not found, a 404 error is thrown.
  }

  return user
}
export async function createGuestAdress(
  data: guestAdress
): Promise<guestAdress> {
  // Function to create a new post in the database.
  return await prisma.guestAdress.create({
    data,
  })
}
