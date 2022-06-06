export async function get({request}) {
    const url = `${import.meta.env.VITE_REMOTE_URL}/post`;
    let res = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': request.headers.get('Authorization')
        }
    });

    let status = await res.status;
    let body = await res.json();

    return {
        status,
        body
    }
        
}