export async function createShortUrl(url) {
  const response = await fetch('/api/url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to shorten URL')
  }

  return response.json()
}