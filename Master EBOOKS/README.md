# Ayurveda Express - Landing Page

Landing page optimizada para eBook de Ayurveda para bajar de peso, diseñada para personas con poco tiempo.

## 🚀 Despliegue en Vercel

### Opción 1: Desde CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Opción 2: Desde GitHub
1. Sube este repositorio a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa el repositorio
4. Vercel detectará automáticamente la configuración

## 🛒 Uso en Shopify

### Opción 1: Página personalizada
1. Ve a **Online Store > Pages**
2. Crea una nueva página
3. Cambia a vista HTML
4. Copia el contenido de `index.html`

### Opción 2: Sección en tema
1. Ve a **Online Store > Themes > Edit code**
2. Crea una nueva sección `ayurveda-landing.liquid`
3. Copia el contenido del `<style>` y `<body>`
4. Usa la sección en cualquier página

### Opción 3: Dominio personalizado
1. Configura el dominio en Shopify
2. Usa la landing de Vercel como subdominio (ej: `promo.tudominio.com`)

## 📁 Estructura

```
├── index.html      # Landing page principal
├── package.json    # Config para Vercel
├── vercel.json     # Config de routing
└── README.md       # Este archivo
```

## ✨ Características

- ✅ Diseño responsive (mobile-first)
- ✅ Optimizado para conversión
- ✅ FAQ con acordeón interactivo
- ✅ Animaciones CSS suaves
- ✅ Call-to-action estratégicos
- ✅ Prueba social y testimonios
- ✅ Sin dependencias externas (solo fuentes Google)

## 🎨 Personalización

### Colores
Edita las variables CSS en `:root`:
```css
--terracotta: #8B3A2A;    /* Color principal */
--cream: #F8F2E8;         /* Fondo */
--sage: #7D9E82;          /* Acento */
--gold: #C9A96E;          /* Destacados */
```

### Contenido
Modifica directamente en `index.html`:
- Textos de copy
- Precios
- Testimonios
- Preguntas frecuentes

## 📊 Métricas recomendadas

Conecta con:
- Google Analytics
- Facebook Pixel
- Hotjar (mapas de calor)

---

**Nota:** Recuerda actualizar los enlaces de CTA a tu checkout de Shopify.