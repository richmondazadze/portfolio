# Portfolio UI review

Reviewed September 13, 2026 against the local working tree at localhost:5174.

## Scope and conclusion

Visually inspected Home, Work, About, Contact, two project detail pages (AtmoWise and RichverseEcoTech), and the 404 page. Sampled 320×740, 390×844, 768×1024, 1280×720, and 1440×900 viewports; this was not an exhaustive page-by-viewport matrix. Checked navigation, mobile menu behavior, DOM layout measurements, form labeling, empty-form validation, console warnings, and relevant source code. No contact message was sent. External project destinations, delivery success/error states, real-device performance, and cross-browser behavior remain unverified.

The site has a coherent editorial identity: bold condensed headings, outlined accents, a restrained green palette, and framed project imagery. Its main weaknesses are responsive text handling, faint secondary text, excessive vertical spacing, and interaction details. Preserve the identity while tightening the execution.

## Priority 1 — fix visible breakage and interaction barriers

### 1. Long project headings are clipped on phones

**Observed:** RichverseEcoTech extends beyond the right screen edge at 320px. The heading's scroll width measured 376px inside a 241px content box. Global horizontal overflow hiding conceals the rest of the title.

**Location:** `src/pages/ProjectDetail.jsx:50`, `src/index.css`.

**Change:** Use responsive heading sizes and intentional wrapping for long names. Validate the longest title at 320px and 390px. All title characters must remain visible without horizontal scrolling.

### 2. Mobile hero copy becomes a narrow vertical column

**Observed:** At 320px, the tagline wraps into mostly one- or two-word lines. The 64px arrow and 32px flex gap reserve space beside a long, widely tracked uppercase paragraph. At 390px the paragraph still occupies many lines. Desktop at 1280×720 also puts the paragraph and arrow partly below the initial fold.

**Location:** `src/components/Hero.jsx:69`.

**Change:** Stack the paragraph and action on phones, use sentence case with normal tracking for body copy, shorten the message, and adjust vertical spacing. Give the action a visible “View work” label. The current downward arrow suggests scrolling, but actually navigates to another page.

### 3. Mobile menu leaves visitors behind an overlay

**Observed:** Open menu → tap RA logo → URL changes to Home, but the menu stays open. Escape does not close it. Scrolling while open moved the underlying page from scrollY 844 to 1565.

**Source findings:** No focus containment/return handling, expanded-state attribute, or body scroll lock. The toggle is only 26×26px before any browser-specific target expansion.

**Location:** `src/components/Navigation.jsx:54`, `:88`, `:100`.

**Change:** Close on route changes, support Escape, contain and restore keyboard focus, prevent background scrolling, expose menu state, and provide a 44px touch target. Verify logo, menu links, browser Back, and viewport changes.

### 4. Email text clips on narrow phones

**Observed:** Contact's email runs off the screen at 320px. The footer email element extends to about x=348 in the same viewport.

**Location:** `src/pages/Contact.jsx`, `src/components/Footer.jsx:25`.

**Change:** Allow safe wrapping, reduce narrow-screen type size, and keep the adjacent arrow from being pushed outside the layout. A short “Email me” label with the address beneath is another option.

### 5. Secondary text is too faint on light backgrounds

**Observed:** Work descriptions, project categories, introduction labels, and toolbox labels are difficult to scan. Calculated contrast for the configured taupe `#9f8d8b` is 3.15:1 on white and 3.02:1 on `#fafafa`. The same taupe is 5.39:1 on the dark base, so it needs a separate light-surface treatment.

**Location:** `tailwind.config.js`, light sections in `Intro`, `FeaturedWork`, `Work`, `About`, and `ProjectCard`.

**Change:** Introduce a darker secondary text color for light sections. Reduce widespread 0.35em tracking and reserve tiny uppercase text for short labels. Keep paragraph text comfortably readable.

### 6. Contact fields have no accessible names

**Observed:** All three input controls have zero associated labels; the accessibility tree exposes unnamed fields. Empty submission correctly focuses the required name field.

**Location:** `src/pages/Contact.jsx:136`, `:176`.

**Change:** Associate labels with control IDs, add appropriate autocomplete values, and make feedback announcements accessible. Provide clear focus styling and meaningful example placeholders. Success/error presentation was reviewed in source only, not triggered through the external service.

## Priority 2 — improve flow and consistency

### 7. Reveal timing makes scrolling feel slower than necessary

**Observed:** Scrolling into Selected Works briefly produced an almost blank viewport before the heading and cards appeared. Content becomes visible after the animation settles; it is not permanently missing.

**Location:** `src/components/Reveal.jsx:32`, `src/lib/motion.js`, `src/App.jsx`.

**Change:** Reduce routine reveals to roughly 250–450ms, lower the travel distance, and avoid cumulative delays on primary content. Route exit is currently 350ms, entry 600ms, with additional child animations. Coordinate route scroll reset with page replacement; `scrollTo(0, 0)` currently coexists with global smooth scrolling and exit animations.

**Source-only motion gap:** The reduced-motion CSS changes smooth scrolling but does not disable the CSS floating or bouncing animations. Explicitly suppress those and review scroll-linked motion under a reduced-motion preference. This preference was not emulated during the review.

### 8. Tablet card metadata exceeds its available width

**Observed:** At 768px, PennyTrack's title and category widths total about 319px before the 16px gap, inside a 308.5px row. RichverseEcoTech has the same problem. Metadata spills past its card alignment.

**Location:** `src/components/ProjectCard.jsx`.

**Change:** Stack metadata at tablet card widths, allow wrapping, or base the row layout on the card's available width. Keep the framed screenshot treatment, but reduce padding where it makes screenshots unnecessarily small.

### 9. Homepage repeats content and has oversized gaps

**Observed:** Introduction and Selected Works are consecutive white sections with large padding, leaving a conspicuous empty band. AtmoWise appears in the grid and again in the spotlight with much the same information.

**Location:** `src/components/Intro.jsx:12`, `src/components/FeaturedWork.jsx:13`, `src/components/Featured.jsx`.

**Change:** Consolidate adjacent section spacing. A starting scale is 64–80px on mobile and 96–112px on desktop, adjusted to content. Keep either one distinctive spotlight plus a smaller grid, or make the spotlight add substantive information.

### 10. Navigation appearance varies too much over content

**Observed:** The scrolled transparent header becomes a broad gray strip over white sections and changes appearance as imagery passes behind it. Active navigation relies on a subtle opacity difference.

**Change:** Use a more stable scrolled surface with clearer text contrast, slightly tighter height, and an explicit active indicator. Retain transparency only where it remains legible.

### 11. Contact and About need quicker access to useful content

**Observed:** At 390px, Contact's intro and three link rows fill the first viewport; the form comes afterward. About similarly leads with a long generic biography, with the portrait and CV further below on mobile.

**Change:** Put the form after a brief contact introduction and move secondary social links below it. On About, shorten the biography, surface the CV sooner, and include specific experience or achievements using verified information. Avoid repeating the full contact call-to-action footer on the Contact page.

### 12. Project pages promise more depth than they deliver

**Observed:** “View Case Study” leads to a description, screenshot, stack, and feature list. There is little explanation of the problem, your role, engineering decisions, or results. Visitors must return to Work to browse another project.

**Change:** Either label the link “View project” or add genuine case-study content. Add next-project navigation and an opportunity to inspect the screenshot at a useful size. Do not invent metrics or outcomes.

## Smaller polish items

- Replace the global crosshair cursor with standard text and interactive cursors.
- Give project cards equivalent keyboard focus and hover affordances; the current VIEW treatment is hover-driven.
- Add a skip-to-content link and manage focus after client-side navigation.
- Use route-specific titles; all inspected pages share the same browser title.
- The 404 recovery link is clear, but the page lacks a semantic main heading.
- Standardize CTA wording and button treatment across sections.
- Source content says “5” shipped projects in Intro while About derives its count from data; centralize this to avoid future inconsistency.
- Console contained Framer Motion deprecation/scroll-container warnings and React Router future warnings. No error-level entries appeared in the queried logs. Address these separately from visual polish.

## Suggested implementation order

1. Fix phone overflow, hero layout, tablet card rows, and mobile menu behavior.
2. Improve text contrast, form semantics, focus states, and reduced-motion support.
3. Tighten reveal timing, header styling, section spacing, and mobile content order.
4. Refine project storytelling and remove duplicated content.

Recheck navigation by keyboard and touch-sized viewport, longest titles and email addresses, scroll transitions, form validation and mocked submission states, and representative desktop/mobile screenshots. A physical-phone and cross-browser pass is still needed before calling the experience fully validated.

This review did not modify application source. Existing edits to Featured, ProjectCard, and ProjectDetail were preserved.

## Implementation follow-up — September 13, 2026

The requested cleanup is now implemented. The findings above describe the pre-change site.

- Rebuilt the Work and homepage project grids with aligned previews, summaries, wrapped metadata, and tech tags; removed the duplicate spotlight from Home.
- Rebuilt project details with natural title wrapping, a native image dialog with original-size zoom, and next-project navigation.
- Repaired mobile menu close, Escape, scroll locking, keyboard focus containment, and state announcements.
- Simplified the hero; unified header surfaces, spacing, buttons, cursors, and light/dark text colors.
- Reordered mobile Contact and surfaced About's CV before its stats; made the footer compact on Contact.
- Added form labels, clear focus styles, failure draft preservation, sending/success feedback, and response validation.
- Removed continuous decorative movement and route exit delays; added skip navigation, route titles/descriptions, and a semantic 404 heading.
- Centralized project counts and corrected local-date parsing for experience anniversaries.

Validated with local browser checks at 320px, 768px, and 1440px widths, including menu/route/image-viewer interactions and native required-field validation. Contact response tests use mocked responses and send no messages. Real-device testing and live message delivery are still outside this verification.
