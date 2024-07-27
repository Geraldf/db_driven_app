"use server"

import { tree } from "next/dist/build/templates/app-page"
import prisma from "@/actions/db"
import { FormState } from "@/utils/to-form-state"
import { guestAdress } from "@prisma/client"

export async function getAddress(id: string): Promise<guestAdress | null> {
  try {
    const guestAdress: guestAdress | null = await prisma.guestAdress.findUnique(
      {
        where: {
          id: id,
        },
      }
    )
    if (!guestAdress) {
      throw new Error("Address not found")
    }
    return guestAdress
  } catch (error) {
    throw new Error("Failed to get the address")
  }
}

export async function updateAddress(
  state: FormState | guestAdress,
  formData: guestAdress
): Promise<guestAdress | FormState> {
  // Implement the logic to update the address here
  // You can access the form state using the `state` parameter
  // For example, you can extract the values from the form state using destructuring

  // Perform the necessary operations to update the address
  // For example, you can make an API call to update the address in the database
  // You can use async/await or return a Promise to handle asynchronous operations

  // Return the updated form state
  console.log("formData", formData)
  console.log("state", state)
  if (!formData) {
    return {
      status: "SUCCESS",
      message: "Address updated successfully",
      fieldErrors: {},
      timestamp: Date.now(),
    }
  } else {
    return formData
  }
}
