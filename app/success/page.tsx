import Link from "next/link";
import React from "react";

function Page() {
	return (
		<div className="grid place-content-center h-screen w-full">
			<div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
				<div className="p-6">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
						className="mb-4 h-12 w-12 text-lighterLighterBlue"
					>
						<path
							fill-rule="evenodd"
							d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
							clip-rule="evenodd"
						></path>
						<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
					</svg>
					<h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
						Děkuji za váš e-mail. Brzy se vám ozvu.
					</h5>
				</div>
				<div className="p-6 pt-0">
					<Link
						className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-lighterLighterBlue"
						href="/"
					>
						<button
							className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-lighterLighterBlue transition-all hover:bg-lightext-lighterLighterBlue/10 active:bg-lightext-lighterLighterBlue/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							type="button"
							data-ripple-dark="true"
						>
							Zpět na stránky
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true"
								className="h-4 w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
								></path>
							</svg>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Page;
