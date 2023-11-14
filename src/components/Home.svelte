<script>
	import { Button } from 'flowbite-svelte';
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

<style>
	.home {
		background-image: url('$lib/images/Medium.jpg');
		max-width: 100%;
		height: 400px;
		object-fit: fit;
	}
</style>
