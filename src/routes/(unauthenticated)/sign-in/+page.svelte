<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { enhance } from '$app/forms';
	import { A, Button, Card, Fieldset, Form, H1, Input } from '$components';
	import { theme } from '$stores';
	import { slide } from 'svelte/transition';

	// props (external)
	export let buttonPrimaryText = 'Sign In';
	export let buttonSecondaryHref = '/register';
	export let buttonSecondaryText = 'Register';
	export let form;

	// props (internal)
	let email = '';
	let password = '';
</script>

<Card class="w-full max-w-[375px]">
	<Form use={[enhance]}>
		<div class="flex flex-col items-center space-y-4 mx-auto">
			<img alt="Mead Logger" class="w-16 h-16" src="/icons/icon.svg" />
			<H1 class="text-violet-500 font-logo font-light text-[2.5rem] leading-[2.5rem] uppercase">
				Mead Logger
			</H1>
		</div>
		<div class="flex flex-col space-y-2">
			<Fieldset legend="Email">
				<Input bind:email name="email" required="required" type="email" />
			</Fieldset>
			<Fieldset legend="Password">
				<Input bind:password name="password" required="required" type="password" />
			</Fieldset>
			{#if form?.error}
				<div class="text-red-500" transition:slide>{form?.error}</div>
			{/if}
		</div>
		<div class="flex flex-col space-y-2">
			<Button type="submit">{buttonPrimaryText}</Button>
			<!-- <A class={twMerge($theme.button, $theme.buttonSecondary)} href={buttonSecondaryHref}>
				{buttonSecondaryText}
			</A> -->
		</div>
	</Form>
</Card>
