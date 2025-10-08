"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
	id: number;
	title: string;
	slug: string;
	description: string;
	price: number;
	instructor: string;
	isFeatured: boolean;
	image: string;
}

function FeaturedCourses() {
	const featuredCourses = courseData.courses.filter(
		(course: Course) => course.isFeatured
	);

	return (
		<div className="py-12 bg-gradient-to-b from-transparent to-gray-400 dark:to-gray-900">
			<div>
				<div className="text-center">
					<h2 className="text-3xl bg-gradient-to-b from-teal-200 to-teal-500 bg-clip-text text-transparent font-semibold tracking-wide uppercase">
						FEATURED COURSES
					</h2>
					<p className="relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-3 text-4xl font-bold text-transparent lg:text-5xl">
						Learn With the Best
					</p>
				</div>
			</div>
			<div className="mt-10 mx-8">
				<div className="flex flex-wrap lg:gap-25 md:gap-15 justify-center">
					{featuredCourses.map((course: Course) => (
						<div key={course.id} className="flex justify-center">
							<BackgroundGradient
								containerClassName="p-[2px]"
								className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
							>
								<div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
									<Image
										src={course.image}
										alt={course.title}
										width={300}
										height={300}
										className="w-full h-full object-cover rounded-t-xl rounded-b-sm mb-4"
									/>
									<p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
										{course.title}
									</p>
									<p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
										{course.description}
									</p>
									<Link
										className="px-2 py-1 mt-4 border-2 border-teal-800 hover:bg-teal-700 text-white transition duration-200 rounded-md"
										href={`/courses/${course.slug}`}
									>
										Learn More
									</Link>
								</div>
							</BackgroundGradient>
						</div>
					))}
				</div>
			</div>
			<div className="mt-20 text-center">
				<Link
					href={"/courses"}
					className="px-5 py-3 bg-teal-900 hover:bg-teal-700 text-white transition duration-200 rounded-md text-xl"
				>
					View All courses
				</Link>
			</div>
		</div>
	);
}

export default FeaturedCourses;
