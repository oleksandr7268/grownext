import IntroImg from "../assets/intro_main.png";
import DecoImg from "../assets/deco.png";
import Image from "next/image";

const IntroImage = () => {
	return (
		<div className="relative flex">
			<Image src={IntroImg} alt="Intro" width={576} height={377} className="w-[95%] md:w-[600px] lg:w-[567px] mx-auto" />
			<Image src={DecoImg} alt="Intro" width={235} height={238} className="hidden 2xl:block absolute -bottom-16 right-10 translate-x-[100%]" />
		</div>
	);
};

export default IntroImage;
