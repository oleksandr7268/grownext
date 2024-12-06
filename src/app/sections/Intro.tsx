import IntroImage from "../components/IntroImage";

const Intro = () => {
	return (
		<div className="mt-[130px] md:mt-[150px] lg:mt-[197px] mb-[126px]">
			<div className="flex justify-between w-full flex-col lg:flex-row gap-y-10">
				<div className="w-[95%] lg:w-[400px] flex flex-col justify-between">
					<div>
						<h1 className="text-[40px] md:text-[48px] lg:text-[56px] text-transparent font-medium leading-[104%] text-center lg:text-left">
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[20%] after:h-[22%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
								Powering{" "}
							</span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text">Your </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold">Business </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text">from One </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[110%] after:h-[22%] after:bg-cover after:bg-no-repeat after:bg-[url('/font_deco_short.png')] after:-z-20">
								Core.
							</span>
						</h1>
						<h2 className="text-[#666666] text-[20px] md:text-[24px] lg:text-[30px] leading-[140%] mt-4 lg:mt-8 text-center lg:text-left">
							Stay organized by keeping everything in one place!
						</h2>
					</div>
					<div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
						<button className="rounded-[32px] px-4 py-3 md:px-[30px] md:py-5 bg-gradient-to-b from-[#555555] to-[#000000] duration-150 ease-in-out text-white hover:-translate-y-0.5 hover:shadow-xl">
							Start For Free
						</button>
						<button className="rounded-[32px] px-4 py-3 md:px-[30px] md:py-5 duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-xl border border-[#111111]">
							Schedule a Demo
						</button>
					</div>
				</div>
				<IntroImage />
			</div>
		</div>
	);
};

export default Intro;
