import { nanoid } from 'nanoid';

let urls = {};

export async function POST(request) {
    const { url } = await request.json();
    const id = nanoid(7);
    urls[id] = url;
    return new Response(JSON.stringify({ id }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
