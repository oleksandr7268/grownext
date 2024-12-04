import Image from "next/image";
import React from "react";
import FeatureLeftImg from "../assets/feature-left.png";
import FeatureRightImg from "../assets/feature-right.png";
import ArrowImg from "../assets/arrow.svg";

const Features = () => {
	return (
		<div className="my-9 flex flex-col relative">
			<h1 className="text-center text-[48px] leading-[57.6px] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">GrowNext Your ultimate workspace</h1>
			<h2 className="px-[50px] text-center mt-4 text-[20px] leading-[27px] text-[#666666]">
				Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus purus semper penatibus sit quis. Morbi amet gravida
				scelerisque proin amet morbi.
			</h2>
			<div className="flex items-center mt-10 gap-20 -mr-10">
				<Image src={FeatureLeftImg} alt="Our Features" width={330} height={480} className="shadow-lg" />
				<div>
					<Image src={FeatureRightImg} alt="Our Features" width={795} height={524} />
				</div>
			</div>
			<div className="absolute -bottom-0 left-[300px]">
				<ArrowImg />
			</div>
			<button className="mt-16 mx-auto rounded-[32px] px-[30px] py-5 bg-gradient-to-b from-[#555555] to-[#000000] duration-150 ease-in-out text-white hover:-translate-y-0.5 hover:shadow-xl">
				Explore All Features
			</button>
		</div>
	);
};

export default Features;
