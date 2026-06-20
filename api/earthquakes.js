export default async function handler(req, res) {
  const url = 'https://data.earthquakes.is/latest.json';
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`IMO returned status: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // Send back the actual error message so you can see it in your browser
    res.status(500).json({ error: error.message });
  }
}
