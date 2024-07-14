import * as z from "zod";

import {
	type CompleteAccount,
	type CompleteAuthenticator,
	type CompleteSession,
	RelatedAccountModel,
	RelatedAuthenticatorModel,
	RelatedSessionModel,
} from "./index";

export const UserModel = z.object({
	name: z.string().nullish(),
	username: z.string().nullish(),
	email: z.string().nullish(),
	image: z.string().nullish(),
});

export interface CompleteUser extends z.infer<typeof UserModel> {
	Session: CompleteSession[];
	Account?: CompleteAccount | null;
	Authenticator: CompleteAuthenticator[];
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
	}),
);
