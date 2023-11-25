<script>
	import { Button } from 'flowbite-svelte';
	import { MapLocationOutline, BuildingOutline } from 'flowbite-svelte-icons';
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
</section>
<div class="md:h-96 md:py-12 p-4 md:flex md:flex-row md:m-auto md:w-2/3">
	<div class="md:w-1/4 md:mx-12 m-8 md:my-0">
		<p class="text-lg font-bold pb-2 text-slate-900 flex items-center">
			<MapLocationOutline class="mr-2" /> ADDRESS
		</p>
		<p class="font-serif text-md">The Landing Laundromat</p>
		<p class="font-serif text-md">69 Broad Street</p>
		<p class="font-serif text-md">Weymouth, MA 02188</p>
		<br />
		<p class="font-serif text-md">(781) 660-4972</p>
	</div>
	<div class="md:w-1/4 md:mx-8 md:my-0 m-8">
		<p class="text-lg font-bold pb-2 text-slate-900 flex items-center">
			<BuildingOutline class="mr-2" />HOURS
		</p>
		<p class="font-serif text-md">Open 7 days</p>
		<p class="font-serif text-md">5:00 AM - 10:00 PM</p>
		<p class="font-serif text-sm">(Last wash at 9:00 PM)</p>
	</div>
	<div class="md:w-1/2 md:float-right m-4 md:my-0">
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
