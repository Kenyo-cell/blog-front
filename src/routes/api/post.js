import { auth_token } from "../../stores";

export async function post({request}) {
    let url = `${import.meta.env.VITE_REMOTE_URL}/post`;
    let token = '';
    auth_token.subscribe(s => token = s);
    console.log('0');
    let body = request.json();
    console.log('1');
    let res = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        body
    });

    let { status, headers } = await res;
    let post = await res.json();

    return {
        headers,
        status,
        body: {
            redirectingPath: '/post' + post.id
        }
    }
}