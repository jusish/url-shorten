import { useState } from 'react';

const ShortenerForm = ({ onSubmit }) => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(url);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL"
                className="p-2 border rounded"
            />
            <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
                Shorten URL
            </button>
        </form>
    );
};

export default ShortenerForm;
