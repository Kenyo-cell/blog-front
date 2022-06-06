<script context="module">
    import { logined, auth_token } from '../../stores'
    import Post from '$lib/post/Post.svelte'

    export async function load({fetch}) {
        let authenticated = false;
        logined.subscribe(v => authenticated = v);
        if (!authenticated) {
            logined.set(false);
            auth_token.set(null);
            return {
                status: 300,
                redirect: '/login'
            }
        }
        const url = `${import.meta.env.VITE_LOCAL_URL}/api/liked`;
        let token = null;

        auth_token.subscribe(v => token = v);
        
        const headers = new Headers({ 'Authorization': `Bearer ${token}` });

        let res = await fetch (url, {
            method: 'GET',
            headers
        });

        let { status } = await res;

        if (status === 401) {
            logined.set(false);
            auth_token.set(null);
            return {
                status: 300,
                redirect: '/login'
            }
        }

        let body = await res.json();
        
        return {
            status,
            props: {
                posts: body
            }
        }
    }
</script>

<script>
    export let posts = [];
</script>

{#each posts as post}
	<div class="">
		<Post title={post.title} content={post.content} id={post.id} />
	</div>
{/each}
