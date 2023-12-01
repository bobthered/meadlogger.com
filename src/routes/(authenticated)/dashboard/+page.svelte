<script lang="ts">
	import { DateTime } from 'luxon';
	import { twMerge } from 'tailwind-merge';
	import { enhance } from '$app/forms';
	import { A, Button, Card, Form, Icon, Input, Table, Tbody, Td, Th, Thead, Tr } from '$components';
	import { toast } from '$components/Toast';
	import { Pencil, Trash } from '$icons';
	import { theme } from '$stores';

	// props (external)
	export let data;
	export let form;

	$: if (form?.success) toast('Deleted Batch');
</script>

<div class="flex flex-col flex-grow p-4">
	<Card class="overflow-auto p-0 lg:self-start">
		<Table>
			<Thead>
				<Th></Th>
				<Th>Type</Th>
				<Th>Name</Th>
				<Th>Date (Pitched)</Th>
				<Th>Size</Th>
			</Thead>
			<Tbody>
				{#each data.batches as { datePitched, id, name, size, sizeUOM, type }}
					<Tr>
						<Td class="py-0 px-0">
							<div class="flex space-x-2">
								<A
									class={twMerge(
										$theme.button,
										$theme.buttonIcon,
										$theme.buttonXS,
										'dark:hover:text-violet-900'
									)}
									href="/batch/{id}"
								>
									<Icon src={Pencil} />
								</A>
								<Form action="?/delete" use={[enhance]}>
									<Button
										class={twMerge($theme.buttonIcon, $theme.buttonXS, $theme.buttonRed)}
										type="submit"
									>
										<Icon src={Trash} />
									</Button>
									<Input bind:value={id} class="hidden" name="id" type="hidden" />
								</Form>
							</div>
						</Td>
						<Td>{type.name}</Td>
						<Td>{name}</Td>
						<Td>{DateTime.fromFormat(datePitched, 'yyyy-MM-dd').toFormat('M/d/yyyy')}</Td>
						<Td>{size} {sizeUOM.name}</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Card>
</div>
