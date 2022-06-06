<script context="module">
  import { logined, auth_token } from '../../stores'
  export let token = '';

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

    auth_token.subscribe(v => token = v);

    return {
      status: 200,
      props: {
        token
      }
    }
  }
</script>

<script>
  import { onMount } from 'svelte';
  import { Editor } from 'bytemd'
  import { writable } from 'svelte/store'
  import 'bytemd/dist/index.css'
  import { goto } from '$app/navigation'
  import Tag from '$lib/tags/Tag.svelte'
  
  

  let placeholder = "Начните вводить текст...";
  let value = '';
  let title = '';
  let selected = null;
  let tags = [];
  let postTags = [];

  onMount(async () => {
    const url = `${import.meta.env.VITE_LOCAL_URL}/api/tag/list`;

    let res = await fetch(url, {
      method: 'GET'
    });

    tags = await res.json();
  })

  function handleChange(e) {
    value = e.detail.value;
  }

  const addTag = () => {
    let tag = tags.filter(value => value.label == selected)[0];
    if (!postTags.includes(tag)) postTags = [...postTags, tag];
    console.log(postTags);
  }

  const writePost = async () => {
    const url = `${import.meta.env.VITE_LOCAL_URL}/api/post/create`
    let headers = new Headers({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    let tags = postTags.map(v => {
      delete v.posts;
      return v
    });
    console.log(tags);
    let res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        post: {
        title,
        content: value
      }, tags
      })
    });
    
    let body = await res.json();
    if (res.status / 100 === 2) {
      goto(body.redirectingPath);
    }
  }
 
</script>

<div>
  <select bind:value="{selected}" class="border-solid border-slate-900 rounded border-2 min-w-[25%]">
    {#each tags as tag }
      <option class="bg-[#ff00ff]">{tag.label}</option>
    {/each}
  </select>
  <button on:click="{addTag}">Добавить</button>
</div>

<div class="my-2 wd-4/5">
    <label>
        <span class="block font-bold text-xl font-mono">Заголовок Поста</span>
        <input id="title"
            class="rounded w-full pl-2 font-mono"
            type="text"
            placeholder="Лучший Заголовок"
            bind:value="{title}">
    </label>
</div>

<div class="h-4/5">
  <Editor {value} {placeholder} previewDebounce=100 on:change={handleChange} editable />
</div>
<div class="my-2">
  {#each postTags as tag }
    <Tag {tag} />
  {/each}
</div>
<div class="flex justify-self-center wd-4/5 my-2">
  <button class='rounded bg-indigo-300 flex justify-center p-2 w-full' on:click="{writePost}">Создать</button>
</div>

<style>
  :global(.bytemd) {
    height: 60vh;
  }
</style>