import { signOut } from "@/auth";
import { t } from "i18next";
import { LogOut } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {};

export default async function Logout({}: Props) {
	return (
		<form
			action={async (formData) => {
				"use server";
				await signOut();
			}}
		>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<LogOut className="mr-2 h-4 w-4" />
					</TooltipTrigger>
					<TooltipContent>
						<p>{"logout"}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</form>
	);
}
