<script>
	import logo from '$lib/images/logo.webp';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
	let nonActiveClass = 'text-md';
	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar id="menu" class="dark:bg-white h-20">
	<NavBrand href="/">
		<img src={logo} class="h-12 md:h-16" alt="The Landing Laundromat" />
	</NavBrand>
	<div class="flex md:order-2">
		<Button href="/schedule" size="sm">Request free pickup</Button>
		{#if !activeUrl.includes('schedule')}
			<NavHamburger />
		{/if}
	</div>
	<NavUl {nonActiveClass} class="order-1">
		<NavLi href="/">Home</NavLi>
		{#if !activeUrl.includes('schedule')}
			<NavLi href="#services">Services</NavLi>
			<NavLi href="#pricing">Pricing</NavLi>
			<NavLi href="#faq">FAQ</NavLi>
			<NavLi href="#ameneties">Amenities</NavLi>
			<NavLi href="#contact">Contact</NavLi>
			<NavLi href="/schedule">Order</NavLi>
		{/if}
	</NavUl>
</Navbar>
