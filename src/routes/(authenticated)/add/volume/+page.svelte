<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, Card, Fieldset, Form, Input } from '$components';
	import { toast } from '$components/Toast';
	import { slide } from 'svelte/transition';

	// props (external)
	export let form;

	// props (internal)
	let name = '';

	// props (dynamic)
	$: if (form?.name) toast(`"${form?.name} created"`);
</script>

<div class="flex flex-col flex-grow items-center justify-center p-4">
	<Card>
		<Form use={[enhance]}>
			<div class="flex flex-col space-y-2">
				<Fieldset legend="Name">
					<Input bind:value={name} name="name" required="required" />
				</Fieldset>
				{#if form?.error}
					<div class="text-red-500" transition:slide>
						{form?.error}
					</div>
				{/if}
			</div>
			<Button type="submit">Add Volume</Button>
		</Form>
	</Card>
</div>
