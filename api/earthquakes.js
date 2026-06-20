export default async function handler(req, res) {
  const imoUrl = 'https://api.vedur.is/en/earthquakes/is/latest';

  try {
    const response = await fetch(imoUrl);
    const data = await response.json();
    
    // Simply pass the IMO data directly to your map
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
