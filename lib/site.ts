/**
 * Public URL of the site, used for canonical links, the sitemap, and social
 * previews. Set NEXT_PUBLIC_SITE_URL to the real domain in production
 * (e.g. https://your-domain.com). On Vercel the production URL is used
 * automatically when it isn't set.
 */
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const site = {
  url: siteUrl,
  name: "Arezoo Jafary",
  firstName: "Arezoo",
  role: "Product Designer",
  title: "Arezoo Jafary — Product Designer",
  description:
    "Product designer in Tehran, Iran. I turn user hesitation into clear product decisions through research, information architecture, and interface design — across subscription, AI, and wellness products.",
  location: "Tehran, Iran",
  email: "j.arezoo2016@gmail.com",
  phone: "+989228272532",
  phoneDisplay: "+98 922 827 2532",
  portrait: "/arezoo-jafary.png",
  resumePath: "/arezoo-jafary-resume.pdf",
  handles: {
    instagram: "@arezouiux",
    dribbble: "arezoojafari",
    linkedin: "arezoo-jafari",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/arezoo-jafari-140754299",
    instagram: "https://www.instagram.com/arezouiux",
    dribbble: "https://dribbble.com/arezoojafari",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/how-i-build", label: "How I Build" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
] as const;
