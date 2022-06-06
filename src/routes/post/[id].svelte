<script context="module">
    import Post from '$lib/post/Post.svelte'
    let post;

    export async function load({params, fetch}) {
        let id = params.id;
        
        const url = `${import.meta.env.VITE_LOCAL_URL}/api/post/${id}`;


        let res = await fetch(url, { method: 'GET' });
        let status = await res.status;
        post = await res.json();

        console.log(status, post);

        return {
            status,
            props: post
        }
    
    }
</script>

<Post title={post.title} content={post.content} id={post.id} tags={post.tags} postPage=true />
