export async function post({ request }) {
    let url = `${import.meta.env.VITE_REMOTE_URL}/login`;
    let res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(await request.json()),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let { status, headers } = await res;
    let body = await res.text(); 

    let auth = {
        'token': headers.get('authorization')
    }

    return {
        status,
        body: {
            body,
            auth
        }
    }
}