import React from 'react';
import Image from 'next/image';

export function AboutContent() {
	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:py-20"
		>
			<div className="grid gap-10 md:grid-cols-2 md:items-center">
				<div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg ring-1 ring-green-900/10">
					<Image
						src="/images/background.jpg"
						alt="Rural landscape representing Spain's countryside"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover object-center"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent" aria-hidden="true" />
				</div>

				
				<div className="flex flex-col gap-6">
					<h2
						id="about-heading"
						className="text-3xl font-extrabold tracking-tight text-green-700 drop-shadow-sm sm:text-4xl"
					>
						About Digital Roots
					</h2>
					<p className="text-base leading-relaxed text-neutral-600">
						<span className="font-black text-amber-400">Digital Roots</span> is a project designed to reconnect remote
						professionals with rural communities across Spain. We believe remote work can be a powerful catalyst for
						local revitalization: attracting new talent, sustaining small businesses, and reducing depopulation.
					</p>
					<p className="text-base leading-relaxed text-neutral-600">
						Our platform helps people discover authentic places to live and work closer to nature while contributing
						to sustainable regional growth. We focus on collaboration, cultural exchange, and long-term impact rather
						than short stays. <span className="font-black text-green-500">Reconnect. Work. Grow.</span>
					</p>
					<div className="h-px w-24 bg-gradient-to-r from-green-600 to-amber-300" aria-hidden="true" />
					<p className="text-sm text-neutral-500">
						This is just the beginning — more community features, local partnerships, and tools are coming soon.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutContent;

