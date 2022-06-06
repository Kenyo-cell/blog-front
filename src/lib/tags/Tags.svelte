<script>
    import Tag from './Tag.svelte'
    export let tags = [];
</script>

<div class="m-2">
    {#each tags as tag}
        <Tag {tag} />
    {/each}
</div>