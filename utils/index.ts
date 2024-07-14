// format-error.ts
import { AuthError } from "next-auth";
import { ZodError, z } from "zod";

import type { ActionErrors, FieldErrors } from "./action-result";

export const checkCredentials = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	const validEmail = "example@email.com";
	const validPassword = "password123";

	await new Promise((resolve) => setTimeout(resolve, 2000));

	if (email === validEmail && password === validPassword) {
		return { data: "Login successful!" };
	} else {
		return { error: "Invalid email or password" };
	}
};

export const focusOnErrorPath = (errorPath?: string | number) => {
	if (!errorPath) {
		return;
	}

	const inputElement = document.getElementsByName(
		errorPath.toString(),
	)[0] as HTMLInputElement;

	if (inputElement) {
		inputElement.focus();
	}
};

/// Create an ActionErrors object with a field error
function getErrorsForField(field: string, error: string): ActionErrors {
	return {
		fieldErrors: {
			[field]: error,
		},
	};
}

/// Create an ActionErrors object with a form error
function getErrorsForForm(error: string): ActionErrors {
	return {
		formErrors: [error],
	};
}

/// Format an error into an ActionErrors object
export function formatError(error: unknown): ActionErrors {
	if (error instanceof ZodError) {
		// console.log('ZodError', error);
		return formatZodError(error);
	}

	if (error instanceof AuthError) {
		const e = error as AuthError;
		// console.log('AuthError', e);
		return {
			formErrors: [e.cause?.err?.message || e.message],
		};
	}

	if (error instanceof Error) {
		// console.log('Error', error);
		const e = error as Error;
		return {
			formErrors: [e.message],
		};
	}

	if (typeof error === "string") {
		// console.log('Error message', error);
		return {
			formErrors: [error],
		};
	}

	// console.log('Unknown error', error);
	return {
		formErrors: ["An error occurred"],
	};
}

/// Format a ZodError into an ActionErrors object
function formatZodError(error: ZodError): ActionErrors {
	const zodErrors = error.flatten();
	const errors: ActionErrors = {
		formErrors: zodErrors?.formErrors,
	};

	// join errors in fieldErrors to a single string
	if (zodErrors?.fieldErrors) {
		const fieldErrors: FieldErrors = {};

		for (const key in zodErrors.fieldErrors) {
			fieldErrors[key] = zodErrors.fieldErrors[key]?.join(", ");
		}
		errors.fieldErrors = fieldErrors;
	}
	return errors;
}
