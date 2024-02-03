<script>
	import { Table, TableBody, TableBodyCell, TableBodyRow } from 'flowbite-svelte';
	import { readable } from 'svelte/store';
	import Section from './Section.svelte';
	import { Card, Button } from 'flowbite-svelte';
	import Header from './Header.svelte';

	const bedding = readable(
		Object.freeze([
			{
				name: 'Comfortor (Full/Twin)',
				price: '$21.99'
			},
			{
				name: 'Comfortor (Queen)',
				price: '$25.99'
			},
			{
				name: 'Comfortor (King)',
				price: '$29.99'
			},
			{
				name: 'Bedspread',
				price: '$9.99'
			}
		])
	);

	const household = readable(
		Object.freeze([
			{
				name: 'Blanket',
				price: '$9.99'
			},

			{
				name: 'Curtains',
				price: '$7.99'
			},
			{
				name: 'Pillow',
				price: '$5.99'
			},
			{
				name: 'Pillow Sham',
				price: '$1.99'
			}
		])
	);
</script>

<Section sectionId="pricing" backGroundColor="bg-slate-50">
	<div class="flex flex-col items-center">
		<Header title="Pricing" />
		<div class="md:flex md:flex-row md:m-auto md:justify-center m-10">
			<div class="grid gap-10 grid-cols-1 md:grid-cols-3">
				<Card class="items-center">
					<div class="md:flex md:flex-col md:items-center md:justify-center">
						<h5 class="text-2xl font-bold tracking-tight mb-4 text-slate-800">
							Wash & Fold Pricing
						</h5>
						<p class="font-normal">Wash & fold laundry is charged by the pound.</p>
						<p class="mb-4 font-normal">Minimum order is 20 pounds(lbs).</p>
						<h5 class="mb-8 text-4xl font-bold tracking-tight text-gray-600">$2.30/lb</h5>
						<Button class="w-fit" href="/schedule">Schedule free pickup</Button>
					</div>
				</Card>

				<Card class="items-center">
					<h5 class="text-2xl font-bold tracking-tight mb-4 text-slate-800">Household Items</h5>
					<Table class="w-64">
						<TableBody>
							{#each $household as item}
								<TableBodyRow>
									<TableBodyCell>{item.name}</TableBodyCell>
									<TableBodyCell>{item.price}</TableBodyCell>
								</TableBodyRow>
							{/each}
						</TableBody>
					</Table>
				</Card>
				<Card class="items-center">
					<h5 class="text-2xl font-bold tracking-tight mb-4 text-slate-800">Large Bedding Items</h5>
					<Table class="w-64">
						<TableBody>
							{#each $bedding as item}
								<TableBodyRow>
									<TableBodyCell>{item.name}</TableBodyCell>
									<TableBodyCell>{item.price}</TableBodyCell>
								</TableBodyRow>
							{/each}
						</TableBody>
					</Table>
				</Card>
			</div>
		</div>
	</div></Section
>
