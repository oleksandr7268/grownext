"use client";
import React, { useEffect, useRef, useState } from "react";
import TestUser_1 from "../assets/test-user1.svg";
import TestUser_2 from "../assets/test-user2.svg";
import TestUser_3 from "../assets/test-user3.svg";
import TestUser_4 from "../assets/test-user4.svg";
import TestLogo_1 from "../assets/test-logo1.svg";
import TestLogo_2 from "../assets/test-logo2.svg";
import TestLogo_3 from "../assets/test-logo3.svg";
import TestLogo_4 from "../assets/test-logo4.svg";

const Testimonials = () => {
	const sliderRef = useRef(null);
	const cnt = 8;
	const [curIdx, setCurIdx] = useState(0);

	useEffect(() => {
		if (sliderRef.current) {
			const amount = parseFloat(window.getComputedStyle(sliderRef.current.firstChild as Element).width);
			const newTransform = `translateX(-${amount * curIdx}px)`;
			sliderRef.current.style.transform = newTransform;
		}
	}, [curIdx]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurIdx((prevIdx) => (prevIdx + 1) % (cnt - 3));
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, [curIdx]);

	return (
		<div className="flex gap-[50px] flex-col mt-[100px]">
			<div>
				<h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">
					How Agencies Grow With&nbsp;
					<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
						GrowNext
					</span>
				</h1>
				<h2 className="text-center mt-4 text-[20px] leading-[27px] text-[#666666] max-w-[1070px] mx-auto">
					Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus purus semper penatibus sit quis. Morbi amet
					gravida scelerisque proin amet morbi.
				</h2>
			</div>
			<div className="overflow-hidden flex flex-col">
				<div className="flex -mr-[30px] mb-[90px] duration-500 ease-in-out" ref={sliderRef}>
					<div className="min-w-[50%] lg:min-w-[25%] pr-[30px]">
						<div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
							<TestLogo_1 className="mx-auto" />
							<div className="flex items-baseline gap-2.5 mx-auto">
								<div className="text-[42px] text-[#111111] leading-[120%] font-bold">53%</div>
								<div className="text-[20px] text-[#374550] leading-[120%] font-medium">Growth</div>
							</div>
							<div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">Company name grew 27% in under a year using Productive</div>
							<div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
								<TestUser_1 className="rounded-full" />
							</div>
						</div>
					</div>
					<div className="min-w-[50%] lg:min-w-[25%] pr-[30px]">
						<div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
							<TestLogo_2 className="mx-auto" />
							<div className="flex items-baseline gap-2.5 mx-auto">
								<div className="text-[42px] text-[#111111] leading-[120%] font-bold">350</div>
								<div className="text-[20px] text-[#374550] leading-[120%] font-medium">People</div>
							</div>
							<div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">Company name grew 27% in under a year using Productive</div>
							<div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
								<TestUser_2 className="rounded-full" />
							</div>
						</div>
					</div>
					<div className="min-w-[50%] lg:min-w-[25%] pr-[30px]">
						<div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
							<TestLogo_3 className="mx-auto" />
							<div className="flex items-baseline gap-2.5 mx-auto">
								<div className="text-[42px] text-[#111111] leading-[120%] font-bold">53%</div>
								<div className="text-[20px] text-[#374550] leading-[120%] font-medium">Growth</div>
							</div>
							<div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">Company name grew 27% in under a year using Productive</div>
							<div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
								<TestUser_3 className="rounded-full" />
							</div>
						</div>
					</div>
					<div className="min-w-[50%] lg:min-w-[25%] pr-[30px]">
						<div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
							<TestLogo_4 className="mx-auto" />
							<div className="flex items-baseline gap-2.5 mx-auto">
								<div className="text-[42px] text-[#111111] leading-[120%] font-bold">+10%</div>
								<div className="text-[20px] text-[#374550] leading-[120%] font-medium">Utilization</div>
							</div>
							<div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">Company name grew 27% in under a year using Productive</div>
							<div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
								<TestUser_4 className="rounded-full" />
							</div>
						</div>
					</div>
					<div className="min-w-[50%] lg:min-w-[25%] pr-[30px]">
						<div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
							<TestLogo_1 className="mx-auto" />
							<div className="flex items-baseline gap-2.5 mx-auto">
								<div className="text-[42px] text-[#111111] leading-[120%] font-bold">53%</div>
								<div className="text-[20px] text-[#374550] leading-[120%] font-medium">Growth</div>
							</div>
							<div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">Company name grew 27% in under a year using Productive</div>
							<div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
								<TestUser_1 className="rounded-full" />
							</div>
						</div>
					</div>
					<div className="min-w-[50%] lg:min-w-[25%] pr-[30px]">
						<div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
							<TestLogo_2 className="mx-auto" />
							<div className="flex items-baseline gap-2.5 mx-auto">
								<div className="text-[42px] text-[#111111] leading-[120%] font-bold">350</div>
								<div className="text-[20px] text-[#374550] leading-[120%] font-medium">People</div>
							</div>
							<div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">Company name grew 27% in under a year using Productive</div>
							<div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
								<TestUser_2 className="rounded-full" />
							</div>
						</div>
					</div>
					<div className="min-w-[50%] lg:min-w-[25%] pr-[30px]">
						<div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
							<TestLogo_3 className="mx-auto" />
							<div className="flex items-baseline gap-2.5 mx-auto">
								<div className="text-[42px] text-[#111111] leading-[120%] font-bold">53%</div>
								<div className="text-[20px] text-[#374550] leading-[120%] font-medium">Growth</div>
							</div>
							<div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">Company name grew 27% in under a year using Productive</div>
							<div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
								<TestUser_3 className="rounded-full" />
							</div>
						</div>
					</div>
					<div className="min-w-[50%] lg:min-w-[25%] pr-[30px]">
						<div className="rounded-[20px] bg-gradient-to-b from-[#E9EBED] to-white pb-[84px] relative pt-[25px] px-[17px] flex flex-col gap-[30px]">
							<TestLogo_4 className="mx-auto" />
							<div className="flex items-baseline gap-2.5 mx-auto">
								<div className="text-[42px] text-[#111111] leading-[120%] font-bold">+10%</div>
								<div className="text-[20px] text-[#374550] leading-[120%] font-medium">Utilization</div>
							</div>
							<div className="text-[20px] leading-[120%] text-[#666666] mx-auto text-center">Company name grew 27% in under a year using Productive</div>
							<div className="rounded-full p-[5px] bg-white w-fit bottom-0 left-[50%] absolute -translate-x-[50%] translate-y-[50%] shadow-lg">
								<TestUser_4 className="rounded-full" />
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto text-center flex gap-[5px]">
					{Array.from({ length: cnt - 3 }).map((_, id) => (
						<button key={id} className={`w-[30px] h-[3px] rounded-[30px] duration-200  ${curIdx == id ? "bg-[#111111]" : "bg-[#CACDD2]"} `} onClick={() => setCurIdx(id)}></button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
