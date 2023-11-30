<script lang="ts">
	import { Header } from '$components';

	// props (external)
	export let data;
</script>

<div class="flex min-h-[100dvh] max-h-[100dvh] flex-col overflow-hidden lg:flex-row-reverse">
	<div class="flex flex-col flex-grow overflow-auto">
		<slot />
	</div>
	<Header {data} />
</div>
