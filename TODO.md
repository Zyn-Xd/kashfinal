# Correct Layout & Navbar Import Fix Tracker

## Current Issue: Navbar import (layout.jsx line 2) not working, duplicate files (Navbar.jsx/navBar.jsx)

**Status**: Planning → Implementing

## Steps:

### Phase 1: Fix Navbar Import & Duplicates [Priority]

- [x] 1. Delete duplicate app/components/navBar.jsx
- [x] 2. Rename app/components/Navbar.jsx import in layout.jsx to standard
- [x] 3. Test import with `npm run dev`

### Phase 2: Improve Global Layout

- [x] 4. Add responsive container + font to layout.jsx body
- [x] 5. Update globals.css for font import + Tailwind layers
- [x] 6. Refactor Navbar.jsx to Tailwind classes (remove inline CSS)

### Phase 3: Additional Fixes

- [ ] 7. Update next.config.mjs for images.domains
- [ ] 8. Add Footer to layout
- [ ] 9. `npm run dev` & test full layout
- [ ] 10. `npm run build` verify

**Instructions**: Complete Phase 1 first. Kill any running dev server (Ctrl+C), then `npm run dev` after step 3.
