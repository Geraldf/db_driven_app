"use server";

import type { FormState } from "@/types";
import { checkCredentials } from "@/utils";

import "@/components/FormFormServer";

import { UserModel } from "@/prisma/zod";
import User, { Prisma } from "@prisma/client";

export async function loginAction(
	prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	console.log("1. ", formData);
	console.log("2. ", formData.entries());
	console.log("3. ", Object.fromEntries(formData.entries()));
	const rawFormData = Object.fromEntries(formData.entries());

	const result = UserModel.safeParse(rawFormData);

	if (!result.success) {
		return { error: result.error.issues };
	}

	return {};
}
