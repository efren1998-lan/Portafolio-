# 📱 Portafolio Profesional - Alexis Hernández

Un portafolio moderno, profesional y completamente animado construido con React, Vite y TypeScript.

## 🚀 Características

- ✨ Animaciones suaves y profesionales
- 📱 Totalmente responsive
- 🎨 Diseño moderno con gradientes y efectos visuales
- ⚡ Cargado rápido con Vite
- 🎯 Secciones: Hero, Sobre mí, Proyectos, Habilidades, Contacto
- 🖼️ Soporte para foto de perfil
- 📄 Descarga de CV integrada

## 📋 Instrucciones para Agregar tu Foto y CV

### 1. **Coloca tu foto**
   - Coloca tu imagen de perfil en: `public/assets/photo.jpg`
   - Formatos soportados: JPG, PNG, WebP
   - Tamaño recomendado: 250x250px o mayor
   - La imagen aparecerá automáticamente en la sección Hero

### 2. **Coloca tu CV**
   - Coloca tu CV en PDF en: `public/assets/CV.pdf`
   - El botón "Descargar CV" en el Hero descargará automáticamente tu archivo

### 3. **Actualiza la Configuración**
   Edita el archivo `src/config.ts` con tu información personal:

   ```typescript
   export const PORTFOLIO_CONFIG = {
     name: 'Tu Nombre Completo',
     title: 'Tu Puesto/Especialidad',
     description: 'Tu descripción profesional',
     
     contact: {
       email: 'tu-email@example.com',
       phone: '+34 XXX XXX XXX',
       location: 'Tu Ciudad, País',
     },
     
     social: {
       github: 'https://github.com/tuusuario',
       linkedin: 'https://linkedin.com/in/tuusuario',
       twitter: 'https://twitter.com/tuusuario',
     },
     
     stats: {
       experience: '2+',    // Años de experiencia
       projects: '15+',     // Número de proyectos
       clients: '10+',      // Clientes satisfechos
     },

     about: {
       summary: 'Tu resumen corto',
       fullBio: 'Tu biografía completa',
     },
   }
   ```

## 📁 Estructura de Carpetas

```
portafolio-alexis/
├── public/
│   └── assets/
│       ├── photo.jpg      ← Tu foto de perfil
│       └── CV.pdf         ← Tu CV
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── config.ts          ← Edita esto con tu información
│   └── index.css
├── index.html
├── package.json
└── vite.config.ts
```

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🎨 Personalización Adicional

### Cambiar Colores
Edita las variables CSS en `src/App.css`:

```css
:root {
  --primary-color: #00d4ff;      /* Color principal (cyan) */
  --secondary-color: #0099ff;    /* Color secundario (azul) */
  --accent-color: #ff006e;       /* Color de acento (rosa) */
  --dark-bg: #0a0e27;            /* Fondo oscuro */
  --text-primary: #ffffff;       /* Texto principal */
}
```

### Agregar/Editar Proyectos
Modifica el array `projects` en `src/components/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Nombre del Proyecto',
    description: 'Descripción del proyecto',
    image: '🎨',
    tags: ['React', 'Node.js'],
    link: 'https://link-del-proyecto.com',
    github: 'https://github.com/tuusuario/proyecto',
  },
  // ... más proyectos
]
```

### Agregar/Editar Habilidades
Modifica el array `skills` en `src/components/Skills.tsx`:

```typescript
const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', ...],
  },
  // ... más categorías
]
```

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Sube la carpeta 'dist' a tu repositorio
```

### Netlify
```bash
npm run build
# Carga la carpeta 'dist' en Netlify
```

## 📄 Licencia

Este proyecto es tuyo para personalizar y usar libremente.

## 💡 Consejos

1. **Foto de Perfil**: Usa una foto clara y profesional
2. **CV**: Mantén tu CV actualizado y en formato PDF
3. **Proyectos**: Incluye enlaces reales a tus trabajos en GitHub o demos en vivo
4. **Enlaces**: Asegúrate de que todos los enlaces a redes sociales sean correctos
5. **Contenido**: Personaliza todo el contenido de texto para que sea único

---

¿Preguntas? Revisa el código fuente o personaliza según tus necesidades. 🎉
