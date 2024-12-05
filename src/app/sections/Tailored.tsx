import TailoredImg from "../assets/tailroed.svg";

const Tailored = () => {
	return (
		<div className="mt-[100px] flex justify-center flex-col gap-[35px] py-[30px]">
			<div className="flex justify-center flex-col">
				<h1 className="text-center text-[48px] leading-[57.6px] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">
					Crafting Exceptional Websites Tailored to Your Vision.
				</h1>
				<h2 className="text-center mt-7 text-[20px] leading-[27px] text-[#666666] max-w-[1070px] mx-auto">
					From design to deployment, we create websites that are visually stunning, highly functional, and customized to your unique requirements.
				</h2>
				<div className="mt-10 flex mx-auto gap-5">
					<button className="rounded-[32px] px-[30px] py-5 bg-gradient-to-b from-[#555555] to-[#000000] duration-150 ease-in-out text-white hover:-translate-y-0.5 hover:shadow-xl">
						Start Now For Free
					</button>
					<button className="rounded-[32px] px-[30px] py-5 duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-xl border border-[#111111]">Schedule a Demo</button>
				</div>
			</div>
			<div className="mx-auto">
				<TailoredImg />
			</div>
		</div>
	);
};

export default Tailored;
