export async function get({params}) {
    let id = params.id;
    const url = `${import.meta.env.VITE_REMOTE_URL}/post/${id}`;

    let res = await fetch(url, { method: 'GET' });
    let { status } = await res;
    let post = await res.json();

    return {
        status,
        body: post
    }
}