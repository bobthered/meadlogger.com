<script lang="ts">
	import { Nav } from 'sveltewind/components';
	import { twMerge } from 'tailwind-merge';
	import { Button, NavGroup, NavItem, Overlay } from '$components';
	import { ArrowLeftOnRectangle, Home, Plus, type IconSource, Cog6Tooth } from '$icons';
	import { theme } from '$stores';

	// types
	type NavItem = {
		children?: NavItem[];
		href?: string;
		isAdminRequired?: boolean;
		isShown?: boolean;
		isShownLg?: boolean;
		label: string;
		src?: IconSource;
	};
	type Nav = NavItem[];

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
	const nav: Nav = [
		{
			href: '/dashboard',
			isShown: true,
			isShownLg: true,
			label: 'Dashboard',
			src: Home
		},
		{
			label: 'Account',
			children: [
				{
					href: '/account/change-password',
					isShown: false,
					isShownLg: true,
					label: 'Change Password',
					src: Cog6Tooth
				}
			]
		},
		{
			label: 'Batch',
			children: [
				{
					href: '/batch/add',
					isShown: true,
					isShownLg: true,
					label: 'Add',
					src: Plus
				},
				{
					label: 'Type',
					children: [
						{
							href: '/batch/type/add',
							isAdminRequired: true,
							isShown: false,
							isShownLg: true,
							label: 'Add',
							src: Plus
						}
					]
				}
			]
		},
		{
			label: 'Volume',
			children: [
				{
					href: '/volume/add',
					isAdminRequired: true,
					isShown: false,
					isShownLg: true,
					label: 'Add',
					src: Plus
				}
			]
		},
		{
			label: 'Yeast',
			children: [
				{
					href: '/yeast/add',
					isAdminRequired: true,
					isShown: false,
					isShownLg: true,
					label: 'Add',
					src: Plus
				}
			]
		}
	];
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
		{#each nav as navItem}
			{#if (navItem?.isAdminRequired && data.user.isAdmin) || navItem?.isAdminRequired === false || navItem?.isAdminRequired === undefined}
				{#if navItem?.children !== undefined}
					<NavGroup {...navItem} {close} user={data.user} />
				{/if}
				{#if navItem?.children === undefined}
					<NavItem {...navItem} {close} user={data.user} />
				{/if}
			{/if}
		{/each}
	</div>
	<!-- {#each nav as { href, isShown, isShownLg, label, src }}
		<NavItem class="lg:hidden" {close} {href} {isOpen} {isShown} {isShownLg} {label} {src} />
	{/each} -->
	<NavItem
		{close}
		href="/sign-out"
		{isOpen}
		isShown={true}
		isShownLg={true}
		label="Sign Out"
		src={ArrowLeftOnRectangle}
	/>
</Nav>
