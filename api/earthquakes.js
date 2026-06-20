export default async function handler(req, res) {
  // We add a 'User-Agent' to tell the IMO this is a standard request
  const imoUrl = 'https://api.vedur.is/en/earthquakes/is/latest';

  try {
    const response = await fetch(imoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`IMO responded with status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // This will now show us the actual error if it still fails
    res.status(500).json({ error: error.message });
  }
}
