import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Project } from "./listProjextCard";
import { Balancer } from "react-wrap-balancer";

type Props = {
	value: Project;
	xy: { x: number; y: number };
};

function ProjectCard({ value, xy }: Props) {
	const [xyLocal, setXyLoc] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const [styleLoc, setStyle] = useState("");
	const [styleGlob, setStyleGlob] = useState("");
	const [hov, setHov] = useState(false);
	const [offset, setOffset] = useState({ top: 0, left: 0 });
	const childRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const computeOffset = () => {
			if (childRef.current) {
				const rect = childRef.current.getBoundingClientRect();
				const parentRect = childRef?.current?.parentElement!.getBoundingClientRect();

				setOffset({
					top: rect.top - parentRect.top,
					left: rect.left - parentRect.left,
				});
			}
		};

		computeOffset();
		window.addEventListener("resize", computeOffset);

		return () => {
			window.removeEventListener("resize", computeOffset);
		};
	}, []);

	const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setXyLoc({ x: Math.floor(e.clientX - rect.left), y: Math.floor(e.clientY - rect.top) });
	};

	useEffect(() => {
		setStyle(
			`radial-gradient(800px circle at ${xyLocal.x}px ${
				xyLocal.y
			}px, rgba(229,231,235,0.2), transparent ${hov ? "40%" : "0%"})`
		);
	}, [hov, xyLocal.x, xyLocal.y]);

	useEffect(() => {
		setStyleGlob(
			`radial-gradient(1500px circle at ${xy.x - offset.left}px ${
				xy.y - offset.top
			}px, rgba(229,231,235,0.2), transparent 40%)`
		);
	}, [offset.left, offset.top, xy.x, xy.y]);

	return (
		<div
			ref={childRef}
			style={{
				background: styleGlob,
			}}
			className="w-fit rounded-lg border-[2px] border-gray-700 sm:border-[0px] "
		>
			<div
				onMouseMove={(e) => handleMove(e)}
				onMouseEnter={() => setHov(true)}
				onMouseLeave={() => setHov(false)}
				style={{
					background: styleLoc,
				}}
				className={` transition-all relative mx-auto max-w-sm rounded-[11px] shadow w-full h-full`}
			>
				<Image
					className="rounded-t-lg w-full h-auto"
					width={500}
					height={400}
					src={value.imageUrl}
					alt=""
				/>
				<div className="p-5 relative">
					<div className="absolute -top-10 right-0 flex gap-1">
						{value.pins.map((pin) => (
							<Image key={pin} alt={pin} src={`icons/${pin}.svg`} width={50} height={50} />
						))}
					</div>

					<h3 className="mb-2 sm:text-2xl font-bold tracking-tight text-white">
						<Balancer>{value.title}</Balancer>
					</h3>
					<div className="rounded-3xl mt-2 mb-3 w-1/3 h-[1px] bg-gold"></div>
					<p className="text-sm sm:text-base mb-4 font-normal text-gray-400">
						<Balancer>{value.description}</Balancer>
					</p>
					<Link
						// href={`/projekt/${value.id}?value=${JSON.stringify(value)}`}
						href={value.url}
						target="_blank"
						rel="noopener noreferrer"
						className="transition-all inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lighterLighterBlue rounded-lg hover:bg-lighterBlue/80 focus:ring-4 focus:outline-none focus:ring-blue-300 "
					>
						Podívat se na projekt
						<svg
							className="w-3.5 h-3.5 ml-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
