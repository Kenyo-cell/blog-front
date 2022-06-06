<script>
    import { goto } from '$app/navigation';
    import Alert from '$lib/alert/Alert.svelte'
    
    let login = "";
    let pass = "";
    let country = "Россия";
    const register = async () => {
        let user = {
            username: login,
            password: pass,
            country
        }
        
        let res = await fetch('http://127.0.0.1:3000/api/register', {
            method: 'POST',
            body: JSON.stringify(user)
        });
        let { status, headers } = await res;
        let body = await res.json();
        console.log(status, headers, body);

        if (status / 100 === 2) {
            goto("/login");
        } else if (status / 100 === 4) {
            dialog.openModal(body.description, "error");
        } else if (status / 100 === 5) {
            dialog.openModal(body.description, "error");
        }
    }
</script>

<div class="flex items-center justify-center border-2 border-indigo-500 hover:border-indigo-900 rounded py-2 flex-col">
    <label class="flex flex-col m-4 mb-0">
        <span>Логин</span>
        <input type="text" placeholder="Логин" class="pl-2 rounded" bind:value="{login}">
    </label>
    <label class="flex flex-col m-4">
        <span>Пароль</span>
        <input type="password" placeholder="Пароль" class="pl-2 rounded" bind:value="{pass}">
    </label>
    <label class="flex flex-col m-4">
        <span>Страна</span>
        <input type="text" class="pl-2 rounded" bind:value="{country}">
    </label>
    <button class="border-2 rounded border-indigo-500 p-2 hover:border-indigo-900 hover:bg-indigo-700 hover:text-slate-200"
    on:click="{register}">
        Зарегистрироваться!
    </button>

    <Alert open={true} />
</div>