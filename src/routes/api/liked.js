export async function get({request}) {
    const url = `${import.meta.env.VITE_REMOTE_URL}/user/liked`;
    let res = await fetch(url, {
        method: 'GET',
        headers: request.headers
    });

    let { status } = await res;
    let body = await res.json();

    return {
        status,
        body
    };
}