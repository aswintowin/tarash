<script>
	import { Carousel } from 'flowbite-svelte';
	const images = [
		{ alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
		{ alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
		{ alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
		{ alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
		{ alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
		{ alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
		{ alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
		{ alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
		{ alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
		{
			alt: 'playstation',
			src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
		},
		{ alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' }
	];
</script>

<section>
	<div>
		<Carousel {images} let:Controls duration={2000}>
			<Controls />
		</Carousel>
	</div>
	<p class="font-medium my-4">
		Welcome to Sens Flooring, your trusted partner in the world of flooring. We are a leading
		flooring company dedicated to transforming spaces and enriching lives through our exceptional
		flooring solutions. With a passion for craftsmanship, quality, and customer satisfaction, we
		have been serving our valued customers for many years.
	</p>
	<p class="font-medium mb-4">
		Whether you are renovating your home, designing a new office space, or simply looking to upgrade
		your floors, [Your Company Name] is the name you can trust. We believe that your flooring should
		not only be a functional foundation but also a work of art that reflects your unique style and
		personality.
	</p>
	<p class="font-medium mb-4">
		Thank you for considering Sens flooring as your flooring partner. We look forward to helping you
		bring your flooring dreams to life.
	</p>
	<p class="font-medium mb-4">
		Contact us today to discuss your flooring needs, and let's embark on this exciting journey
		together!
	</p>
</section>
