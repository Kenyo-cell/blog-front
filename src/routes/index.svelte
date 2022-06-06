<script context="module">
	import Post from '$lib/post/Post.svelte'
	import { auth_token } from '../stores'
	export let posts = []; 

	export const prerender = true;
	export async function load({fetch}) {
		let url = `${import.meta.env.VITE_LOCAL_URL}/api/posts`;
		let token = '';

		auth_token.subscribe(t =>  token = t);

		let res = await fetch(url, {
			method: 'GET',
			// headers: {
			// 	'Authorization': 'Bearer ' + token
			// }
		});
		posts = await res.json();

		return {
			status: 200,
			props: posts
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#each posts as post}
	<div class="">
		<Post title={post.title} content={post.content} id={post.id} tags={post.tags} />
	</div>
{/each}
