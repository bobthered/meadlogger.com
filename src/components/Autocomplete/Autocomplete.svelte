<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import { getEvents } from '$actions';
	import { Button, Card, Input } from '$components';
	import { theme } from '$stores';
	import { subtleMenu } from '$transitions';

	// props (external)
	export let options: string[] = [];
	export let style: string | undefined = undefined;
	export let use: any[] = [];
	export let value: string = '';

	// props (internal)
	const events = getEvents(current_component);

	// props (dynamic)
	$: optionsFiltered = [...options].filter(
		(option) =>
			new RegExp(value.toLowerCase(), 'gi').test(option) &&
			value.replace(/\s/g, '') !== '' &&
			value !== option
	);
</script>

<div class={twMerge('relative', $$props.class)}>
	<Input {...$$restProps} bind:value {style} use={[events, ...use]} />
	{#if optionsFiltered.length > 0}
		<div class="absolute max-h-[15rem] overflow-y-auto origin-top-left" transition:subtleMenu>
			<Card class="px-0">
				{#each optionsFiltered as option}
					<Button
						class={twMerge($theme.buttonTransparent, 'rounded-none normal-case')}
						on:click={() => (value = option)}
					>
						{option}
					</Button>
				{/each}
			</Card>
		</div>
	{/if}
</div>
