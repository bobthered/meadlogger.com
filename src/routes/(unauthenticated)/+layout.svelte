<script lang="ts">
</script>

<div class="min-h-[100dvh] flex lg:grid lg:grid-cols-2">
	<div class="hidden lg:block relative overflow-hidden">
		<img
			alt="Honey"
			class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full hue-rotate-[9deg]"
			src="/art-rachen-Asj5DFw8UAw-unsplash.jpg"
		/>
	</div>
	<div class="min-h-[100dvh] flex-grow flex items-center justify-center p-8">
		<slot />
	</div>
</div>
