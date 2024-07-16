import { notFound } from 'next/navigation';

let urls = {}; // This should be shared across modules or stored in a database

export default function RedirectPage({ params }) {
    const { id } = params;
    const url = urls[id];

    if (!url) {
        notFound();
    }

    if (typeof window !== 'undefined') {
        window.location.href = url;
    }

    return <p>Redirecting...</p>;
}
