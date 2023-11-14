<script>
	import logo from '$lib/images/logo.webp';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
	let nonActiveClass = 'text-lg';
</script>

<Navbar id="menu" class="dark:bg-white h-20">
	<NavBrand href="/">
		<img src={logo} class="h-12 md:h-16" alt="The Landing Laundromat" />
	</NavBrand>
	<div class="flex md:order-2">
		<Button href="#schedule" size="sm">Request free pickup</Button>
		<!-- <NavHamburger /> -->
	</div>
	<NavUl {nonActiveClass} class="order-1">
		<NavLi href="/">Home</NavLi>
		<NavLi href="#services">Services</NavLi>
		<NavLi href="#faq">FAQ</NavLi>
		<NavLi href="#ameneties">Ameneties</NavLi>
		<NavLi href="#contact">Contact</NavLi>
	</NavUl>
</Navbar>
