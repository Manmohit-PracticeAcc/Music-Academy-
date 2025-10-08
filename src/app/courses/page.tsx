import React, { ReactElement } from "react";
import data from "@/data/music_courses.json";
import ExpandableCard from "@/components/ExpandableCards";
import { SparklesCore } from "@/components/ui/sparkles";
import { div } from "motion/react-client";
interface Course {
	id: number;
	title: string;
	description: string;
	isFeatured: boolean;
	src: string;
	content: ReactElement;
	ctaText: string;
	ctaLink: string;
}

function CoursesPage() {
	const courses: Course[] = data.courses.map((course: any) => {
		const obj: Course = {
			id: course.id,
			title: course.title,
			description: course.instructor,
			src: course.image,
			ctaText: `$ ${course.price}`,
			ctaLink: "",
			content: <p className="text-base">{course.longDescription}</p>,
			isFeatured: course.isFeatured,
		};
		return obj;
	});

	return (
		<div className="bg-white dark:bg-black overflow-hidden">
			<div className="relative flex flex-col justify-center items-center pt-35">
				<h1 className=" relative z-20 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl">
					All Courses
					<div className="absolute left-1/2 -translate-x-1/2 ">
						<div className="w-[80rem] h-100 relative ">
							{/* Gradients */}
							<div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
							<div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
							<div className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
							<div className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

							{/* Core component */}
							<SparklesCore
								background="transparent"
								minSize={0.4}
								maxSize={1}
								particleDensity={1200}
								className="w-full h-full"
								particleColor="#FFFFFF"
							/>

							{/* Radial Gradient to prevent sharp edges */}
							<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
						</div>
					</div>
				</h1>

				<div className="z-20 text-2xl bg-gradient-to-b from-white/80 to-blue-200/80 bg-clip-text text-transparent font-semibold tracking-wide my-3">
					Total Courses : {courses.length}{" "}
				</div>
				<div className="z-20 mt-5">
					<ExpandableCard cards={courses} />
				</div>
			</div>
		</div>
	);
}

export default CoursesPage;
