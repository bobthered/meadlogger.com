<script lang="ts">
	import { Pwa, Title, Toasts } from '$components';
	import '../app.pcss';
</script>

<Pwa />
<Title />
<Toasts />
<div
	class="absolute top-0 left-0 w-[100dvw] h-[100dvh] bg-gradient-to-br z-[-1] from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950"
/>
<slot />
