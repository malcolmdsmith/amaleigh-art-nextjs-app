import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

interface CaptchaValidationResponse {
	success: boolean;
}

// export const config = {
// 	api: {
// 		bodyParser: {
// 			sizeLimit: "1mb",
// 		},
// 	},
// };

// export const captchaVerificationHandler = async (
export async function POST(req: NextRequest) {
	try {
		console.log("Start...");
		//console.log(res);
		// const decoder = new TextDecoder();
		// let text = "";
		// for await (const chunk of req.body) {
		// 	text += decoder.decode(chunk);
		// }
		//const json = JSON.parse(text);
		const data = await req.json();
		const recaptchaResponse = data.recaptchaResponse;
		console.log("Begin verifying...", recaptchaResponse);

		if (!recaptchaResponse) {
			return NextResponse.json({
				success: false,
				error: "reCAPTCHA response missing",
			});
		}

		const response = await fetch(
			`https://www.google.com/recaptcha/api/siteverify`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
				},
				body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`,
			}
		);

		let captchaValidation: CaptchaValidationResponse;
		captchaValidation = (await response.json()) as CaptchaValidationResponse;
		console.log("CV...", captchaValidation);

		if (captchaValidation.success) {
			// Proceed with your form processing logic
			return NextResponse.json({ success: true });
		} else {
			return NextResponse.json({
				success: false,
				error: "reCAPTCHA verification failed",
			});
		}
	} catch (error) {
		console.error("Error during reCAPTCHA verification:", error);
		return NextResponse.json({
			success: false,
			error: "Internal Server Error",
		});
	}
}
