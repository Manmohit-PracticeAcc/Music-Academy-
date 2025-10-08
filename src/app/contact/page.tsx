"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function page() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted");
	};

	return (
		<div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<BackgroundBeams className="absolute z-0" />

				<h1 className=" relative z-20 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl text-center">
					Contact Us
				</h1>

				<p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
					We are here to help you with any questions about our courses, programs
					or events. Reach out and let us know how we can assist yo in your
					musical journey.
				</p>

				<div className="z-10 shadow-input mx-auto w-full max-w-5xl rounded-none  p-4 md:rounded-2xl md:p-8 ">
					<form className="my-8" onSubmit={handleSubmit}>
						<div className="mb-4 flex flex-col space-y-5 ">
							<div className="z-10 flex w-full flex-col space-y-2">
								<Label htmlFor="firstname">Your Email</Label>
								<Input
									id="firstname"
									placeholder="tyler@gmail.com"
									type="text"
								/>{" "}
							</div>
							<div className="z-10 flex w-full flex-col space-y-2">
								<Label htmlFor="firstname">Your Message</Label>
								<Textarea
									id="firstname"
									placeholder="Type your message here..."
								/>
							</div>
						</div>

						<button
							className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
							type="submit"
						>
							Send Message &rarr;
							<div className="bottom-gradient">
								<span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
								<span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
							</div>
						</button>

						<div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default page;
