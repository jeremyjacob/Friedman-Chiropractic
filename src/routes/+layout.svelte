<script lang="ts">
	import '$lib/app.css';
	import type { LayoutData } from './$types';

	import NavBar from './NavBar.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	export let data: LayoutData;
</script>

<Header></Header>
<div class="items-start flex flex-col">
	<NavBar></NavBar>
	<slot />
	<Footer></Footer>
</div>
