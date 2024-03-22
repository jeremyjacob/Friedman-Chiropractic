<script>
	import Stars from './../lib/components/Stars.svelte';
	import { Star } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
</script>

<section
	class="bg-sky-950 self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:px-5"
>
	<div class="flex w-full max-w-[1121px] flex-col items-stretch mt-5">
		<div
			class="text-white text-opacity-80 text-sm font-medium leading-4 uppercase self-center whitespace-nowrap"
		>
			Testimonials
		</div>
		<div class="text-white text-5xl font-medium self-center mt-6 max-md:text-4xl font-serif">
			What my patients say
		</div>
		<div
			class="justify-between items-start max-md:gap-2 max-md:flex flex-col md:grid grid-flow-col grid-cols-3 grid-rows-2 gap-x-10 mt-14 pr-9 pt-4 max-md:mt-10 max-md:pr-5 md:-mb-20"
		>
			<!-- <div class="text-white text-opacity-20 text-8xl self-start max-md:text-4xl">“</div> -->
			<div class="text-white text-base">
				Dr Friedman is awesome! I've never been to a chiropractor until now and I am truly grateful
				for finding him. Last week I woke up with a chronic pain and immediately started looking for
				a chiropractor for relief. I was shocked when I called and was able to get in 2 hrs later on
				a SATURDAY and they had with a New Year Special.
			</div>
			<div class="mb-8 flex items-stretch mt-4 justify-between gap-3.5">
				<img
					alt=""
					loading="lazy"
					srcset="https://s3-media0.fl.yelpcdn.com/photo/lv0kLMeZlW9Iuriyfju76w/120s.jpg"
					class="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 rounded-[50%]"
				/>
				<div class="self-center grow whitespace-nowrap my-auto">
					<p class="text-white text-base font-medium leading-none">Shaneka B.</p>
					<a
						href="https://www.yelp.com/biz/friedman-chiropractic-and-wellness-center-harbor-city?hrid=7dYbsndLzaRPImotDlZTIA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
						target="_blank"
						class="text-sm text-white text-opacity-60 hover:text-opacity-75 leading-none"
						>View on Yelp</a
					>
				</div>
				<div class="flex-grow" />
				<Stars num={5} />
			</div>

			<!-- <div class="text-white text-opacity-20 text-8xl self-start max-md:text-4xl">“</div> -->
			<div class="text-white text-base">
				I had a great experience and highly recommend coming here. Went in with shoulder pain and am
				feeling great just a week later. Dr. Friedman and April are very helpful and accommodating
				to any needs! The office space is kept very clean and sanitary. Will definitely be coming
				back!
			</div>
			<div class="mb-8 flex items-stretch mt-4 justify-between gap-3.5">
				<img
					alt=""
					loading="lazy"
					srcset="https://s3-media0.fl.yelpcdn.com/photo/yrOrMkOkkyBEERlG7Cvi9Q/120s.jpg"
					class="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 rounded-[50%]"
				/>
				<div class="self-center grow whitespace-nowrap my-auto">
					<p class="text-white text-base font-medium leading-none">Summer C.</p>
					<a
						href="https://www.yelp.com/biz/friedman-chiropractic-and-wellness-center-harbor-city?hrid=7dYbsndLzaRPImotDlZTIA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
						target="_blank"
						class="text-sm text-white text-opacity-60 hover:text-opacity-75 leading-none"
						>View on Yelp</a
					>
				</div>
				<div class="flex-grow" />
				<Stars num={5} />
			</div>

			<!-- <div class="text-white text-opacity-20 text-8xl self-start max-md:text-4xl">“</div> -->
			<div class="text-white text-base grow shrink basis-auto">
				Dr. Friedman truly is magical! I came in with a messed up neck that had been bothering me
				for days. He took his time and was gentle, yet powerful in loosening the knots in my neck
				area. Sometimes I get scared when chiropractors are about to crack my neck, but I felt at
				ease as he is very calming. My neck felt instantly better and I can not wait to come back!
			</div>
			<div class="mb-8 flex items-stretch mt-4 justify-between gap-3.5">
				<img
					alt=""
					loading="lazy"
					srcset="https://s3-media0.fl.yelpcdn.com/photo/292f29wuBLLL0B6U78DsZA/120s.jpg"
					class="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 rounded-[50%]"
				/>
				<div class="self-center grow whitespace-nowrap my-auto">
					<p class="text-white text-base font-medium leading-none">Des R.</p>
					<a
						href="https://www.yelp.com/biz/friedman-chiropractic-and-wellness-center-harbor-city?hrid=7dYbsndLzaRPImotDlZTIA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
						target="_blank"
						class="text-sm text-white text-opacity-60 hover:text-opacity-75 leading-none"
						>View on Yelp</a
					>
				</div>
				<div class="flex-grow" />
				<Stars num={5} />
			</div>
		</div>
	</div>
</section>
