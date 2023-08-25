const Spacer = ({ not_anim }: { not_anim?: boolean }) => {
	return (
		<div
			className={` transition-all flex flex-col w-52  sm:w-64 ${
				not_anim ? "" : "hover:w-56 hover:sm:w-72"
			} justify-between mt-2 mb-4  sm:mt-4 sm:mb-6`}
		>
			<div className="w-28 sm:w-36 bg-gold h-[2px] mb-4 sm:mb-6"></div>
			<div className="w-28 sm:w-36 bg-gold h-[2px] self-end"></div>
		</div>
	);
};

export default Spacer;
