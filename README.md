# staticblocks-docs

A static website built with StaticBlocks.

## Project Structure

```
src/
├── templates/     # HTML templates
├── blocks/        # Reusable blocks
├── pages/         # Page configurations (YAML)
├── locales/       # Translation files (JSON)
└── assets/        # Static assets
```

## Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn run dev

# Build for production
yarn run build
```

## Configuration

- **CSS Framework:** tailwind
- **Icons:** lucide
- **i18n:** Disabled


## Commands

```bash
# Generate new block
staticblocks generate block my-block --with-js

# Generate new page
staticblocks generate page my-page

# Add new locale
staticblocks add locale fr

# Validate project
staticblocks validate
```
