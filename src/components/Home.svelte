<script>
	import { Carousel } from 'flowbite-svelte';
	import Section from './Section.svelte';
	import { Button } from 'flowbite-svelte';

	import StoreFront from '$lib/images/1.jpg';
	import Inside1 from '$lib/images/2.jpg';
	import Inside2 from '$lib/images/3.jpg';
	import Inside3 from '$lib/images/4.jpg';
	import Machines from '$lib/images/Machines.jpg';
	import Inside2O from '$lib/images/home/Inside2.jpg';
	import Inside23 from '$lib/images/home/Inside3.jpg';
	import Machines2 from '$lib/images/home/Machine1.jpg';
	import StoreFront1 from '$lib/images/home/Storefront.jpeg';

	const images = [
		{ alt: 'Store front', src: StoreFront },
		{ alt: 'Inside1', src: Inside1 },
		{ alt: 'Machines', src: Inside2 },
		{ alt: 'Machines', src: Inside3 },
		{ alt: 'Machines', src: Machines },
		{ alt: 'Machines', src: Inside2O },
		{ alt: 'Machines', src: Inside23 },
		{ alt: 'Machines', src: Machines2 },
		{ alt: 'Machines', src: StoreFront1 }
	];
</script>

<section id="home" class="home w-full h-fit">
	<div class=" flex flex-col justify-center items-center h-full">
		<p class="font-semibold mb-4 md:text-5xl text-2xl text-slate-200 font-serif">
			Leave the Laundry to Us
		</p>

		<p class="font-bold mb-6 md:text-lg text-xs text-slate-200 font-serif">
			You deserve clean laundry, and that’s our speciality.
		</p>
		<Button href="/schedule" size="xl" color="light">Request free pickup</Button>
	</div>
	<!-- <Carousel {images} let:Controls duration={3500}>
			<Controls />
		</Carousel> -->
</section>

<style>
	.home {
		max-width: 72rem;
		margin: 0 auto;
		background-image: url('$lib/images/Medium.jpg');
		max-width: 100%;
		max-height: 100%;
		height: 400px;
		object-fit: fit;
	}
</style>
