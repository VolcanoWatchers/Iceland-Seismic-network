export default async function handler(req, res) {
  // This is the URL for the IMO earthquake data
  const imoUrl = 'https://api.vedur.is/en/earthquakes/is/latest';

  try {
    const response = await fetch(imoUrl);
    const data = await response.json();
    
    // Send the data back to your map
    res.status(200).json(data);
  } catch (error) {
    // If there is an error, send back a simple message
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
