import Image from "next/image";
import IntroImg from "../assets/intro.png";
import DecoImg from "../assets/deco.png";

const Intro = () => {
	return (
		<div className="mt-[197px] mb-[126px]">
			<div className="flex justify-between w-full flex-col-reverse lg:flex-row gap-y-10">
				<div className="w-[400px] flex flex-col justify-between">
					<div>
						<h1 className="text-[56px] text-transparent font-medium leading-[58px]">
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold">Powering </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text">Your </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold">Business </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text">from One </span>
							<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold">Core.</span>
						</h1>
						<h2 className="text-[#666666] text-[30px] leading-[41px] mt-8">Stay organized by keeping everything in one place!</h2>
					</div>
					<div className="flex gap-5">
						<button className="rounded-[32px] px-[30px] py-5 bg-gradient-to-b from-[#555555] to-[#000000] duration-150 ease-in-out text-white hover:-translate-y-0.5 hover:shadow-xl">
							Start For Free
						</button>
						<button className="rounded-[32px] px-[30px] py-5 duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-xl border border-[#111111]">Schedule a Demo</button>
					</div>
				</div>
				<div className="relative">
					<Image src={IntroImg} objectFit="contain" alt="Intro" width={576} height={377} />
					<Image src={DecoImg} objectFit="contain" alt="Intro" width={235} height={238} className="hidden 2xl:block absolute -bottom-16 right-10 translate-x-[100%]" />
				</div>
			</div>
		</div>
	);
};

export default Intro;
