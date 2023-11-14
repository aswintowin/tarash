<script>
	import { AccordionItem, Accordion, P } from 'flowbite-svelte';
	import { readable } from 'svelte/store';
	import { Button } from 'flowbite-svelte';
	import Header from './Header.svelte';

	const faqs = readable(
		Object.freeze([
			{
				header: 'How can I schedule a pick-up service?',
				description:
					"To arrange for pick-ups, you have two convenient options. You can either call us at 781-660-4972 or use our online ordering page to submit your request. If you'd like a same-day pick-up, please make sure to place your order by 11:00 AM, either online or over the phone. You can also leave your garments out for pick-up as late as 6:00 PM."
			},
			{
				header: 'What are your operating hours?',
				description:
					"To arrange for pick-ups, you have two convenient options. You can either call us at 781-660-4972 or use our online ordering page to submit your request. If you'd like a same-day pick-up, please make sure to place your order by 11:00 AM, either online or over the phone. You can also leave your garments out for pick-up as late as 6:00 PM."
			},
			{
				header: 'How are my clothing items tracked and managed?',
				description:
					'Our wash, dry, and fold service is billed based on the weight, which is determined at the time of pickup and later double-checked after folding. Special care garments are meticulously documented by both the quantity and type.'
			},
			{
				header: 'Payment Methods',
				description:
					'At The Landing Laundromat, we accept various payment methods for your convenience, including cash, major credit cards (Visa and MasterCard), as well as digital options such as PayPal and Venmo.'
			},
			{
				header: 'Delivery Minimum',
				description:
					' To ensure the seamless delivery of your laundry and dry cleaning by The Landing Laundromat, there is a minimum order requirement of 20 lbs or a $50.00 minimum charge for each delivery order.'
			},
			{
				header: 'What is the last wash time?',
				description:
					'The posted time for starting the last wash is 9:00 PM. This typically allows enough time for our customers to finish washing, drying and folding their clothes by 10:00 PM.'
			},
			{
				header: 'What is the last wash time?',
				description:
					'The posted time for starting the last wash is 9:00 PM. This typically allows enough time for our customers to finish washing, drying and folding their clothes by 10:00 PM.'
			}
		])
	);
</script>

<section id="faq">
	<faq class="flex flex-row">
		<div class="md:w-2/3 float-right md:p-24 p-10">
			<Header title="Frequently Asked Questions" />

			<P weight="semibold" class="mb-4">
				Frequently asked questions about the services offered by The Landing Laundromat.
			</P>

			<P class="mb-4">
				If you have a question that is not covered in the following information, please don't
				hesitate to get in touch with us.
			</P>

			<Accordion>
				{#each $faqs as faq}
					<AccordionItem>
						<span slot="header">{faq.header}</span>
						<p class="mb-2 text-slate-900 dark:text-slate-400 font-serif">
							{faq.description}
						</p>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
		<div
			class="md:w-1/3 md:flex md:flex-col hidden bg-slate-900 p-12 md:justify-center md:items-center"
		>
			<P weight="semibold" class="text-white text-3xl mb-10 font-serif">
				Ready to place your first order?
			</P>
			<Button href="/schedule" size="xl" class="bg-white text-slate-900 hover:bg-slate-200"
				>Request free pickup</Button
			>
			<P weight="semibold" class="text-white m-4">Or call us</P>
			<P weight="bold" class="text-white text-xl">(781) 660-4972</P>
		</div>
	</faq>
</section>
