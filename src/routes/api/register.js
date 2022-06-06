export async function post({ request }) {
    let url = `${import.meta.env.VITE_REMOTE_URL}/register`;
    
    let res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(await request.json()),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let { status, headers } = await res;
    let body = await res.json(); 
    
    return {
        status,
        headers,
        body
    }
}