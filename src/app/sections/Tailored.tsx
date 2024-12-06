import Image from "next/image";
import TailoredImg from "../assets/tailored_back.png";

const Tailored = () => {
	return (
		<div className="mt-[100px] flex justify-center flex-col gap-[35px] py-[30px]">
			<div className="flex justify-center flex-col">
				<h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[106%] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">
					Crafting Exceptional&nbsp;
					<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
						Websites&nbsp;
					</span>
					Tailored to Your Vision.
				</h1>
				<h2 className="text-center mt-7 text-[20px] leading-[27px] text-[#666666] max-w-[1070px] mx-auto">
					From design to deployment, we create websites that are visually stunning, highly functional, and customized to your unique requirements.
				</h2>
				<div className="mt-6 md:mt-8 lg:mt-10 flex mx-auto gap-5">
					<button className="rounded-[32px] px-4 py-3 md:px-[30px] md:py-5 bg-gradient-to-b from-[#555555] to-[#000000] duration-150 ease-in-out text-white hover:-translate-y-0.5 hover:shadow-xl">
						Start For Free
					</button>
					<button className="rounded-[32px] px-4 py-3 md:px-[30px] md:py-5 duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-xl border border-[#111111]">Schedule a Demo</button>
				</div>
			</div>
			<div className="mx-auto">
				<Image src={TailoredImg} alt="" width={1400} height={600} className="max-w-[700px] w-full" />
			</div>
		</div>
	);
};

export default Tailored;
