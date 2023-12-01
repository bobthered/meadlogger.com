<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, Card, Fieldset, Form, Input, Select } from '$components';
	import { toast } from '$components/Toast';
	import { slide } from '$transitions';

	// props (external)
	export let form;

	// props (internal)
	let currentPassword = '';
	let newPassword = '';
	let newPasswordConfirm = '';

	$: if (form?.success) toast('Password Successfully Changed');
</script>

<div class="flex flex-col flex-grow p-4 items-center justify-center">
	<Card>
		<Form use={[enhance]}>
			<div class="flex flex-col space-y-2">
				<Fieldset legend="Current Password">
					<Input
						bind:value={currentPassword}
						name="currentPassword"
						required="required"
						type="password"
					/>
				</Fieldset>
				<Fieldset legend="New Password">
					<Input bind:value={newPassword} name="newPassword" required="required" type="password" />
				</Fieldset>
				<Fieldset legend="New Password (Confirm)">
					<Input
						bind:value={newPasswordConfirm}
						name="newPasswordConfirm"
						required="required"
						type="password"
					/>
				</Fieldset>
				{#if form?.error}
					<div class="text-red-500" transition:slide>{form?.error}</div>
				{/if}
			</div>
			<Button type="submit">Change Password</Button>
		</Form>
	</Card>
</div>
