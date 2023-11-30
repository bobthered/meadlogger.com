<script lang="ts">
	import Route from '../sign-in/+page.svelte';

	// props (external)
	export let form;
</script>

<Route
	buttonPrimaryText="Register"
	buttonSecondaryHref="/sign-in"
	buttonSecondaryText="Sign In"
	{form}
/>
