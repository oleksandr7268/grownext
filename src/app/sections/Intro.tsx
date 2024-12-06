import IntroImage from "../components/IntroImage";

const Intro = () => {
	return (
		<div className="mt-[120px] lg:mt-[197px] mb-[126px]">
			<div className="flex justify-between w-full flex-col lg:flex-row gap-y-10">
				<div className="w-[95%] lg:w-[400px] flex flex-col justify-between">
					<div>
						<h1 className="text-[36px] md:text-[44px] lg:text-[56px] text-transparent font-medium leading-[104%] text-center lg:text-left">
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold">Powering </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text">Your </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold">Business </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text">from One </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold">Core.</span>
						</h1>
						<h2 className="text-[#666666] text-[20px] md:text-[24px] lg:text-[30px] leading-[140%] mt-8 text-center lg:text-left">Stay organized by keeping everything in one place!</h2>
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
