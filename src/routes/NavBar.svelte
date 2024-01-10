<script>
	import { ChevronDown } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
</script>

<nav
	class="backdrop-blur-[42px] bg-white self-stretch flex w-full flex-col justify-center items-center px-16 py-7 max-md:px-5"
>
	<div class="flex w-full max-w-7xl items-stretch justify-between gap-5 max-md:flex-wrap">
		<a class="text-zinc-800 text-2xl leading-6" href="/">
			<span class="font-medium text-zinc-800">Friedman</span>
			<span class="">Family</span>
			<br />
			<span class="">Chiropractic</span>
		</a>
		<div class="justify-center items-stretch self-center flex gap-4 my-auto">
			<!-- <a class="justify-between items-center flex gap-0">
				<div class="text-zinc-800 text-base leading-4 grow whitespace-nowrap my-auto">Services</div>
				<Icon src={ChevronDown} theme="mini" class="w-4 h-4" />
			</a> -->
			<!-- <a class="justify-between items-center flex gap-0">
				<div class="text-zinc-800 text-base leading-4 grow whitespace-nowrap my-auto">
					New Patients
				</div>
				<Icon src={ChevronDown} theme="mini" class="w-4 h-4" />
			</a> -->
			<a class="text-zinc-800 text-base leading-4 self-center my-auto" href="/about">About</a>
			<a
				class="text-zinc-800 text-base leading-4 self-center grow whitespace-nowrap my-auto"
				href="tel:8182447600"
			>
				Contact me
			</a>
		</div>
		<a
			class="text-white text-base leading-4 whitespace-nowrap justify-center items-stretch shadow-sm bg-sky-700 self-center my-auto px-5 py-3.5 rounded-md hover:bg-opacity-90 transition max-md:hidden"
			href="tel:8182447600"
		>
			Call our office
		</a>
	</div>
</nav>
