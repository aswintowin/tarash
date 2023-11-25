<script>
	import { readable } from 'svelte/store';
	import Machine from '$lib/images/ameneties/machine.svg';
	import Header from './Header.svelte';
	import Section from './Section.svelte';
	import Credit from '$lib/images/ameneties/credit.svg';
	import Coins from '$lib/images/ameneties/coins.svg';
	import Delivery from '$lib/images/ameneties/truck.svg';
	import Calendar from '$lib/images/ameneties/calendar.svg';
	import Lounge from '$lib/images/ameneties/lounge.svg';
	import Soap from '$lib/images/ameneties/soap.svg';
	import Wifi from '$lib/images/ameneties/wifi.svg';
	import Car from '$lib/images/ameneties/car.svg';
	import Camera from '$lib/images/ameneties/camera.svg';

	const amenities = readable(
		Object.freeze([
			{
				name: 'HI TECH MACHINES',
				pic: Machine
			},
			{
				name: 'CREDIT CARD READERS',
				pic: Credit
			},
			{
				name: 'CHANGE MACHINE',
				pic: Coins
			},
			{
				name: 'PICKUP & DELIVERY',
				pic: Delivery
			},
			{
				name: 'OPEN 7 DAYS A WEEK',
				pic: Calendar
			},
			{
				name: 'PARKING LOT',
				pic: Car
			},
			{
				name: 'COMFORTABLE SEATING',
				pic: Lounge
			},
			{
				name: 'LAUNDRY SUPPLIES',
				pic: Soap
			},
			{
				name: 'FREE WIFI',
				pic: Wifi
			},
			{
				name: 'SECURITY CAMERAS',
				pic: Camera
			}
		])
	);
</script>

<Section sectionId="ameneties" backGroundColor="bg-slate-100">
	<div class="flex flex-col items-center">
		<Header title="Amenities" />
		<div class="grid gap-10 grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
			{#each $amenities as amenity}
				<div class=" flex max-w-sm rounded-3xl flex-col items-center">
					<img class="mb-4 h-12 rounded-lg" alt={amenity.name} src={amenity.pic} />
					<h5 class="m-4 text-sm text-slate-900 font-semibold">
						{amenity.name}
					</h5>
				</div>
			{/each}
		</div>
	</div>
</Section>
