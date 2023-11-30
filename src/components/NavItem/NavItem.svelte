<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/stores';
	import { A, Icon } from '$components';
	import { Plus } from '$icons';
	import { theme } from '$stores';

	// props (external)
	export let close;
	export let href = '';
	export let isOpen = false;
	export let isShown = true;
	export let isShownLG = true;
	export let label = '';
	export let src = Plus;

	$: classes = twMerge(
		$theme.button,
		'hover:text-violet-900 focus:text-violet-900 py-2 flex flex-col rounded-none flex-grow text-center items-center lg:flex-grow-0 lg:bg-transparent lg:items-start lg:text-current normal-case font-normal',
		$page.url.pathname === href
			? 'lg:bg-violet-500 lg:text-violet-900 lg:hover:bg-violet-500 lg:focus:bg-violet-500 lg:cursor-default'
			: undefined,
		isShown ? undefined : 'hidden',
		isShownLG ? 'lg:block' : 'lg:hidden'
	);
	$: tabindex = !isOpen || $page.url.pathname === href ? '-1' : undefined;
</script>

<A class={classes} {href} on:click={() => close()} {tabindex}>
	<div class="hidden lg:flex">{label}</div>
	<Icon class="lg:hidden" {src} />
</A>
