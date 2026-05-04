export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, NOMBRE, DOSHA } = req.body;

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // Aquí Vercel leerá la API KEY oculta de forma segura
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: email,
        attributes: { NOMBRE, DOSHA, ORIGEN: 'test_ayurveda' },
        listIds: [2],
        updateEnabled: true
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Hubo un error al conectar con Brevo' });
  }
}
