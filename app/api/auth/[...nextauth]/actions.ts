"use server";



import { AdapterUser } from "next-auth/adapters";
import prisma from "../../../../prisma/prismaClient";
import { createTransport } from "nodemailer"

export const createUser = async (user:AdapterUser) => {
	//placeholder
	await prisma.user
		.update({
			where: { id: user.id },
			data: {},
		})
		.catch((e: any) => {
			console.error(
				"Failed to update new user (initial user creation and setup)"
			);
			console.error(e);
		});
};

