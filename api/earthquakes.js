export default async function handler(req, res) {
  // Using the primary IMO data source
  const imoUrl = 'https://api.vedur.is/en/earthquakes/is/latest';

  try {
    const response = await fetch(imoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Compatible; VolcanoWatchers/1.0)'
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
