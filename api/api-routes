export default async function handler(req, res) {
  // Using the public earthquake feed URL
  const imoUrl = 'https://skjalftalisa.vedur.is/v1/latest.json';

  try {
    const response = await fetch(imoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'https://www.vedur.is/'
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
