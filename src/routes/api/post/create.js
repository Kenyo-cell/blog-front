export async function post({request}) {
    let url = `${import.meta.env.VITE_REMOTE_URL}/post`;
    let body = await request.json();

    let res = await fetch(url, {
        method: 'POST',
        headers: request.headers,
        body: JSON.stringify(body)
    });

    let { status } = await res;
    console.log(status);
    let post = await res.json();
    console.log(post);
    console.log(post.id);
    let p = '/post/' + post.id;
    console.log(p);

    return {
        status,
        body: {
            redirectingPath: p
        }
    }
}