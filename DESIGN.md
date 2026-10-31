# Design direction

Personal portfolio of Amirul Haikal, read mainly by recruiters and lecturers deciding whether to contact him.

Owner's answers (2026-10-31): light page with a dark toggle, "confident, some variety", teal as the single accent, a clean sans typeface.
Details below were filled in by Claude within those answers; change any of them freely.

Dial: ENERGY 2 / RHYTHM 2 / MOTION 1

## Identity

- Tone: a tidy, confident CV. Facts first, no decoration that does not help someone scan.
- Motif: a small teal status dot marks what is current (the "open to roles" line and the ongoing diploma). It appears nowhere else.

## Theme

- Light by default. Dark is a working toggle that starts from the visitor's system setting and remembers their choice.

## Palette

| Token | Light | Dark | Use |
|---|---|---|---|
| bg | `#f6f7f5` | `#0f1215` | page |
| surface | `#ffffff` | `#171b20` | cards |
| text | `#16191d` | `#e6eaee` | body and headings |
| muted | `#4b5563` | `#a2acb8` | secondary text |
| accent | `#0b7363` | `#3ddbb7` | primary button, links, focus ring, status dot |
| control border | `#7a828c` | `#7d8794` | outlined buttons, theme toggle |

All text pairings pass WCAG AA (lowest: teal link on light bg, 5.36:1).
The Contact band uses the dark tokens in both themes so the page ends on a clear change.

## Typography

- IBM Plex Sans for everything (400, 600, 700): a plain technical sans that suits an IT student and stays readable at small sizes.
- Sentence case everywhere. No uppercase labels.

## Layout

- No boxed panels. Sections are separated by whitespace and a thin rule.
- Section heading sits in a narrow left column, content on the right (CV layout); it stacks on narrow screens.
- Breaks in rhythm: Skills gives the Technical card double height because it is the main content; Contact is a full-width dark band.
- Radius: 8px for cards and buttons, fully round only for skill tags.
- No shadows, gradients, blur or glow.

## Motion

- Hover and pressed colour changes only. No scroll animation, no hover lift.
