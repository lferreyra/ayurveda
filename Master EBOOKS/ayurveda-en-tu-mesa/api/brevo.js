export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, NOMBRE, DOSHA } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'El email es obligatorio' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY no configurada en variables de entorno');
    // No devolvemos 500 con detalle para no filtrar info, pero sí el error
    return res.status(500).json({ error: 'Error de configuración del servidor' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          NOMBRE: NOMBRE || "",
          DOSHA: DOSHA || "",
          ORIGEN: 'test_ayurveda'
        },
        listIds: [3], // Asegúrate de que esta lista exista en tu cuenta
        updateEnabled: true
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error de Brevo:', data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Excepción en Brevo handler:', error);
    return res.status(500).json({ error: 'Ocurrió un error al procesar el lead' });
  }
}
