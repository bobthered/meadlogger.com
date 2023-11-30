<script lang="ts">
	import { DateTime } from 'luxon';
	import { enhance } from '$app/forms';
	import { Button, Card, Fieldset, Form, Input, Select } from '$components';

	// props (external)
	export let data;

	// props (internal)
	let batchSize = '';
	let batchSizeUOM = '';
	let datePitched = DateTime.now().toFormat('yyyy-MM-dd');

	// props (dynamic)
	$: if (data?.volumes.length > 0 && batchSizeUOM === '')
		batchSizeUOM = data.volumes.find(({ name }) => name === 'Gallon(s)').id;
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
				<Fieldset legend="Batch Size">
					<div class="flex space-x-2">
						<Input
							bind:value={batchSize}
							class="w-full"
							name="batchSize"
							required="required"
							inputmode="numeric"
						/>
						<Select bind:value={batchSizeUOM} name="batchSizeUOM" options={volumeUOMOptions} />
					</div>
				</Fieldset>
			</div>
			<Button type="submit">Add Ingredients</Button>
		</Form>
	</Card>
</div>
