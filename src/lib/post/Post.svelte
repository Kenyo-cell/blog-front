<script>
    import SvelteMarkdown from 'svelte-markdown';
    import Tags from '$lib/tags/Tags.svelte'
    import { goto } from '$app/navigation'

    export let postPage = false;
    export let content;
    export let title;
    export let id;
    export let tags = [];

    const gotoPost = async () => {
        goto("/post/" + id);
    }
</script>

<div class="mb-4 border-2 border-solid border-slate-900 rounded flex flex-col justify-center">
    <div class="pl-2 my-2">
        <SvelteMarkdown source={`# ${title}\n${content}`} />
    </div>
    <hr />
    <Tags {tags} />
    {#if !postPage}
    <div class="w-1/2 ml-2">
        <button on:click="{gotoPost}"
        class="border-solid border-indigo-900 border-2 rounded p-2 font-mono hover:bg-indigo-800 hover:text-white mb-2">
            Читать пост
        </button>
    </div>
    {/if}
</div>
