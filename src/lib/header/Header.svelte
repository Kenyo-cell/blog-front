<script>
	import { page } from '$app/stores';
	import Logo from '../logo/Logo.svelte'
	import Search from '../search/Search.svelte'
	import { logined } from '../../stores';
</script>

<header class="flex justify-between w-screen">
	<nav class="flex justify-center bg-indigo-500 w-full text-slate-200">
		<ul class="list-none flex flex-row items-center justify-between w-full mr-2 font-bold">
			<li class:active={$page.url.pathname === '/'} class="basis-1/12">
				<a sveltekit:prefetch href="/"><Logo/></a>
			</li>
			<li class:active={$page.url.pathname === '/'} class="basis-1/12">
				<a sveltekit:prefetch href="/">Главная</a>
			</li>
			<li class:active={$page.url.pathname === '/liked'} class="basis-2/12">
				<a sveltekit:prefetch href="/liked">Понравившиеся</a>
			</li>
			<li class="basis-5/12 exclude">
				<Search/>
			</li>
			<li class:active={$page.url.pathname === '/posteditor'} class="basis-2/12">
				<a sveltekit:prefetch href="/posteditor">Создать Пост</a>
			</li>
			{#if $logined}
			<li class:active={$page.url.pathname === '/profile'} class="basis-1/12">
				<a sveltekit:prefetch href="/profile">Профиль</a>
			</li>
			{:else}
			<li class:active={$page.url.pathname === '/login'} class="basis-1/12">
				<a sveltekit:prefetch href="/login">Войти</a>
			</li>
			{/if}
		</ul>
	</nav>
</header>

<style>
	li {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	li:hover :not(.exclude){
		color: #312e81;
		text-decoration: underline;
	}
</style>
