import prisma from "@/prisma/prismaClient";

// Import the Request and Response types from the 'express' package

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	// Add the Request and Response types to the function signature
	const id = params.id; // 'a', 'b', or 'c'
	const user = await prisma.user.findUnique({
		where: {
			id: id,
		},
	});

	return Response.json({ user }); // Use the 'response' parameter instead of 'Response'
}
