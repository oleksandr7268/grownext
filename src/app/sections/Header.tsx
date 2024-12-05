"use client";

import Image from "next/image";
import logo from "../assets/logo.png";
import User from "../assets/user.svg";
import { useState } from "react";

export default function Header() {
	const [activeLink, setActiveLink] = useState("Home");

	const handleLinkClick = (link: string) => {
		setActiveLink(link);
	};

	return (
		<div className="fixed d-flex w-full top-[15px] z-50">
			<header className=" rounded-[60px] hidden bg-white mx-auto lg:flex justify-between p-4 pl-[30px] shadow-lg items-center 2xl:w-[1170px] xl:w-[1100px] lg:w-[95%]">
				<div className="flex gap-10">
					<Image src={logo} alt="GrowNext" width={126.5} height={50} priority />
					<div className="flex items-center gap-5">
						{["Home", "Features", "Pricing", "Partner", "Support", "Contact"].map((link) => (
							<a key={link} href="#" onClick={() => handleLinkClick(link)} className={`text-lg hover:text-[#111111] ${activeLink === link ? "text-[#111111]" : "text-[#666666]"}`}>
								{link}
							</a>
						))}
					</div>
				</div>
				<div className="hidden xl:flex gap-5">
					<a href="#" className="text-[#111111] text-lg my-auto">
						Request a Demo
					</a>
					<button className="flex gap-2 items-center">
						<User />
						Login
					</button>
					<button className="rounded-[32px] px-[30px] py-5 bg-gradient-to-b from-[#555555] to-[#000000] duration-150 ease-in-out text-white hover:-translate-y-0.5 hover:shadow-xl">
						Start For Free
					</button>
				</div>
			</header>
		</div>
	);
}
