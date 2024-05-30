import { useTranslation } from "react-i18next"
import * as z from "zod"

export const guestAdressModel = z.object({
  firstName: z.string().min(2).describe("guest.model.firstName"),
  lastName: z.string().min(2),
  address: z.string().min(2),
  city: z.string().min(2),
  state: z.string().min(2),
  zip: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(2),
  phone: z.string().min(2),
})
