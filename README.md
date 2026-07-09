# Richmond Azadze — Portfolio (Redesign)

A high-end, editorial multi-page portfolio for a Software & AI Engineer. Dark
navy base, massive Anton display typography, asymmetric layouts, and fluid
motion. Content migrated from the previous portfolio.

## Stack

- React 19 + Vite
- react-router-dom (multi-page routing)
- Tailwind CSS 3
- lucide-react (icons)
- Fonts: Anton (display) + Plus Jakarta Sans (body), from Google Fonts

## Pages / routes

| Route         | Page          | Contents                                            |
| ------------- | ------------- | --------------------------------------------------- |
| `/`           | Home          | Hero, intro + stats, featured work, spotlight, capabilities |
| `/work`       | Work          | Full masonry grid of all projects                   |
| `/work/:slug` | Project detail| Overview, cover, tech stack, key features, links    |
| `/about`      | About         | Bio, stats, profile, tech-stack grid, approach      |
| `/contact`    | Contact       | Editorial contact form (FormSubmit) + direct links  |
| `*`           | 404           | Not found                                            |

## Content

- Identity, bio, roles, socials, resume, email: `src/data/site.js`
- Projects (with slugs, tech, features, links): `src/data/projects.js`
- Assets (images, resume, tech logos): `public/` and `public/tech/`

The contact form posts to FormSubmit (`https://formsubmit.co/ajax/<email>`).
The first submission requires a one-time email activation from FormSubmit.

## Design system

| Token    | Value     | Usage                          |
| -------- | --------- | ------------------------------ |
| navy     | `#171e19` | Base background, dark sections |
| sage     | `#b7c6c2` | Accent text, outline stroke    |
| taupe    | `#9f8d8b` | Secondary body text            |
| beige    | `#d7c5b2` | Accent                         |
| cyan     | `#d5f4f9` | Decorative offset square       |
| softblue | `#bbe2f5` | Ambient orb                    |
| charcoal | `#302b2f` | Approach section               |

- **Headings:** `font-display` (Anton), uppercase, `tracking-tighter`, up to `16vw`.
- **Body:** `font-sans` (Plus Jakarta Sans), weights 300/400/600.
- **Motion:** `ease-fluid` = `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Utilities:** `.text-outline` (sage stroke), `.reveal` (scroll reveal).

## Run

```bash
npm install
npm run dev      # http://localhost:5174
npm run build
npm run preview
```
