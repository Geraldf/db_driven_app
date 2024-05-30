import * as z from "zod"

import {
  CompleteAccount,
  CompleteAuthenticator,
  CompleteSession,
  RelatedAccountModel,
  RelatedAuthenticatorModel,
  RelatedSessionModel,
} from "./index"

export const UserModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  username: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  Session: CompleteSession[]
  Account?: CompleteAccount | null
  Authenticator: CompleteAuthenticator[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() =>
  UserModel.extend({
    Session: RelatedSessionModel.array(),
    Account: RelatedAccountModel.nullish(),
    Authenticator: RelatedAuthenticatorModel.array(),
  })
)
