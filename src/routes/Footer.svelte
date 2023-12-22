<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowUpRight, Envelope, MapPin, Phone } from '@steeze-ui/heroicons';

	const mapsDirectionsURL =
		'https://www.google.com/maps/dir/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80c2c00a748add01:0x79621c03bafbf6c7?sa=X&ved=2ahUKEwik89uazKGDAxXYIkQIHYVQCGMQ48ADegQIGRAA';
	const mapsURL =
		'https://www.google.com/maps/place/@34.160148,-118.3017184,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c00a748add01:0x79621c03bafbf6c7!8m2!3d34.1601436!4d-118.2991381!16s%2Fg%2F1tfmchkq';
</script>

<footer class="bg-sky-950 w-full relative pl-16 max-md:pl-5">
	<div class="max-w-7xl self-stretch flex w-full mx-auto">
		<div class="my-20 pr-10 grow-[0.4]">
			<div class="text-white text-2xl leading-6">
				<span class="font-medium text-white">Friedman</span>
				<span class="">Family</span>
				<br />
				<span class="">Chiropractic</span>
			</div>
			<div class="flex gap-8 mt-10 max-lg:flex-col">
				<div class="flex gap-4 flex-col">
					<div
						class="text-white text-opacity-80 text-sm font-medium leading-4 uppercase max-md:mt-10"
					>
						Location
					</div>
					<div class="justify-between items-stretch flex gap-1.5">
						<Icon src={MapPin} theme="mini" class="w-5 h-5 text-white" />
						<div class="text-white text-sm leading-4 self-center grow shrink basis-auto my-auto">
							1620 Victory Blvd, Glendale, CA
						</div>
					</div>
					<div class="justify-between items-stretch flex gap-1.5">
						<Icon src={Phone} theme="mini" class="w-5 h-5 text-white" />
						<a
							class="text-white text-sm leading-4 self-center grow shrink basis-auto my-auto"
							href="tel:8182447600"
						>
							(818) 244-7600
						</a>
					</div>
					<div class="justify-between items-stretch flex gap-1.5">
						<Icon src={Envelope} theme="mini" class="w-5 h-5 text-white" />
						<div class="text-white text-sm leading-4 self-center grow shrink basis-auto my-auto">
							info@friedmanfamilychiropractic.com
						</div>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="text-white text-opacity-80 text-sm font-medium leading-4 uppercase">
						Office Hours
					</div>
					<div class="text-white text-sm leading-4 whitespace-nowrap mt-5">Tuesday 9AM–5PM</div>
					<div class="text-white text-sm leading-4 whitespace-nowrap mt-3">Thursday 9AM–5PM</div>
					<div class="text-white text-sm leading-4 mt-3">Sunday 8AM–4PM</div>
				</div>
			</div>
		</div>
		<div class="grow"></div>
	</div>
	<div
		id="mapDiv"
		class="flex absolute right-0 left-1/2 top-0 bottom-0 flex-col items-stretch grow self-stretch"
	>
		<!-- svelte-ignore a11y-missing-content -->
		<a class="h-full bg-[url(/map.avif)] bg-center bg-cover block" href={mapsURL} target="_blank"
		></a>
		<a
			class="absolute justify-center items-center shadow-sm bg-sky-950 flex gap-1 px-3.5 py-2 rounded-lg bottom-4 right-5 hover:bg-opacity-90 transition"
			href={mapsDirectionsURL}
			target="_blank"
		>
			<div class="text-white text-sm whitespace-nowrap">Directions</div>
			<Icon src={ArrowUpRight} theme="mini" class="w-5 h-5 text-white" />
		</a>
	</div>
</footer>
