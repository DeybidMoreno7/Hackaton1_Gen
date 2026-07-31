# Friticos Colombia

Proyecto desarrollado durante el **Hackathon 1** — sitio web de comida colombiana que muestra un catálogo de friticos tradicionales, carrito de compras con persistencia en `localStorage` y secciones informativas sobre la marca y el equipo.

## Descripción

**Friticos Colombia** es una landing page interactiva donde los usuarios pueden:

- Explorar un menú con más de 15 friticos colombianos (empanadas, arepa de huevo, aborrajado, carimañola, etc.)
- Agregar productos al carrito y eliminarlos
- Ver el contador de productos en el navbar
- Navegar entre secciones: Inicio, Menú y Sobre nosotros

## Tecnologías utilizadas

- HTML5
- CSS3 (`stryle.css`)
- JavaScript (Vanilla) — `app.js`, `nav.js`
- Bootstrap 5.3.8
- Font Awesome / Ionicons
- Google Fonts (Lato)

## Planning

Seguimos el avance del proyecto y las tareas del hackathon en Trello:

🔗 **[Tablero de Hackathon en Trello](https://trello.com/b/RvVnpygv/hackathon)**

## Requisitos previos

- [Visual Studio Code](https://code.visualstudio.com/) o [Cursor](https://cursor.com/)
- Extensión **Live Server** de Ritwick Dey

### Instalar Live Server

1. Abre VS Code o Cursor.
2. Ve a la pestaña **Extensiones** (`Ctrl + Shift + X`).
3. Busca **Live Server**.
4. Instala la extensión de **Ritwick Dey**.
5. Reinicia el editor si te lo pide.

## Ejecución con Live Server

1. **Clona o descarga** el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd Hackaton1_Gen
   ```

2. **Abre la carpeta del proyecto** en VS Code o Cursor:
   - Archivo → Abrir carpeta → selecciona `Hackaton1_Gen`

3. **Inicia Live Server** (cualquiera de estas opciones):
   - Clic derecho sobre `index.html` → **Open with Live Server**
   - O botón **Go Live** en la barra inferior del editor
   - O `Alt + L`, luego `Alt + O`

4. El navegador abrirá automáticamente en una URL como:
   ```
   http://127.0.0.1:5500/index.html
   ```

5. Para **detener** el servidor, haz clic de nuevo en **Go Live** en la barra inferior.

> **Nota:** Este proyecto no requiere `npm install` ni servidor backend. Es frontend estático; Live Server es suficiente para desarrollo local.

## Estructura del proyecto

```
Hackaton1_Gen/
├── index.html      # Página principal
├── app.js          # Lógica del menú y carrito
├── nav.js          # Navegación activa al hacer scroll
├── stryle.css      # Estilos personalizados
├── img/            # Imágenes del sitio
└── IMG/            # Fotos del equipo
```

## Integrantes del equipo

| Nombre | Rol |
|--------|-----|
| Walter Montoya Presiga | Desarrollador Full Stack |
| Deybid Santiago Moreno Ruiz | Desarrollador de software Full Stack |
| Angelica Garcia | Desarrolladora Junior Full-Stack |
| Nataly Barahona Muñoz | Desarrolladora Full Stack |
| Sneyder Rodriguez Delgadillo | Desarrollador Full Stack |

## Contacto

- **Email:** friticos.colombia@gmail.com
- **Teléfono:** +57 (322) 822 8498
- **Ubicación:** Calle 68 B Sur # 63 - 55

---

© 2026 Friticos Colombia — Hackathon 1
