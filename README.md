# Kli-book

**Kli-book** es la web pública que hospeda los libros de Kli. No es una aplicación ni un curso: es un libro en una página. Cada libro está escrito en Markdown y se publica con [VitePress](https://vitepress.dev), sin registro, sin analítica, sin CTA.

> **Kli** (כלי, *vasija*): no un recipiente que acumula — algo que hace posible *recibir, transformar y poner en circulación*. La tesis que sostiene estos dos libros: **las relaciones transforman aquello que conectan.**

## Estructura

```
kli-book/
├── content/                       # Markdown público (source of truth de la web)
│   ├── index.md                   # Portada — frontispicio
│   ├── book-01-the-philosophy/    # Libro I — El conocimiento como sistema vivo
│   └── book-02-the-product/       # Libro II — El producto
├── foundation/                    # Notas privadas de marca (no se publican)
├── .vitepress/
│   ├── config.mts                 # Config del sitio, sidebar, nav, SEO
│   └── theme/                     # Tema custom (tipografía + paleta)
├── sync-content.sh                # Copia los .md desde ../Kli hacia content/
├── package.json
└── README.md
```

El source of truth de los *textos* es el repo privado **`../Kli`** (sibling de este repo). `content/` es una copia publicable. Nunca edites el contenido de los libros directamente aquí: edítalo en `../Kli` y vuelve a sincronizar.

## Requisitos

- **Node.js** 22+
- **pnpm** 11+ (`corepack enable` si no lo tienes)

## Desarrollo

```bash
pnpm install
pnpm dev      # servidor en http://localhost:5173
pnpm build    # genera .vitepress/dist
pnpm preview  # sirve el build localmente
```

## Sincronizar contenido

Antes de cada deploy, copia los Markdown de los libros desde el repo privado:

```bash
./sync-content.sh
```

El script usa `rsync --delete` (acotado a cada directorio de libro dentro de `content/`) para traer `book-01-the-philosophy/` y `book-02-the-product/` desde `../Kli`. Solo copia `*.md` y los `*.pdf` de cada libro; excluye `.git`, `.atl`, `spec/`, `book/`, `chat*.md` y `foundation/`.

Si `../Kli` no existe, el script falla con un mensaje claro.

## Cómo agregar un libro o capítulo

1. **Crea el directorio del libro** dentro de `content/`:
   ```
   content/book-03-mi-nuevo-libro/
   ├── README.md          # índice / portada del libro
   ├── chapters/
   │   ├── 00-prologue.md
   │   └── 01-primer-capitulo.md
   ```

2. **Cada `.md` debe empezar con `# Título`** (H1, sin frontmatter). VitePress lo usa como título de página automáticamente.

3. **Partes = subcarpetas.** Si quieres agrupar capítulos en una "parte" (p.ej. `03-people/`), crea una subcarpeta dentro de `chapters/`; añade un `00-introduction.md` que abra la parte.

4. **Registra el libro en la sidebar** de `.vitepress/config.mts`:
   - Añade un nuevo grupo top-level.
   - Anida los subgrupos que quieras (El libro / Apertura / Capítulos / …).
   - Para cada item, `text` = el H1 del archivo, `link` = la ruta relativa al `.md` sin extensión (con `cleanUrls: true`). Ej: `content/book-03-mi-nuevo-libro/chapters/01-primer-capitulo.md` → `link: '/book-03-mi-nuevo-libro/chapters/01-primer-capitulo'`. Un `README.md` en la raíz del libro → `link: '/book-03-mi-nuevo-libro/'`.

5. **Añade una entrada al `nav`** si quieres que el libro aparezca en la barra superior.

6. **Sincroniza desde `../Kli`** (ahi debe vivir el borrador/master) con `./sync-content.sh` — agrega el nuevo libro al array `BOOKS` del script.

El sitio está diseñado para soportar **Libros III–V** sin rediseño: solo se agregan grupos a la sidebar.

## Deploy

El build genera `.vitepress/dist`, servible como estático en cualquier host.

### Vercel
- **Framework preset:** VitePress (o Other)
- **Build command:** `pnpm build`
- **Output directory:** `.vitepress/dist`
- **Install command:** `pnpm install`

### Netlify
- **Build command:** `pnpm build`
- **Publish directory:** `.vitepress/dist`

### GitHub Pages
```bash
pnpm build
# publica el contenido de .vitepress/dist en la rama gh-pages
```

## Notas

- El sitio no tiene analítica, autenticación, comentarios ni selector de idioma. El contenido está en español neutro.
- `foundation/` no se publica: no lo referencies en la sidebar ni en el nav.
- Los libros terminan con la variante PDF (p.ej. `Libro-I-El-conocimiento-como-sistema-vivo.pdf`). VitePress la ignora; no se enlaza automáticamente.