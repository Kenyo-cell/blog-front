<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>
	<Header />
	<main class="flex-1 flex-col p-4 w-full max-w-[80%] m-auto mt-4">
		<slot />
	</main>
	<hr class="border-solid border-2 border-slate-900" />
	<Footer  />

