<script lang="ts">
	import { height } from '$lib/utils';
	import { ChevronDown } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	let open = false;
	let selected: string | undefined = undefined;

	const optionClass =
		'transition hover:text-sky-700 text-5xl max-md:text-3xl duration-75 font-medium font-serif h-0 flex items-center option-in scale-95 opacity-0 w-full';
</script>

<section
	class="flex-col overflow-hidden self-stretch relative flex w-full justify-center py-12 items-start max-md:px-5 px-16 h-[50rem]"
>
	<img alt="" src="runner.avif" class="absolute h-full w-full object-cover object-center inset-0" />
	<div class="relative flex w-full mx-auto gap-3 flex-col items-stretch mt-44 mb-64 max-w-7xl">
		<div class="space-y-2">
			<p class="text-6xl font-medium font-serif grow whitespace-nowrap max-md:text-4xl">
				I need help with
			</p>
			<button
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
			</button>
		</div>
		<a
			class="text-white whitespace-nowrap shadow-md bg-sky-700 mt-7 px-6 py-3 max-md:text-sm rounded-full self-start hover:bg-opacity-90 transition"
			href="/book"
		>
			Get treatment
		</a>
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
