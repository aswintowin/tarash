<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="app">
	<Navbar />

	<main class="mt-36">
		<slot />
	</main>

	<footer class="bg-red-400 h-20">
		<p>© 2023 Sens Flooring is a registered trademark. All Rights Reserved.</p>
	</footer>

	<phone class="bg-zinc-900 text-zinc-300 mb-8 mr-5 p-4 font-extrabold text-lg rounded-lg"> Call 774 641 1475 </phone>
</div>

<svelte:head>
	<title>Sens Flooring</title>
</svelte:head>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
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

	phone {
		bottom: 0;
		right: 0;
		position: fixed;
		z-index: 3000;
		animation: zoom-in-zoom-out 2.5s ease infinite;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
