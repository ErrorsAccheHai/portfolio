# Ashish Bharti — Portfolio

A modern, fully responsive personal portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. All content is managed from a single data file — no need to touch any component.

🌐 **Live:** [yourportfolio.vercel.app](https://yourportfolio.vercel.app) <!-- update after deployment -->

---

## Features

- **Single file configuration** — all content lives in `data/portfolio-data.ts`
- **Dark / Light mode** with smooth transitions
- **Typing animation** in the hero section
- **Scroll-reveal animations** powered by Framer Motion
- **Working contact form** via EmailJS (messages delivered to inbox)
- **Project cards** with live demo + GitHub links and category filters
- **Responsive** across all screen sizes
- **Accessible** — semantic HTML, ARIA labels, keyboard navigable

## Sections

| Section | Description |
|---|---|
| Hero | Name, typing animation, profile photo, CTA buttons |
| About | Bio, education, career goals, interests |
| Skills | Categorised skill bars (Frontend, Backend, DevOps, Soft Skills) |
| Projects | Filterable project cards with screenshots and links |
| Experience | Work experience and project timeline |
| Certifications | Certificates and achievements |
| Contact | Working contact form + social links |

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **Icons** — Lucide React
- **Email** — EmailJS
- **Deployment** — Vercel

## Getting Started

```bash
# Clone the repo
git clone https://github.com/ErrorsAccheHai/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your EmailJS credentials in .env.local

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Environment Variables

Create a `.env.local` file in the root with the following:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [emailjs.com](https://www.emailjs.com) after creating a free account.

## Customisation

Everything is controlled from one file:

```
data/portfolio-data.ts
```

Update your name, bio, skills, projects, experience, certifications, social links, and SEO config there. You never need to touch the components.

To replace the profile photo, drop your image into `public/images/` and update the `profileImage` path in `portfolio-data.ts`.

## Project Structure

```
portfolio/
├── app/                  # Next.js app router (layout, page, globals)
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Skills, Projects, Experience, etc.
│   ├── ui/               # Reusable UI components
│   └── providers/        # ThemeProvider
├── data/
│   └── portfolio-data.ts # ← All content lives here
├── hooks/                # Custom React hooks
├── public/
│   └── images/           # Profile photo, project screenshots
└── .env.local            # EmailJS credentials (not committed)
```

## Deployment

The easiest way is [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repo on Vercel
3. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in Vercel project settings
4. Deploy

## License

MIT — feel free to use this as a template for your own portfolio.

---

Built by [Ashish Bharti](https://github.com/ErrorsAccheHai)
