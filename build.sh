#!/bin/bash
# build.sh - Συνδυάζει τα HTML partials σε ένα index.html
# Χρήση: ./build.sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
HTML_DIR="$SCRIPT_DIR/html"
OUTPUT="$SCRIPT_DIR/index.html"

# Σειρά αρχείων
PARTIALS=(
    "head.html"
    "controls.html"
    "profile.html"
    "content.html"
    "modals.html"
    "footer.html"
)

# Έλεγχος ότι υπάρχουν όλα τα partials
for partial in "${PARTIALS[@]}"; do
    if [ ! -f "$HTML_DIR/$partial" ]; then
        echo "❌ Λείπει: $HTML_DIR/$partial"
        exit 1
    fi
done

# Δημιουργία index.html
echo "🔨 Building index.html..."
> "$OUTPUT"

for partial in "${PARTIALS[@]}"; do
    cat "$HTML_DIR/$partial" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
done

echo "✅ index.html δημιουργήθηκε επιτυχώς! ($(wc -c < "$OUTPUT") bytes)"
