<script>
	import { Label, Input, Textarea, Button } from 'flowbite-svelte';
	import Header from './Header.svelte';
	import Section from './Section.svelte';
	import submitContact from './api/api';
	import {
		MapLocationOutline,
		PhoneOutline,
		BuildingOutline,
		EnvelopeOutline
	} from 'flowbite-svelte-icons';
	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4
	};
	/**
	 * @type {string | null}
	 */
	let result = null;
	let first_name = '';
	let last_name = '';
	let phone = '';
	let email = '';
	let message = '';
	let isLoading = false;

	async function doPost() {
		isLoading = true;
		let body = {
			first_name,
			last_name,
			email,
			phone,
			comment: message
		};
		result = await submitContact(body);
		isLoading = false;
	}
</script>

<Section sectionId="contact" backGroundColor="bg-slate-50">
	<Header title="Contact us" />
	<div class="md:flex md:flex-row">
		<div class="md:w-4/5 md:float-right md:border-solid md:border-r-4 md:pr-12 border-slate-900">
			<p class="font-medium mb-4">
				We are available via phone or you can also use a quick contact form below.
			</p>

			<form>
				<div class="grid gap-6 mb-6 md:grid-cols-2">
					<div>
						<Label for="first_name" class="mb-2">First name</Label>
						<Input type="text" id="first_name" required bind:value={first_name} />
					</div>
					<div>
						<Label for="last_name" class="mb-2">Last name</Label>
						<Input type="text" id="last_name" required bind:value={last_name} />
					</div>
					<div>
						<Label for="email" class="mb-2">Email address</Label>
						<Input type="email" id="email" required bind:value={email} />
					</div>
					<div>
						<Label for="phone" class="mb-2">Phone number</Label>
						<Input type="tel" id="phone" pattern={'[0-9]{10}'} required bind:value={phone} />
					</div>
				</div>
				<div class="mb-6">
					<Label for="phone" class="mb-2">Message</Label>
					<Textarea {...textareaprops} bind:value={message} />
				</div>
				<div class="flex items-center">
					<Button type="submit" on:click={doPost} disabled={isLoading}>Submit</Button>
					<p class="text-green-400 font-semibold text-lg px-4" hidden={!result}>
						Thank you for contacting us!
					</p>
				</div>
			</form>
		</div>
		<div class="md:w-1/5 md:flex md:flex-col justify-center m-8 md:mx-12">
			<p class="text-lg font-bold pb-2 text-slate-900 flex items-center">
				<PhoneOutline class="mr-2" />PHONE
			</p>
			<p class="font-serif text-lg">(781) 660-4972</p>
			<p class="text-lg font-bold pt-6 pb-2 text-slate-900 flex items-center">
				<EnvelopeOutline class="mr-2" />EMAIL
			</p>
			<p class="font-serif text-lg">thelandinglaundromat@gmail.com</p>
			<p class="text-lg font-bold pt-6 pb-2 text-slate-900 flex items-center">
				<BuildingOutline class="mr-2" />HOURS
			</p>
			<p class="font-serif text-lg">Open every day from 5:30AM - 10PM</p>
			<p class="font-serif text-md">(Last wash at 9PM)</p>

			<p class="text-lg font-bold pt-6 pb-2 text-slate-900 flex items-center">
				<MapLocationOutline class="mr-2" /> ADDRESS
			</p>
			<p class="font-serif text-lg">69 Broad Street, Weymouth, MA 02188</p>
		</div>
	</div>
</Section>
