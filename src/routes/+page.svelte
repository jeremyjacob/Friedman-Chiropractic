<script>
	import Footer from './Footer.svelte';
	import AdditionalInfo from './AdditionalInfo.svelte';
	import Testimonials from './Testimonials.svelte';
	import Treatments from './Treatments.svelte';
	import Welcome from './Welcome.svelte';
	import Hero from './Hero.svelte';
</script>

<Hero></Hero>
<Welcome></Welcome>
<Treatments></Treatments>
<!-- <section
		class="bg-neutral-100 self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:px-5"
	>
		<div class="flex w-full max-w-[1265px] flex-col items-stretch mt-12 mb-5 max-md:mt-10">
			<div class="text-sky-800 text-opacity-60 text-sm font-medium leading-4 uppercase">
				Healing
			</div>
			<div class="text-zinc-800 text-5xl font-medium mt-6 max-md:text-4xl font-serif">
				Feel 100%.
			</div>
			<p class="text-black text-opacity-60 text-base leading-6 mt-4 max-w-prose">
				By developing a complete understanding of your situation, Dr. Howard will make a plan to
				treat the cause of your discomfort—not just the symptom.
			</p>
		</div>
	</section> -->
<Testimonials></Testimonials>

<AdditionalInfo></AdditionalInfo>
