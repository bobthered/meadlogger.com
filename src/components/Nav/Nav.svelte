<script lang="ts">
	import { Nav } from 'sveltewind/components';
	import { twMerge } from 'tailwind-merge';
	import { Button, NavItem, Overlay } from '$components';
	import { ArrowLeftOnRectangle, Home, Plus } from '$icons';
	import { theme } from '$stores';

	// props (external)
	export let close = () => (isOpen = false);
	export let data;
	export let isOpen = false;

	// export let open = () => (isOpen = true);
	export let toggle = () => (isOpen = !isOpen);

	// props (internal)
	const menuButtonClasses = [
		{
			true: 'rotate-[45deg]',
			false: 'mt-[-.25rem]'
		},
		{
			true: 'rotate-[-45deg]',
			false: 'mt-[.25rem]'
		}
	];
	const navsCommon = [
		{ href: '/dashboard', isShown: true, isShownLG: true, label: 'Dashboard', src: Home },
		{ href: '/add/batch', isShown: true, isShownLG: true, label: 'Add Batch', src: Plus }
	];
	const navsAdmin = [
		{ href: '/add/volume', isShown: false, isShownLG: true, label: 'Add Volume', src: Plus },
		{ href: '/add/yeast', isShown: false, isShownLG: true, label: 'Add Yeast', src: Plus }
	];
	$: navs = [...navsCommon, ...(data?.user?.isAdmin ? navsAdmin : [])];
</script>

<Button
	class={twMerge($theme.buttonTransparent, $theme.buttonIcon, 'z-[2] hidden lg:flex relative')}
	on:click={toggle}
>
	{#each menuButtonClasses as classes}
		<div
			class="absolute top-1/2 left-1/2 w-4 h-[2px] bg-current -translate-x-1/2 -translate-y-1/2 rounded-full transition duration-200 {isOpen
				? classes.true
				: classes.false}"
		/>
	{/each}
</Button>
<Overlay
	class={twMerge(
		'backdrop-blur-sm hidden lg:block',
		isOpen ? 'opacity-100 pointer-events-auto cursor-pointer' : 'opacity-0 pointer-events-none'
	)}
	on:click={toggle}
/>
<Nav class={twMerge(isOpen ? 'lg:translate-x-0' : 'lg:-translate-x-full')}>
	<div class="hidden lg:flex lg:flex-col">
		{#each navs as { href, isShown, isShownLG, label, src }}
			<NavItem {close} {href} {isOpen} {isShown} {isShownLG} {label} {src} />
		{/each}
	</div>
	{#each navs as { href, isShown, isShownLG, label, src }}
		<NavItem class="lg:hidden" {close} {href} {isOpen} {isShown} {isShownLG} {label} {src} />
	{/each}
	<NavItem
		{close}
		href="/sign-out"
		{isOpen}
		isShown={true}
		isShownLG={true}
		label="Sign Out"
		src={ArrowLeftOnRectangle}
	/>
</Nav>
