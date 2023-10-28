<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/sens.svg';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
	let activeClass =
		'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent border border-blue-900 border-b-4 border-t-0 border-r-0 border-l-0"';
	let nonActiveClass =
		'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
</script>

<Navbar class="bg-Fuchsia-50 h-32 flex shadow-md">
	<NavBrand href="/">
		<img src={logo} class="mr-3 h-6 sm:h-24" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-red"
			>Sens Flooring</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/services">Services</NavLi>
		<NavLi href="/contact">Contact</NavLi>
		<NavLi href="/gallery">Gallery</NavLi>
	</NavUl>
</Navbar>
