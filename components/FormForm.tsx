"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { RefObject } from "react";
import { useForm, useFormState } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {
	schema: any;
	// onSubmit: (val: z.infer<any>) => void
	formAction: any;
	className?: string;
	submitText?: string;
	data?: string;
	formState: any;
	formRef?: RefObject<HTMLFormElement>;
};

export function FormForm({
	schema,
	formAction,
	className,
	submitText,
	formRef,
	formState,
	data,
}: Props) {
	const { i18n, t } = useTranslation("common");
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {},
	});
	const isSubmitting = form.formState.isSubmitting;

	return (
		<Form {...form}  >
			{/* <form onSubmit={form.handleSubmit(onSubmit)} className={className}> */}
			<form action={formAction} className={className}  ref={formRef}>
				{Object.keys(schema.shape).map((fieldName) => {
					return (
						<FF
							key={fieldName}
							control={form.control}
							name={fieldName}
							fieldSchema={schema.shape[fieldName]}
							value={data?.get(fieldName)}
						/>
					);
				})}

				<div className="flex h-full items-end justify-end">
					<Button className="h-9 bg-blue-500">
						{isSubmitting ? "Submitting..." : t(submitText || "submit")}
					</Button>
				</div>
			</form>
		</Form>
	);
}

const FF = (props: any) => {
	const { control, name, fieldSchema } = props;

	const pathname: string = usePathname().replaceAll("/", ".").substring(1);
	const { i18n, t } = useTranslation("common");

	return (
		<>
			<FormField
				control={control}
				name={name}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{t(`${pathname}.${name}`) as string}</FormLabel>
						<FormControl>
							<Input placeholder="shadcn" {...field} />
						</FormControl>

						{fieldSchema.description && (
							<FormDescription className="text-xs">
								{fieldSchema.description}
							</FormDescription>
						)}
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	);
};
