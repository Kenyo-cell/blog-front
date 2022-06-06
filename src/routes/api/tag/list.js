export async function get() {
    const url = `${import.meta.env.VITE_REMOTE_URL}/tag`;
    let res = await fetch(url, { method: 'GET'});

    let { status } = res;
    let tags = await res.json();

    return {
        status,
        body: tags
    }
}