import Image from "next/image";
import { useState } from "react";

export default function Email() {
	async function sendEmail(formData: FormData) {
		const body = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		console.log(body);
	}

	const inputCss = "sm:text-lg py-2 px-1 sm:w-4/5 bg-whiteBlue/0 border-b-[2px] autofill:bg-whiteBlue/0 outline-none border-whiteBlue/50 focus:border-gold";

	return (
		<form className="flex flex-col gap-3" action={sendEmail} name="contact">
			<input
				required
				className={inputCss}
				name="name"
				autoComplete="name"
				placeholder="jméno"
				type="text"
			/>
			<input
				required
				className={inputCss}
				name="email"
				autoComplete="email"
				placeholder="email"
				type="email"
			/>

			<textarea
				required
				className={inputCss}
				name="message"
				placeholder="zpráva"
				rows={5}
			></textarea>

			<br />
			<button className="submit" type="submit">
				<div className="submitBall"></div>
				<Image width={50} height={50} src="./arrow.svg" className="arrow" alt="" />
				poslat
			</button>
		</form>
	);
}
