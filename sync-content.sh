#!/usr/bin/env bash
#
# sync-content.sh — Copia los markdown de los libros desde el repo privado (../Kli)
# hacia content/ antes de cada deploy. El source of truth de los textos es ../Kli.
#
# Uso:  ./sync-content.sh
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)/Kli"
DEST_ROOT="$SCRIPT_DIR/content"

BOOKS=(book-01-the-philosophy book-02-the-product)

if [ ! -d "$SRC_ROOT" ]; then
  echo "ERROR: no se encuentra el repo privado en '$SRC_ROOT'." >&2
  echo "       Esperado: ../Kli (sibling de kli-book). Clónalo o ajusta SRC_ROOT." >&2
  exit 1
fi

if ! command -v rsync >/dev/null 2>&1; then
  echo "ERROR: rsync no está instalado." >&2
  exit 1
fi

mkdir -p "$DEST_ROOT"

echo "Fuente:  $SRC_ROOT"
echo "Destino: $DEST_ROOT"
echo "Libros:  ${BOOKS[*]}"
echo

# rsync filters: KEEP .md and the book PDFs.
# EXCLUDE: .git, .atl, spec/, book/, chat*.md, foundation/ y cualquier tmp.
KEEP_RULES=(
  --include='*/'
  --include='*.md'
  --include='*.pdf'
  --exclude='*'
)

EXCLUDE_DIRS=(
  --exclude='.git/'
  --exclude='.atl/'
  --exclude='spec/'
  --exclude='book/'
  --exclude='foundation/'
  --exclude='node_modules/'
  --exclude='.vitepress/'
)

EXCLUDE_FILES=(
  --exclude='chat.md'
  --exclude='chat2.md'
  --exclude='chat*.md'
)

for book in "${BOOKS[@]}"; do
  src="$SRC_ROOT/$book/"
  dest="$DEST_ROOT/$book/"

  if [ ! -d "$src" ]; then
    echo "WARN: '$book' no existe en la fuente — se omite." >&2
    continue
  fi

  mkdir -p "$dest"

  rsync -a --delete \
    "${KEEP_RULES[@]}" \
    "${EXCLUDE_DIRS[@]}" \
    "${EXCLUDE_FILES[@]}" \
    "$src" "$dest"

  # El source llama "README.md" a la portada del libro; en la web debe ser
  # "index.md" para que VitePress lo sirva como índice del directorio
  # (route con slash final, p.ej. /book-01-the-philosophy/).
  if [ -f "$dest/README.md" ]; then
    mv "$dest/README.md" "$dest/index.md"
  fi

  count=$(find "$dest" -type f -name '*.md' | wc -l | tr -d ' ')
  pdfs=$(find "$dest" -type f -name '*.pdf' | wc -l | tr -d ' ')
  echo "✔ $book  — $count .md, $pdfs .pdf"
done

echo
echo "Sincronización completa."
echo " books synced: ${#BOOKS[@]}"