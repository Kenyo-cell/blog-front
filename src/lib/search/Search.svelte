<script>
    import search from './search.svg'
    let searchQuery = '';
</script>

<div class="w-2/3 flex items-center justify-center text-black hover:no-underline">
    <input bind:value="{searchQuery}" placeholder="Поиск..." class="w-4/5 rounded pl-2">
    <button class="w-1/6 flex items-center justify-center"><img src="{search}" alt="search"  /></button>
</div>