<script>
	import logo from '$lib/images/logo.webp';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
	let nonActiveClass = 'text-lg';
</script>

<Navbar class="dark:bg-white">
	<NavBrand href="/">
		<img src={logo} class="h-12 md:h-16" alt="The Landing Laundromat" />
	</NavBrand>
	<div class="flex md:order-2">
		<phone>
			<Button size="sm">Request free pickup</Button>
		</phone>
		<NavHamburger />
	</div>
	<NavUl {nonActiveClass} class="order-1">
		<NavLi href="/">Home</NavLi>
		<NavLi href="#contact">Contact</NavLi>
		<NavLi href="#services">Services</NavLi>
		<NavLi href="#faq">FAQ</NavLi>
		<NavLi href="#ameneties">Ameneties</NavLi>
	</NavUl>
</Navbar>

<style>
	phone {
		animation: zoom-in-zoom-out 5s ease infinite;
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
