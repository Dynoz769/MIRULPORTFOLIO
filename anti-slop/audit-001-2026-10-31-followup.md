# antislop audit 001: follow-up (2026-10-31)

Approved: all 16 findings. Direction is recorded in `DESIGN.md` from the owner's answers (light + dark toggle, confident with some variety, teal accent, clean sans).

Design Read: personal CV portfolio for recruiters and lecturers, in a clean professional style, dial ENERGY 2 / RHYTHM 2 / MOTION 1.

## What changed, by finding

1. Direction: `DESIGN.md` added with palette, type, layout, motion and dials.
2. Tap targets: every link and button is at least 44 px tall at 320-1280 px.
3. Mobile nav: links stay on one row down to 320 px; the theme toggle sits next to the brand.
4. States: hover and pressed styles on nav links, buttons, the toggle, the brand link and contact links; a 2 px accent focus ring.
5. Hero image: `gambar-480.jpg` (480x480, 42 KB, was 547 KB) with `width`, `height` and `fetchpriority="high"`.
6. Gradients and glow: removed.
7. Glass blur: removed.
8. Shadows: removed; cards use a 1 px border.
9. Type: IBM Plex Sans; all uppercase, wide-tracked labels are now sentence case.
10. Motion: scroll fade-ins and hover lifts removed (MOTION 1); colour changes only.
11. Rhythm: CV layout (heading column + content), the Technical card is double height, Contact is a full-width dark band.
12. Theme: light by default, working dark toggle that follows the system setting and remembers the visitor's choice.
13. Accent: teal only on the primary button, links, focus ring and the status dot.
14. Reasons: written in `DESIGN.md`.
15. Identity: the teal status dot marks what is current (availability, the ongoing diploma).
16. Phone links use `tel:+60139298065`.

## Delivery Gate

### Block 1: Hard Gate
- R-02 PASS: `grep` finds no em dash in index.html, styles.css or script.js.
- R-03 PASS: scrollWidth equals viewport width at 320, 390, 768 and 1280 px in both themes; no control under 44 px; nav on one row.
- R-17, R-18, R-36, R-38 PASS: no statistics, testimonials or claims beyond the owner's original CV facts.
- R-23 PASS: the portrait is the owner's photo; the "AH" mark is text, as before.
- R-24, R-26 PASS: links are #top, #about, #education, #skills, #contact (all exist), resume.pdf (exists), mailto and tel. The toggle changes the theme.
- R-25 PASS: checked with contrast-check.py; lowest text pair is teal link on light bg at 5.36:1; outlined-button borders are 3.62:1 or higher.
- R-27, R-28 N/A: no data-driven UI, no FAQ.
- R-32 PASS: Tab reaches every control in visual order with a visible 2 px ring; the toggle works with Enter and Space.
- R-33 PASS: all changes are written in source files.
- R-34 PASS: both themes rendered at four widths with no console errors; contrast checked per theme.
- R-35 PASS (Chromium via Playwright, file://):
  - About, Education, Skills -> section top at 16 px; Contact -> #contact (end of page)
  - Contact me -> #contact
  - Dark mode -> data-theme=dark, background rgb(15,18,21), saved; still dark after reload; Enter -> light; Space -> dark
  - Without JavaScript the toggle stays hidden, so there is no dead control
  - No console errors at any width or theme
- R-37 PASS: direction from the owner, recorded in `DESIGN.md`.
- R-39 PASS: lang, unique title, header/nav/main/footer landmarks, one h1, no skipped levels, alt on the portrait, cursor pointer on links and buttons, hover and pressed states, no animation to stop.
- R-40 PASS: hero image has dimensions and `fetchpriority="high"`, not lazy; `script.js` is `defer`; the only head script is a tiny inline theme read. Performance not measured.

### Block 2: Purpose-Gate
- R-01, R-10, R-12, R-13 PASS: no gradients, blur, shadows or glow.
- R-04, R-08, R-22 PASS: no icons, arrows or illustrations.
- R-06 PASS: IBM Plex Sans chosen for a technical, readable voice (`DESIGN.md`); no uppercase labels.
- R-07 PASS: no background pattern.
- R-09 PASS: no badges; skill tags are a plain list.
- R-14 PASS: the Technical card is larger on purpose (main content).
- R-19 PASS: MOTION 1 and the page has only colour transitions.

### Block 3: Liveliness
- Dials declared: ENERGY 2 / RHYTHM 2 / MOTION 1. YES
- Output matches dials: uniform CV columns with two breaks (double-height card, dark Contact band). YES
- Focal point: the name in the hero. YES
- Whitespace separates sections instead of boxes. YES
- One accent (teal). YES
- Identity motif: the status dot. YES
- Design Read declared before building. YES

### Block 4: Craftsmanship and Quality Locks
- C-1 to C-5 PASS: each decision has a reason in `DESIGN.md`; every control works; every section holds real CV content; checked in both themes, four widths and by keyboard; no fabricated claims.
- R-05 PASS: no template sections; layout follows CV content.
- R-11 PASS: 8 px radius for cards, buttons, nav links and photo; round only for tags.
- R-15 PASS: CTAs name the action (Contact me, Email me, Download resume, Call).
- R-16 PASS: no buzzwords.
- R-20 PASS: a recognisable CV structure with its own motif and real content.
- R-21 PASS: light default with a working dark toggle.
- R-29 PASS: neutrals plus one accent.
- R-30 PASS: not modelled on another product.
- R-31 PASS: reasons in `DESIGN.md`.

Result: no FAIL.

## Also done (owner asked for everything)

- Location shows only "Kota Bharu, Kelantan" instead of the full home address.
- Footer year updated to 2026.
- Removed the unused original `gambar.jpg`.
