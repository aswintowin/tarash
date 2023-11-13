<script>
	import { Label, Input, Textarea, Button } from 'flowbite-svelte';
	import Header from './Header.svelte';
	import Section from './Section.svelte';
	import submitContact from './api/api';
	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Leave a comment...'
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

	async function doPost() {
		let body = {
			first_name,
			last_name,
			email,
			phone,
			comment: message
		};
		result = await submitContact(body);
	}
</script>

<Section sectionId="contact" backGroundColor="bg-gray-50">
	<Header title="Contact us" />

	<p class="font-medium mb-4">
		We are available via phone or you can also use a quick contact form below.
	</p>

	<form>
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<div>
				<Label for="first_name" class="mb-2">First name</Label>
				<Input type="text" id="first_name" placeholder="John" required bind:value={first_name} />
			</div>
			<div>
				<Label for="last_name" class="mb-2">Last name</Label>
				<Input type="text" id="last_name" placeholder="Doe" required bind:value={last_name} />
			</div>
			<div>
				<Label for="email" class="mb-2">Email address</Label>
				<Input
					type="email"
					id="email"
					placeholder="john.doe@company.com"
					required
					bind:value={email}
				/>
			</div>
			<div>
				<Label for="phone" class="mb-2">Phone number</Label>
				<Input
					type="tel"
					id="phone"
					placeholder="1234566789"
					pattern={'[0-9]{3}-[0-9]{3}-[0-9]{4}'}
					required
					bind:value={phone}
				/>
			</div>
		</div>
		<div class="mb-6">
			<Textarea {...textareaprops} bind:value={message} />
		</div>
    <div class="flex items-center">
      <Button type="submit" on:click={doPost}>Submit</Button>
      <p class="text-green-400 font-semibold text-lg px-4" hidden={!result}>Thank you for contacting us!</p>
    </div>
	
	</form>
</Section>
