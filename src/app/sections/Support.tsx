import React from "react";
import ComputerImg from "../assets/supportcom.svg";
import SupportAndroid from "../assets/supportandroid.svg";
import SupportIos from "../assets/supportios.svg";
import DecoLeft from "../assets/supportcomdecoleft.svg";
import DecoRight from "../assets/supportcomdecoright.svg";

const Support = () => {
	return (
		<div className="mt-[90px] py-[30px] flex px-8 lg:px-0 items-center flex-col lg:flex-row lg:mt-[60px]">
			<div className="flex-1">
				<div className="relative">
					<div className="absolute -z-10 -top-24 -left-[60px]">
						<DecoLeft />
					</div>
					<ComputerImg />
					<div className="absolute -z-10 -bottom-24 -right-[60px]">
						<DecoRight />
					</div>
				</div>
			</div>
			<div className="flex-1 pt-24 lg:pt-6 flex flex-col gap-[50px]">
				<div>
					<h1 className="text-center text-[36px] md:text-[40px] lg:text-[42px] leading-[120%] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">
						Accessible Anytime, Anywhere
					</h1>
					<h2 className="text-center mt-4 lg:mt-7 text-[20px] leading-[27px] text-[#666666] max-w-[1070px] mx-auto">
						Effortless Access and Management Across All Platforms – Desktop Apps for Windows, macOS, and Linux, Plus Mobile Apps for Android and iOS.
					</h2>
				</div>
				<div className="mx-auto flex gap-[30px] items-end">
					<SupportAndroid />
					<SupportIos />
				</div>
			</div>
		</div>
	);
};

export default Support;
