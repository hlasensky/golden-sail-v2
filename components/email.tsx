import Image from "next/image";


export default function Email() {
	async function sendEmail(formData: FormData) {
		const body = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		console.log(body);
	}

	const inputCss =
		"sm:text-lg py-2 px-1 sm:w-4/5 bg-whiteBlue/0 border-b-[2px] autofill:bg-whiteBlue/0 outline-none border-whiteBlue/50 focus:border-gold";

	return (
		<form
			className="flex flex-col gap-3 my-4 "
			name="contact"
			method="POST"
			action="success"
			data-netlify="true"
		>
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
			<input type="hidden" name="form-name" value="contact" />

			<button
				className="transition-all flex gap-2 items-center bg-lighterLighterBlue hover:bg-lighterLighterBlue/50 w-fit px-4 py-1 rounded-lg"
				type="submit"
			>
				poslat
				<Image width={25} height={25} src="./arrow.svg" className="arrow" alt="" />
			</button>
		</form>
	);
}
