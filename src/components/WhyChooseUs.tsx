"use client";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const content = [
	{
		title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
		description:
			"Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
	},
	{
		title: "Live Feedback & Engagement",
		description:
			"Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
	},
	{
		title: "Cutting-Edge Curriculum",
		description:
			"Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
	},
	{
		title: "Limitless Learning Opportunities",
		description:
			"With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
	},
];

function WhyChooseUs() {
	return (
		<div className=" bg-gradient-to-b from-slate-900 to-black flex flex-col justify-center items-center min-h-screen gap-10">
			<p className="relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent lg:text-7xl">
				Why Choose Us
			</p>
			{/* {content.map((item, index) => (
				<div
					key={item.title + index}
					className={index % 2 === 0 ? "mr-[5%]" : "ml-[5%]"}
				>
					<h2 className="text-2xl font-bold text-slate-100">{item.title}</h2>
					<p className="text-kg mt-3 max-w-3xl text-slate-300">
						{item.description}
					</p>
				</div>
			))} */}
			<WobbleCardDemo />
		</div>
	);
}

export default WhyChooseUs;

export function WobbleCardDemo() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-7xl mx-auto w-full px-20">
			<WobbleCard
				containerClassName="col-span-1 lg:col-span-3 h-full bg-pink-800/60 min-h-[300px]"
				className=""
			>
				<div className="max-w-lg">
					<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Discover Your Sound with Us: A Personal Journey in Music Mastery
					</h2>
					<p className="mt-4 text-left  text-base/6 text-neutral-200">
						Embark on a musical journey that’s uniquely yours. Our personalized
						instruction adapts to your individual needs, setting the stage for
						unparalleled growth and creativity. At our music school, your
						aspirations meet our dedicated support, creating a harmonious path
						to mastery.
					</p>
				</div>
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px]">
				<h2 className="max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
					Live Feedback & Engagement{" "}
				</h2>
				<p className="mt-4 max-w-lg text-left  text-base/6 text-neutral-200">
					Immerse yourself in an interactive learning experience where feedback
					is immediate, just like real-time changes in a collaborative project.
					This approach enhances your understanding and mastery of music
					concepts and performance techniques.{" "}
				</p>
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px] bg-teal-800/80">
				<h2 className="max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
					Limitless Learning Opportunities{" "}
				</h2>
				<p className="mt-4 max-w-lg text-left text-base/6 text-neutral-200">
					With our expansive resource library and dynamic course offerings,
					you’ll never find yourself without something new to explore. Our
					platform provides continuous opportunities for growth, ensuring your
					musical skills are always advancing.
				</p>{" "}
			</WobbleCard>
			<WobbleCard
				containerClassName="col-span-1 lg:col-span-3 h-full bg-purple-900 min-h-[300px]"
				className=""
			>
				<div className="max-w-lg">
					<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Cutting-Edge Curriculum
					</h2>
					<p className="mt-4 text-left  text-base/6 text-neutral-200">
						Our curriculum is continuously updated to include the latest music
						education trends and technologies, ensuring you’re always learning
						with the most current and effective methods. Say goodbye to outdated
						materials and welcome an education that evolves with the industry.
					</p>
				</div>
			</WobbleCard>
			
		</div>
	);
}
