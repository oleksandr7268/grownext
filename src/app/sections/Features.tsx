import Image from "next/image";
import React from "react";
import FeatureLeftImg from "../assets/feature_intro.png";
import FeatureRightImg from "../assets/feature_com.png";
import ArrowImg from "../assets/feature_arrow.png";
import DecoPolygon from "../assets/blue_polygon.png";

const Features = () => {
	return (
		<div className="my-9 flex flex-col relative">
			<h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">
				<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
					GrowNext&nbsp;
				</span>
				Your ultimate workspace
			</h1>
			<h2 className="px-[10px] md:px-6 lg:px-[50px] text-center mt-4 text-[20px] leading-[120%] text-[#666666]">
				Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus purus semper penatibus sit quis. Morbi amet gravida
				scelerisque proin amet morbi.
			</h2>
			<div className="flex mt-[70px] items-end">
				<Image src={FeatureLeftImg} alt="Our Features" width={330} height={480} className="hidden xl:block xl:w-[330px]" />
				<div className="flex mx-auto relative">
					<Image src={FeatureRightImg} alt="Our Features" width={795} height={524} className="px-[60px] mg:px-[60px] lg:px-[88px] mx-auto" />
					<Image src={DecoPolygon} alt="#" width={572} height={630} className="hidden md:block absolute w-[280px] h-[280px] right-0 top-0 translate-x-[3%] -translate-y-[20%] -z-30" />
				</div>
			</div>
			<div className="relative flex">
				<button className="mt-4 md:mt-6 lg:mt-10 mx-auto rounded-[32px] px-[30px] py-5 bg-gradient-to-b from-[#555555] to-[#000000] duration-150 ease-in-out text-white hover:-translate-y-0.5 hover:shadow-xl">
					Explore All Features
				</button>
				<div className="absolute -bottom-0 left-[50%] lg:-translate-x-[170%] md:-translate-x-[180%] -translate-x-[200%]">
					<Image src={ArrowImg} alt="↓" width={314} height={219} className="w-[100px] md:w-[120px] lg:w-[150px] sm:block hidden" />
				</div>
			</div>
		</div>
	);
};

export default Features;
