<script>
	import Testimonials from './Testimonials.svelte';

	import Treatments from './Treatments.svelte';

	import Welcome from './Welcome.svelte';

	import Hero from './Hero.svelte';

	import NavBar from './NavBar.svelte';

	import Header from './Header.svelte';
</script>

<section
	class="justify-center items-center bg-white self-stretch flex w-full flex-col px-16 py-12 max-md:px-5"
>
	<div class="w-full max-w-7xl mx-auto mt-14 mb-6 max-md:mt-10">
		<div
			class="grid gap-4 lg:grid-rows-[repeat(3,fit-content(0))] md:grid-rows-[repeat(6,fit-content(0))] md:grid-flow-col md:grid-cols-2 lg:grid-cols-4"
		>
			<img
				alt=""
				loading="lazy"
				srcset="womans-back.avif"
				class="aspect-video md:aspect-[0.93] h-full w-full mt-8 object-cover rounded-2xl shadow-md"
			/>
			<h2 class="text-black font-serif text-2xl mt-12">Helping your body heal</h2>
			<p class="text-black text-opacity-60 text-base">
				Dr. Howard will listen to you to understand where you are now and how to help you to feeling
				100%. By understanding your whole situation he will make a plan to treat the root cause of
				your discomfort, not just the symptom.
			</p>
			<img
				alt=""
				loading="lazy"
				srcset="meditation.avif"
				class="aspect-video md:aspect-[0.93] h-full w-full mt-8 object-cover max-md:object-[50%,20%] rounded-2xl shadow-md"
			/>
			<h2 class="text-black font-serif text-2xl mt-12">Wellness for all ages</h2>
			<p class="text-black text-opacity-60 text-base">
				Dr. Howard has helped people from all walks of life and all ages—from Pediatric to Geriatric
				to Olympic Athletes. He is concerned with each individual’s wellness.
			</p>
			<img
				alt=""
				loading="lazy"
				srcset="waiting-room.avif"
				class="aspect-video md:aspect-[0.93] h-full w-full mt-8 object-cover rounded-2xl shadow-md"
			/>
			<h2 class="text-black font-serif mt-12 text-2xl">Low wait time</h2>
			<p class="text-black text-opacity-60 text-base mb-8">
				Dr. Howard respects your time and is committed to providing his patients with a low wait
				time.
			</p>
			<img
				alt=""
				loading="lazy"
				srcset="map.avif"
				class="aspect-video md:aspect-[0.93] h-full w-full mt-8 object-cover rounded-2xl shadow-md"
			/>
			<h2 class="text-black font-serif mt-12 text-2xl">Convenient location</h2>
			<p class="text-black text-opacity-60 text-base mb-8">
				Located off of the 5 and 134 Freeways, Dr. Howard's office is convenient to the greater Los
				Angeles areas.
			</p>
		</div>
	</div>
</section>
