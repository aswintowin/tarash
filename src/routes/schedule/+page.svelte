<script>
	import { readable } from 'svelte/store';
	import Laundry from '$lib/images/services/machines.jpg';
	import WDF from '$lib/images/services/washfolddry.jpg';
	import PAD from '$lib/images/services/pickup.jfif';
	import Header from '../../components/Header.svelte';

	const services = readable(
		Object.freeze([
			{
				name: 'COIN & COINLESS MACHINES',
				pic: Laundry,
				description:
					'Our environmentally friendly Wascomat machines use less water and dry faster so you are done fast! You can pay with coins, Visa, or MasterCard. '
			},
			{
				name: 'WASH, DRY & FOLD SERVICE',
				pic: WDF,
				description:
					'Don’t waste valuable time doing your own laundry. Let us handle it for you! Offered 7 days a week, same day or next day available.'
			},
			{
				name: 'FREE PICKUP & DELIVERY',
				pic: PAD,
				description:
					'Hassle-free pickup and delivery laundry service! With our convenient service, you can enjoy clean, fresh clothes without ever leaving your home.'
			}
		])
	);
</script>

<div class="flex flex-col items-center md:m-2">
	<Header title="" />

	<iframe
		id="iFrame"
		name="iFrame"
		src="https://cleancloudapp.com/s3/28658"
		height="750"
		width="100%"
		frameborder="0"
		sandbox="allow-modals allow-top-navigation allow-scripts allow-forms allow-pointer-lock allow-same-origin"
	/>
</div>
