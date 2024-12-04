import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Advantage from "./components/Advantage";
import LevelUp from "./components/LevelUp";
import Plan from "./components/Plan";
import Support from "./components/Support";

export default function Home() {
	return (
		<div className="">
			<Header />
			<main className="flex w-full flex-col">
				<div className="2xl:w-[1170px] xl:w-[1100px] lg:w-[95%] mx-auto">
					{/* <Intro /> */}
					{/* <Features /> */}
					<Advantage />
				</div>
				<div>
					<LevelUp />
				</div>
				<div className="2xl:w-[1170px] xl:w-[1100px] lg:w-[95%] mx-auto">
					<Plan />
					<Support />
				</div>
			</main>
			<Footer />
		</div>
	);
}
