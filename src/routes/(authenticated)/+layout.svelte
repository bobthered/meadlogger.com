<script lang="ts">
	import { Header } from '$components';

	// props (external)
	export let data;
</script>

<div
	class="flex min-h-[100svh] lg:h-[100lvh] max-h-[100svh] lg:h-[100lvh] flex-col overflow-hidden lg:flex-row-reverse"
>
	<div
		class="flex flex-col flex-grow overflow-auto pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
	>
		<slot />
	</div>
	<Header {data} />
</div>
