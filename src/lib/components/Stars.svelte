<script lang="ts">
	import { Star } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let num = 5;
	let className = '';
	export { className as class };
</script>

<div class="flex items-center gap-px {className}">
	{#each new Array(num).fill(undefined) as _}
		<Icon src={Star} theme="mini" class="w-4 h-4 text-yellow-400" />
	{/each}
</div>
