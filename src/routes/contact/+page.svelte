<script>
	import { Label, Input } from 'flowbite-svelte';
	import { Textarea } from 'flowbite-svelte';
	import { Button } from 'flowbite-svelte';
	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Leave a comment...'
	};
</script>


<div class="text-column mt-8">
	<h1 class="text-4xl text-red-500 mb-6 font-semibold">Contact Us Today</h1>

	<p class="font-medium mb-4">
		We are available via phone or you can also use a quick contact form below.
	</p>

	<form>
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<div>
				<Label for="first_name" class="mb-2">First name</Label>
				<Input type="text" id="first_name" placeholder="John" required />
			</div>
			<div>
				<Label for="last_name" class="mb-2">Last name</Label>
				<Input type="text" id="last_name" placeholder="Doe" required />
			</div>
			<div>
				<Label for="email" class="mb-2">Email address</Label>
				<Input type="email" id="email" placeholder="john.doe@company.com" required />
			</div>
			<div>
				<Label for="phone" class="mb-2">Phone number</Label>
				<Input
					type="tel"
					id="phone"
					placeholder="1234566789"
					pattern={'[0-9]{3}-[0-9]{3}-[0-9]{4}'}
					required
				/>
			</div>
		</div>
		<div class="mb-6">
			<Textarea {...textareaprops} />
		</div>
		<Button type="submit">Submit</Button>
	</form>
</div>
