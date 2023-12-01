<script lang="ts">
	import { DateTime } from 'luxon';
	import { enhance } from '$app/forms';
	import { Button, Card, Fieldset, Form, Input, Select } from '$components';

	// props (external)
	export let data;

	// props (internal)
	let datePitched = DateTime.now().toFormat('yyyy-MM-dd');
	let name = '';
	let size = '';
	let sizeUOMid = '';
	let typeId = '';

	// props (dynamic)
	$: if (data?.batchTypes.length > 0 && typeId === '')
		typeId = data.batchTypes.find(({ name }) => name === 'Mead').id;
	$: typeOptions = data?.batchTypes?.map(({ id, name }) => {
		return { label: name, value: id };
	});
	$: if (data?.user && sizeUOMid === '') sizeUOMid = data.user.defaultBatchSizeUOM.id;
	$: volumeUOMOptions = data?.volumes?.map(({ id, name }) => {
		return { label: name, value: id };
	});
</script>

<div class="flex flex-col flex-grow p-4 items-center justify-center">
	<Card>
		<Form use={[enhance]}>
			<div class="flex flex-col space-y-2">
				<Fieldset legend="Date (Pitched)">
					<Input bind:value={datePitched} name="datePitched" required="required" type="date" />
				</Fieldset>
				<Fieldset legend="Name">
					<Input bind:value={name} name="name" required="required" />
				</Fieldset>
				<Fieldset legend="Type">
					<Select bind:value={typeId} name="typeId" options={typeOptions} required="required" />
				</Fieldset>
				<Fieldset legend="Batch Size">
					<div class="flex space-x-2">
						<Input
							bind:value={size}
							class="w-full"
							name="size"
							required="required"
							inputmode="decimal"
						/>
						<Select bind:value={sizeUOMid} name="sizeUOMid" options={volumeUOMOptions} />
					</div>
				</Fieldset>
			</div>
			<Button type="submit">Add Ingredients</Button>
		</Form>
	</Card>
</div>
