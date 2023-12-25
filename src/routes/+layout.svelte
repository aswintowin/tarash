<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="flex flex-col h-screen pt-20">
	<section class="top-0 fixed w-screen z-20 shadow-md">
		<Navbar />
	</section>

	<main>
		<slot />
	</main>

	<footer class="bg-slate-800 h-20">
		<p class="text-white">
			© 2023 The Landing Laundromat is a registered trademark. All Rights Reserved.
		</p>
	</footer>
</div>

<svelte:head>
	<title>The Landing Laundromat</title>
</svelte:head>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
</style>
