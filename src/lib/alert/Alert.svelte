<script>
    const styles = {
        "info": "bg-indigo-700",
        "error": "bg-red-800",
        "success": "bg-green-700" 
    };
    
    export let text = "some";
    export let style = "info"

	let isOpen = false;
	
	export function openModal(modalText, modalStyle) {
        text = modalText;
        style = modalStyle
		isOpen = true;
	}
	
	export function reset() {
		name = '';
		email = '';
	}
	
	export function closeModal() {
		isOpen = false;
		reset();
	}
</script>

{#if isOpen}
	<div class="m-0 absolute bottom-2 left-[75%] p-0 w-1/5 rounded flex overflow-hidden flex-col justify-center h-1/5
        border-slate-900 border-2 bg-slate-200">
		<div class="w-100 h-1/5 {styles[style]} baseline-1/12 grid jsutify-items-end">
            <button class="text-slate-200" on:click="{closeModal}">Закрыть</button>
        </div>
        <div class="h-4/5 text-center overflow-scroll">{text}</div>
    </div>
{/if}
