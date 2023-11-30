<script lang="ts">
	import { Header } from 'sveltewind/components';
	import { Nav } from '$components';

	// props (external)
	export let data;

	// props (internal)
	let isOpen;
	let toggle;
</script>

<Header>
	<Nav bind:isOpen bind:toggle {data} />
</Header>
