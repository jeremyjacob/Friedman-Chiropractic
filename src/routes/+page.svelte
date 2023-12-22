<script>
	import Footer from './Footer.svelte';

	import { Icon } from '@steeze-ui/svelte-icon';
	import AdditionalInfo from './AdditionalInfo.svelte';

	import Testimonials from './Testimonials.svelte';

	import Treatments from './Treatments.svelte';

	import Welcome from './Welcome.svelte';

	import Hero from './Hero.svelte';

	import NavBar from './NavBar.svelte';

	import Header from './Header.svelte';
	import { Envelope, MapPin, Phone } from '@steeze-ui/heroicons';
</script>

<Header></Header>
<div class="items-start flex flex-col">
	<NavBar></NavBar>
	<Hero></Hero>
	<Welcome></Welcome>
	<Treatments></Treatments>
	<Testimonials></Testimonials>
	<AdditionalInfo></AdditionalInfo>
	<Footer></Footer>
</div>
