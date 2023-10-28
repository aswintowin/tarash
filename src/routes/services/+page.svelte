<script>
	import { get, readable } from 'svelte/store';
	import { Card, Button, Toggle } from 'flowbite-svelte';
	import Installation from '../../lib/images/Installation.jpg';
	import Restoration from '../../lib/images/Restoration.jpg';
	import Consultation from '../../lib/images/Consultation.png';
	import Commercial from '../../lib/images/Commercial.jpg';
	import Custom from '../../lib/images/Custom.jpg';

	const services = readable(
		Object.freeze([
			{ name: 'Flooring Installation', pic: Installation },
			{ name: 'Flooring Repair and Restoration', pic: Restoration },
			{ name: 'Custom Flooring Solutions', pic: Custom },
			{ name: 'Residential and Commercial Projects', pic: Commercial },
			{ name: 'Consultation and Design Assistance', pic: Consultation }
		])
	);
</script>

<div class="text-column mt-8">
	<h1 class="text-4xl text-red-500 mb-6 font-semibold">Our services</h1>

	<div class="grid gap-4 grid-cols-2 md:grid-cols-3">
		{#each $services as service}
			<Card img={service.pic} class="mb-4">
				<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
					{service.name}
				</h5>
			</Card>
		{/each}
	</div>
</div>
