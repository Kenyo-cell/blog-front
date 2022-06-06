<script>
    export let html = 'There\'s nothing to do';
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
</script>

<footer class="flex flex-col justify-center items-center p-6 relative bottom-0">
    <div class="flex w-full">
        <div class="absolute left-4 translate-y-[15%]">
            <button class="border-solid border-indigo-900 border-2 rounded p-2 font-mono hover:bg-indigo-800 hover:text-white"
            on:click="{scrollToTop}">
                Вверх!
            </button>
        </div>
        <div class="flex-auto text-center py-4">
            {@html html}
        </div>
    </div>
</footer>