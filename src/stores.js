import { writable } from 'svelte/store';

export const logined = writable(false);
export const auth_token = writable(null);