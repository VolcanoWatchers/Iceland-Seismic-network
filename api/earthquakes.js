export default async function handler(req, res) {
  const url = 'https://data.earthquakes.is/latest.json';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // These headers make your request look like it's coming from a normal Chrome browser
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.google.com/', // Many servers check this to ensure you didn't just 'jump' from nowhere
        'Connection': 'keep-alive'
      }
    });

    if (!response.ok) {
      throw new Error(`IMO returned status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
