<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>


<div class="text-column mt-8">
	<h1 class="text-4xl text-red-500 mb-6 font-semibold">About Us</h1>

	<p class="font-medium mb-4">
		Sens Flooring was born out of a vision to provide top-notch flooring products and services to
		homeowners and businesses alike. Our founders, who are seasoned professionals in the flooring
		industry, saw the need for a company that prioritized not only the aesthetics of flooring but
		also its functionality and durability.
	</p>

	<p class="font-medium mb-4">
		At Sens Flooring, we take pride in being more than just a flooring company. We are a team of
		experts who understand the intricate details of different flooring options, whether it's
		hardwood, laminate, vinyl, carpet, or tile. Our commitment to excellence is reflected in every
		project we undertake, from concept to completion.
	</p>

	<Accordion>
		<AccordionItem>
			<span slot="header">Expertise</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				Our dedicated team of flooring specialists brings extensive industry knowledge to every
				project. We can guide you through the selection process, ensuring that you choose the right
				flooring solution that aligns with your style, budget, and practical needs.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Quality</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				We source our materials from trusted suppliers and use the latest installation techniques to
				ensure your flooring not only looks stunning but also lasts for years to come.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Customization</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				We understand that every space is unique. That's why we offer customization options that
				allow you to tailor your flooring to match your distinct preferences.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Customer Satisfaction</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				Your satisfaction is our ultimate goal. We work closely with you, providing transparent
				communication and support throughout the entire project, from the initial consultation to
				the final installation.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Sustainability</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				We are committed to environmentally responsible practices. Our selection includes
				eco-friendly flooring options, and we take steps to minimize waste and reduce our ecological
				footprint.
			</p>
		</AccordionItem>
	</Accordion>
</div>
