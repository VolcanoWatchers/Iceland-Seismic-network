export default async function handler(req, res) {
  // Using a more reliable, standard endpoint for IMO earthquake data
  const imoUrl = 'https://skjalftalisa.vedur.is/v1/latest.json';

  try {
    const response = await fetch(imoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124'
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
