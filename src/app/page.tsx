import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Intro from "./sections/Intro";
import Features from "./sections/Features";
import Advantage from "./sections/Advantage";
import LevelUp from "./sections/LevelUp";
import Plan from "./sections/Plan";
import Support from "./sections/Support";
import Testimonials from "./sections/Testimonials";
import Tailored from "./sections/Tailored";
import Divider from "./sections/Divider";
import Contact from "./sections/Contact";

import UpArrowImg from "../app/assets/uparrow.png";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen overflow-x-hidden">
			<Header />
			<main className="flex flex-col relative">
				<div className="w-[95%] xl:w-[1100px] 2xl:w-[1170px] mx-auto">
					<Intro />
					<Features />
					<Advantage />
				</div>
				<LevelUp />
				<div className="w-[95%] xl:w-[1100px] 2xl:w-[1170px] mx-auto relative">
					<Plan />
					<Support />
					<Testimonials />
					<Tailored />
					<Divider />
					<Contact />
					<button className="absolute bottom-10 w-[60px] h-[60px] -right-10 translate-x-[100%] bg-gradient-to-b from-[#555555] to-black shadow-[0px_10px_25px_-3px_#00000026] rounded-full flex justify-center items-end">
						<Image src={UpArrowImg} alt="↑" width={24} height={42} />
					</button>
				</div>
			</main>
		</div>
	);
}
