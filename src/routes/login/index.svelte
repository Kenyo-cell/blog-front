<script>
    import { goto } from '$app/navigation';
    import Alert from '$lib/alert/Alert.svelte'
    import { logined, auth_token } from '../../stores'

    let login = "";
    let dialog;
    let pass = "";
    const dologin = async () => {
        let url = `${import.meta.env.VITE_LOCAL_URL}/api/login`
        let user = {
            username: login,
            password: pass
        }
        
        let content = JSON.stringify(user);
        let res = await fetch(url, {
            method: 'POST',
            body: content
        });
        
        let { status } = await res;
        let body = await res.json();

        if (status / 100 === 2) {
            auth_token.set(body.auth.token);
            logined.set(true);
            goto("/");
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
    <button class="border-2 rounded border-indigo-500 p-2 hover:border-indigo-900 hover:bg-indigo-700 hover:text-slate-200"
    on:click="{dologin}">
        Войти
    </button>
    <div class="flex flex-col items-center justify-center my-2">
        <span class="p-2">Или</span>
        <a sveltekit:prefetch href="/register" class="underline hover:text-indigo-900" >Зарегистрироваться</a>
    </div>
    <Alert bind:this={dialog} />
</div>