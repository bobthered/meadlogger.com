<script lang="ts">
	// imports
	import { current_component } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import { getEvents, use as useAction } from '$actions';
	import { Button, Icon, NavItem } from '$components';
	import { ChevronRight } from '$icons';
	import { theme } from '$stores';
	import { slide } from '$transitions';

	// props (external)
	export let children = [];
	export let close;
	export let label = '';
	export let style: string | undefined = undefined;
	export let use: any[] = [];
	export let user;

	// props (internal)
	const events = getEvents(current_component);
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);

	// props (dynamic)
	$: classes = twMerge('py-2', $theme.navGroup, $$props.class);
	$: titleClasses = twMerge(
		$theme.button,
		'justify-between space-x-4 flex-row w-full shadow-[inset_0_0_0_rgba(0,0,0,0)] hover:text-violet-900 focus:text-violet-900 py-2 flex rounded-none flex-grow text-center items-center lg:flex-grow-0 lg:bg-transparent lg:text-current normal-case font-normal',
		$$props.class
	);
</script>

<div class={classes} {style} use:useAction={[events, ...use]}>
	<Button class={titleClasses} on:click={toggle}>
		<div>{label}</div>
		<Icon
			class="w-[1em] h-[1em] transition duration-200 {isOpen ? 'rotate-90' : 'rotate-0'}"
			src={ChevronRight}
		/>
	</Button>
	<slot>
		{#if isOpen}
			<div class="flex flex-col pl-2" transition:slide>
				{#each children as navItem}
					{#if (navItem?.isAdminRequired && user.isAdmin) || navItem?.isAdminRequired === false || navItem?.isAdminRequired === undefined}
						{#if navItem?.children !== undefined}
							<svelte:self {...navItem} {close} {user} />
						{/if}
						{#if navItem?.children === undefined}
							<NavItem {...navItem} {close} {user} />
						{/if}
					{/if}
				{/each}
			</div>
		{/if}
	</slot>
</div>
