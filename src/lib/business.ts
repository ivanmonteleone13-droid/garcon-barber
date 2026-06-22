export const business = {
  name: "Garcon Barber",
  tagline: "Premium barbershop on Skolgatan",
  description:
    "Varmt välkommen till Garcon! Traditionell knivrakning, varma omslag, skäggtrim och precision klippning — utfört av erfarna barberare på Skolgatan 43 i Uppsala.",
  category: "Hair Salon",
  address: {
    street: "Skolgatan 43",
    postalCode: "753 32",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-10 12 00",
  phoneLink: "tel:+4618101200",
  email: "info@garcon.se" as string | null,
  emailLink: "mailto:info@garcon.se" as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/garcon-barber-54580",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: "https://www.garcon.se/" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-3.jpg",
  facebookUrl: null as string | null,
  instagramUrl: "https://instagram.com/garconbarber" as string | null,
  owner: "Garcon Barber",
  rating: 4.9,
  reviewCount: 2058,
  foundedYear: 2010,
  coordinates: { lat: 59.8624, lng: 17.6326 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "4.9 på Bokadirekt", icon: "star" },
    { label: "2058+ omdömen", icon: "reviews" },
    { label: "Uppsala centrum", icon: "location" },
    { label: "💈 Barber Red", icon: "student" },
  ],
  usps: [
    {
      title: "Erfarna barberare",
      description: "Knivrakning, skin fade och skäggtrim med fokus på hantverk och precision.",
    },
    {
      title: "Centralt läge",
      description: "Beläget på Skolgatan 43 i Uppsala.",
    },
    {
      title: "Höga betyg",
      description: "2058+ nöjda kunder enligt offentliga omdömen.",
    },
    {
      title: "Enkel bokning",
      description: "Boka tid online eller ring för snabb service.",
    },
  ],
  services: [
    {
      id: "knivrakning",
      name: "Knivrakning",
      icon: "✂️",
      description: "Professionell knivrakning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sk-ggtrim",
      name: "Skäggtrim",
      icon: "💇",
      description: "Professionell skäggtrim med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "herrklippning",
      name: "Herrklippning",
      icon: "⭐",
      description: "Professionell herrklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "skin-fade",
      name: "Skin fade",
      icon: "🎯",
      description: "Professionell skin fade med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "br-llopsklippning",
      name: "Bröllopsklippning",
      icon: "✨",
      description: "Professionell bröllopsklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Salongen", image: "/images/gallery-1.jpg" },
    { id: 2, label: "Skin fade", image: "/images/gallery-2.jpg" },
    { id: 3, label: "Knivrakning", image: "/images/gallery-3.jpg" },
    { id: 4, label: "Skäggtrim", image: "/images/gallery-4.jpg" },
    { id: 5, label: "Hantverk", image: "/images/gallery-5.jpg" },
    { id: 6, label: "Atmosfär", image: "/images/gallery-6.jpg" },
  ],
  testimonials: [
    {
      text: "Briljant som vanligt.",
      author: "Peter E.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/garcon-barber-54580",
      rating: 5,
      date: "2026-06-16",
    },
    {
      text: "Otroligt trevliga och noga. Snyggt minst sagt!",
      author: "Joakim W.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/garcon-barber-54580",
      rating: 5,
      date: "2026-06-15",
    },
    {
      text: "He did an incredible job! Very friendly and easy to communicate with. I felt super fresh with my new summer cut!",
      author: "Linus A.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/garcon-barber-54580",
      rating: 5,
      date: "2026-06-13",
    },
    {
      text: "Jävligt majjigt med en riktig barberare i stan. Inte så mycket snack utan fokus på hantverket och en rimlig prislapp.",
      author: "Sebastian K.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/garcon-barber-54580",
      rating: 5,
      date: "2026-06-12",
    },
  ],
  about: {
    headline: "Om Garcon Barber",
    paragraphs: [
      "Varmt välkommen till Garcon! Här erbjuder vi allt från traditionell knivrakning och varma omslag till skäggtrim och precision klippning, utfört av erfarna barberare som alltid strävar efter perfektion. Hos oss är atmosfären lika viktig som behandlingen — vi har skapat en plats där du kan koppla av och njuta av riktigt hantverk.",
      "Garcon är mer än en barbershop – det är en upplevelse. Välkommen till Skolgatan 43 i Uppsala.",
    ],
  },
  faq: [
    {
      question: "Var ligger Garcon Barber?",
      answer: "Vi finns på Skolgatan 43, 753 32 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos Garcon Barber?",
      answer: "Boka via Bokadirekt eller ring 018-10 12 00.",
    },
    {
      question: "Vad säger kunder om Garcon Barber?",
      answer: "Vi har 4.9 i snittbetyg baserat på 2058+ recensioner.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Ring gärna innan besök.",
    },
    {
      question: "Kan jag avboka min tid?",
      answer: "Ja, via Bokadirekt kan du hantera din bokning.",
    },
    {
      question: "Erbjuder ni presentkort?",
      answer: "Kontakta oss för information om presentkort.",
    },
    {
      question: "Finns parkering nära?",
      answer: "Gatuparkering finns i närheten av Skolgatan 43.",
    },
  ],
  seoKeywords: [
    "barbershop Uppsala",
    "knivrakning Uppsala",
    "herrfrisör Skolgatan",
    "skäggvård Uppsala",
    "Garcon Barber",
    "Uppsala barber_red",
  ],
  brandColors: {
    primary: "#1A0000",
    secondary: "#CC0000",
    accent: "#F5F5F5",
    dark: "#0D0000",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
