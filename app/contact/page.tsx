"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { FaPencilAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Contact {
	comment: string;
	name: string;
	email: string;
}

const encode = (data: Contact) => {
	let encoded =
		"form-name=contact-info&name=" + encodeURIComponent(data.name) + "&";
	encoded += "email=" + encodeURIComponent(data.email) + "&";
	encoded += "comment=" + encodeURIComponent(data.comment);

	return encoded;
};

const contactSchema = z.object({
	comment: z
		.string()
		.min(1, "A comment is required.")
		.max(1000, "Name can be 40 maximum characters"),
	name: z.string().max(100, "Name can be 100 maximum characters"),
	email: z.string().email().max(255, "Email can be 255 maximum characters"),
});

const ContactPage = () => {
	const router = useRouter();
	const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(true);
	const defaultValues = {
		comment: "",
		name: "",
		email: "",
	};

	const {
		register,
		handleSubmit,
		control,
		reset,
		setFocus,
		formState: { errors },
	} = useForm<Contact>({
		resolver: zodResolver(contactSchema),
		defaultValues: defaultValues,
	});

	const onSubmit = handleSubmit(async (data: Contact) => {
		if (isRecaptchaVerified === false) return;

		const data_encoded = encode({ ...data });

		console.info(data_encoded);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: data_encoded,
		})
			.then(() => {
				router.push("/success");
			})
			.catch((error) => alert(error));

		// setSaving(false);
	});

	const handleRecaptchaChange = () => {
		// This function will be called when reCAPTCHA is verified
		setIsRecaptchaVerified(true);
	};

	return (
		<div className="flex flex-col w-2/3 gap-10">
			<h1 className="text-white text-3xl">Contact</h1>
			<p className="text-white">
				Please fill in your name, email and comment and we will return your
				inquiry asap.
			</p>
			<form onSubmit={onSubmit} className="flex flex-col gap-4">
				<div className="flex items-center h-10  px-3 bg-slate-200 text-slate-400">
					<FaPencilAlt />
					<input
						type="text"
						placeholder="Name"
						className="ml-2 h-10 w-full border-none bg-slate-200 text-slate-900"
						{...register("name", { required: true })}
					/>
				</div>
				{errors.name && <p className="text-red-700">{errors.name?.message}</p>}
				<div className="flex items-center h-10 px-3 bg-slate-200 text-slate-400">
					<FaPencilAlt />
					<input
						type="email"
						placeholder="Email"
						className="ml-2 h-10 w-full border-none bg-slate-200 text-slate-900"
						{...register("email", { required: true })}
					/>
				</div>
				{errors.email && (
					<p className="text-red-700">{errors.email?.message}</p>
				)}
				<div className="flex flex-col bg-slate-200">
					<h3 className="flex m-1 items-center text-slate-400">
						<FaPencilAlt />
						&nbsp;&nbsp;Comment
					</h3>
					<textarea
						rows={12}
						cols={40}
						className="bg-slate-200"
						{...register("comment", { required: false })}
					></textarea>
				</div>
				<button className="bg-red-600 text-white w-56 rounded-full h-12">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactPage;
