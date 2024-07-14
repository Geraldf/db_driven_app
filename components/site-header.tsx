import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { ChangeLocale } from "@/components/ChangeLocale";
import { MainNav } from "@/components/main-nav";

import LoginRegister from "./loginregister";
import Logout from "./logout";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export async function SiteHeader() {
	const session = await auth();
	const handleClick = async (data: FormData) => {
		"use server";
		const session = await auth();
		if (session) {
			redirect(`/profile/${session.user!.id}`);
		}
		// API call to delete an item
	};
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-slate-300 bg-opacity-60  backdrop-blur-sm ">
			<div className="flex h-14  items-center px-4">
				<MainNav />

				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 grow md:w-auto md:flex-none"></div>

					<ChangeLocale />
					{session && (
						<form action={handleClick}>
							<Button variant="ghost" type="submit">
								<div className="pr-2 text-xs">{session.user!.name}</div>

								<Avatar>
									<AvatarImage
										src="https://github.com/shadcn.png"
										alt="@shadcn"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</Button>
						</form>
					)}
					<LoginRegister />
					{session && <Logout />}
				</div>
			</div>
		</header>
	);
}
