# Hull Pro Marine Care — Website

Professional yacht detailing website built with Next.js 14, TypeScript, and Tailwind CSS.

---

## 🚀 Getting Started (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata (SEO)
│   ├── page.tsx          # Home page — assembles all sections
│   └── globals.css       # Global styles, CSS variables, fonts
├── components/
│   ├── Navbar.tsx        # Sticky navigation bar
│   ├── Footer.tsx        # Footer with links + copyright
│   └── sections/
│       ├── Hero.tsx      # Full-screen hero with CTA
│       ├── Customers.tsx # Client logo grid
│       ├── Purpose.tsx   # About + video embed
│       ├── OurWork.tsx   # Image carousel gallery
│       ├── Reviews.tsx   # Customer review cards
│       └── Contact.tsx   # Contact form + info
public/
└── images/
    ├── hero-bg.jpg              # ← Add your hero background image
    ├── clients/
    │   ├── outdoor-world.png
    │   ├── hermitage-bay.png
    │   ├── blue-waters.png
    │   └── barefoot-antigua.png
    └── work/
        ├── work-1.jpg through work-6.jpg
```

---

## 🖼️ Adding Your Images

Drop all your images into the `public/images/` folder:

| Image | Used In | Path |
|---|---|---|
| Hero background | Hero section | `public/images/hero-bg.jpg` |
| Client logos | Customers section | `public/images/clients/*.png` |
| Portfolio photos | Our Work carousel | `public/images/work/work-1.jpg` ... |

Image paths in the code are already set — just match the filenames.

---

## 🎬 Adding Your Video

In `src/components/sections/Purpose.tsx`, replace:
```
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```
With your actual YouTube or Vimeo embed URL.

---

## 📧 Setting Up the Contact Form

The form in `Contact.tsx` is wired up but needs an email service.
Recommended options (all have free tiers):

- **[Resend](https://resend.com)** — easiest with Next.js
- **[Formspree](https://formspree.io)** — no backend code needed
- **[EmailJS](https://www.emailjs.com)** — client-side only

---

## ☁️ Deploying to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live! Every push to `main` auto-deploys.

---

## 🎨 Brand Colors

Defined in `globals.css` and `tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `--navy` | `#0a1628` | Primary dark background |
| `--gold` | `#c9a84c` | Accent, buttons, highlights |
| `--off-white` | `#f5f5f0` | Light section backgrounds |
| `--ocean` | `#1a3a5c` | Mid-tone navy |

---

Built for Hull Pro Marine Care — Daniel Athill, Antigua.
