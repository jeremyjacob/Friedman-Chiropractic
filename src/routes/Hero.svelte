<script lang="ts">
	import { BookOpen } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	let open = false;
	let selected: string | undefined = undefined;
</script>

<section
	class="flex-col overflow-hidden self-stretch relative flex w-full justify-center py-12 items-start max-md:px-5 px-16"
>
	<img
		alt=""
		src="/family-picnic.avif"
		class="absolute h-full w-full object-cover inset-0 brightness-100 -scale-x-100 max-md:object-[25%,0%]"
	/>
	<div
		class="relative flex w-full mx-auto gap-3 flex-col items-stretch mt-0 md:mt-32 mb-64 max-w-7xl pb-24"
	>
		<div class="space-y-2">
			<!-- <p class="mb-20 font-serif opacity-60 font-bold text-6xl">
				““
			</p> -->
			<p class="mb-4 opacity-90 text-xl text-white">Dr. Howard Friedman</p>
			<p class="text-6xl font-medium font-serif leading-tight grow max-w-[60rem] max-md:text-4xl">
				There are <span class="text-sky-700 font-semibold">no such things</span> as “normal” aches and
				pains.
			</p>
			<p class="pt-2 opacity-75 text-lg">
				My goal is to help you actualize total wellbeing through holistic chiropractic care.
			</p>
			<!-- <button
				class=" text-6xl font-medium font-serif max-md:w-screen grow whitespace-nowrap max-md:text-4xl flex flex-col motion-reduce:transition-none transition-all {open &&
					'px-6 py-5 bg-white shadow-lg md:rounded-3xl -mx-6'}"
				on:click={() => (open = !open)}
			>
				<span class="flex gap-1 items-end text-sky-700 mb-4">
					{selected ?? 'select issue...'}
					<Icon src={ChevronDown} class="w-10 text-sky-700 md:w-14 h-10 md:h-14" />
				</span>
				{#if open}
					<button class={optionClass} out:height on:click={() => (selected = 'Arthritus')}>
						Arthritus
					</button>
					<button
						class="{optionClass} anim-delay-50"
						out:height
						on:click={() => (selected = 'Neck pain')}
					>
						Neck pain
					</button>
					<button
						class="{optionClass} anim-delay-100"
						out:height
						on:click={() => (selected = 'Back pain')}
					>
						Back pain
					</button>
				{/if}
			</button> -->
		</div>
		<!-- <a
			class="text-white whitespace-nowrap shadow-md bg-sky-700 mt-14 px-6 py-3 max-md:text-sm rounded-full self-start hover:bg-opacity-90 transition flex gap-2 items-center"
			href="/book"
		>
			<Icon src={BookOpen} theme="solid" class="h-5 w-5" />
			Learn more
		</a> -->
	</div>
</section>

<style>
	@keyframes option-in {
		to {
			opacity: 1;
			height: 5rem;
			transform: scale(1);
		}
	}

	.option-in {
		animation: option-in 0.3s cubic-bezier(0.18, 0.81, 0.32, 1.24) forwards;
	}

	@media (prefers-reduced-motion: reduce) {
		.option-in {
			animation: option-in 0s forwards;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.anim-delay-50 {
			animation-delay: 0.05s;
		}

		.anim-delay-100 {
			animation-delay: 0.1s;
		}
	}
</style>
