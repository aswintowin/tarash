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
	<div class="lg:flex lg:flex-row">
		<div class="lg:w-4/5 lg:float-right lg:border-solid lg:border-r-4 lg:pr-12 border-slate-900">
			<p class="font-medium mb-4">
				We are available via phone or you can also use a quick contact form below.
			</p>

			<form>
				<div class="grid gap-6 mb-6 lg:grid-cols-2">
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
					<p class="text-green-400 font-semibold text-md px-4" hidden={!result}>
						Thank you for contacting us!
					</p>
				</div>
			</form>
		</div>
		<div class="lg:w-1/5 lg:flex lg:flex-col justify-center m-8 lg:mx-12">
			<p class="text-md font-bold pb-2 text-slate-900 flex items-center">
				<PhoneOutline class="mr-2" />PHONE
			</p>
			<p class="font-serif text-md">(781) 660-4972</p>
			<p class="text-md font-bold pt-6 pb-2 text-slate-900 flex items-center">
				<EnvelopeOutline class="mr-2" />EMAIL
			</p>
			<p class="font-serif text-md">thelandinglaundromat@gmail.com</p>
			<p class="text-md font-bold pt-6 pb-2 text-slate-900 flex items-center">
				<BuildingOutline class="mr-2" />HOURS
			</p>
			<p class="font-serif text-md">Open every day from 5:00 AM - 10:00 PM</p>
			<p class="font-serif text-md">(Last wash at 9:00 PM)</p>

			<p class="text-md font-bold pt-6 pb-2 text-slate-900 flex items-center">
				<MapLocationOutline class="mr-2" /> ADDRESS
			</p>
			<p class="font-serif text-md">69 Broad Street, Weymouth, MA 02188</p>
		</div>
	</div>
</Section>
