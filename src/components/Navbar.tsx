"use client";
import React, { useState } from "react";
import {
	HoveredLink,
	Menu,
	MenuItem,
	ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
		>
			<Menu setActive={setActive}>
				<Link href="/">
					<MenuItem
						setActive={setActive}
						active={active}
						item="Home"
					></MenuItem>
				</Link>

				<Link href={"/courses"}>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Courses"
					></MenuItem>
				</Link>

				<Link href={"/contact"}>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Contact Us"
					></MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
