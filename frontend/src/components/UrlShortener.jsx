import React, { useState } from 'react'

const UrlShortener = () => {

    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSetUrl = () => {

    }

    const handleSubmit = async () => {
        const axios = await axios.post('/')
    }

    return (
        <div className="w-full max-w-lg bg-[url('/form-bg.jpg')] bg-cover bg-no-repeat rounded-xl shadow-lg">

            <div className='bg-white/45 rounded-xl p-8 '>
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-zinc-900">URL Shortener</h1>
                    <p className="text-sm text-zinc-500 mt-1">Paste your long link to create a shorter version</p>
                </div>

                {/* Input & Button Form Layout */}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="url"
                            placeholder="https://example.com/longUrl..."
                            value={url}
                            onInput={(e) => setUrl(e.target.value)}
                            className="flex-1 px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 text-sm placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-600 focus:ring-2 focus:ring-zinc-100 transition"
                        />
                        <button
                            type="button"
                            className="px-6 py-3 bg-black text-white font-medium text-sm rounded-xl transition cursor-pointer"
                        >
                            Shorten
                        </button>
                    </div>
                </form>

                {/* Shortened URL Output Box */}
                <div className="mt-6 pt-6 border-t border-black">
                    <p className="text-xs font-semibold text-zinc-800 uppercase tracking-wider mb-2">
                        Shortened Link
                    </p>
                    <div className="flex items-center justify-between gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                        <span className="text-sm font-medium text-black">
                            https://short.link/x8k2p
                        </span>
                        <button
                            type="button"
                            className="px-3 py-1.5 bg-white text-black hover:bg-zinc-100 font-medium text-xs rounded-lg border border-zinc-200 transition shrink-0 cursor-pointer"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UrlShortener