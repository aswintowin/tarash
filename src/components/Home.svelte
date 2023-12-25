<script>
	import { Button } from 'flowbite-svelte';
	import {
		MapLocationOutline,
		PhoneOutline,
		BuildingOutline,
		EnvelopeOutline
	} from 'flowbite-svelte-icons';
</script>

<section id="home" class="home w-full h-fit">
	<div class=" flex flex-col justify-center items-center h-full">
		<p
			class="font-semibold mb-4 lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-slate-200 font-serif"
		>
			Leave the Laundry to Us
		</p>

		<p class="font-bold mb-6 lg:text-lg md:text-md sm:text-sm text-xs text-slate-200 font-serif">
			You deserve clean laundry, and that’s our speciality.
		</p>
		<Button href="/schedule" size="xl" color="light">Request free pickup</Button>
	</div>
</section>
<div class="lg:h-80 lg:py-12 p-4 lg:flex lg:flex-row lg:m-auto">
	<div class="lg:w-1/4 lg:mx-12 m-8 lg:my-0">
		<p class="text-lg font-bold pb-2 text-slate-900 flex items-center">
			<MapLocationOutline class="mr-2" /> ADDRESS
		</p>
		<p class="font-serif text-md">69 Broad Street</p>
		<p class="font-serif text-md">Weymouth, MA 02188</p>
		<p class="font-serif pt-6 text-slate-900 flex items-center">
			<PhoneOutline class="mr-4" /><a href="tel:781-660-4972">(781) 660-4972</a>
		</p>
		<p class="font-serif pt-2 text-slate-900 flex items-center">
			<EnvelopeOutline class="mr-4" /><a
				class="font-serif text-md"
				href="mailto:thelandinglaundromat@gmail.com">thelandinglaundromat@gmail.com</a
			>
		</p>
	</div>
	<div class="lg:w-1/4 lg:mx-8 lg:my-0 m-8">
		<p class="text-lg font-bold pb-2 text-slate-900 flex items-center">
			<BuildingOutline class="mr-2" />HOURS
		</p>
		<p class="font-serif text-md">Open 7 days a week</p>
		<p class="font-serif text-md">5:00 AM - 10:00 PM</p>
		<p class="font-serif text-sm">(Last wash at 9:00 PM)</p>
	</div>
	<div class="lg:w-1/2 lg:float-right m-4 lg:my-0">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.9342747730857!2d-70.96642652336922!3d42.21584934419946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e362fb0b952a45%3A0x17c59dc30bc4cc16!2s69%20Broad%20St%2C%20Weymouth%2C%20MA%2002188!5e0!3m2!1sen!2sus!4v1700871646348!5m2!1sen!2sus"
			width="100%"
			height="100%"
			style="border:0;"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
	</div>
</div>

<style>
	.home {
		background-image: url('$lib/images/Medium.jpg');
		max-width: 100%;
		height: 400px;
		object-fit: fit;
	}
</style>
