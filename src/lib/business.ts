export const business = {
  name: "Garcon Barber",
  tagline: "Premium barbershop on Skolgatan",
  description: "Premium barbershop focused on traditional hot-towel shaves and precision men's grooming.",
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
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Garcon Barber",
  rating: 4.9,
  reviewCount: 2058,
  foundedYear: 2010,
  coordinates: { lat: 59.8588, lng: 17.6386 },
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
      title: "Erfarna stylister",
      description: "Professionell klippning och styling hos Garcon Barber.",
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
    { id: 1, label: "Styling", before: "from-[#0D0000] to-[#1A0000]", after: "from-[#CC0000]/40 to-[#1A0000]" },
    { id: 2, label: "Behandling", before: "from-[#1A0000] to-[#0D0000]", after: "from-[#CC0000]/30 to-[#0D0000]" },
    { id: 3, label: "Resultat", before: "from-[#0D0000] to-[#1A0000]/80", after: "from-[#CC0000] to-[#1A0000]/50" },
    { id: 4, label: "Salong", before: "from-[#1A0000]/90 to-[#0D0000]", after: "from-[#CC0000]/50 to-[#CC0000]" },
    { id: 5, label: "Detalj", before: "from-[#0D0000] to-[#CC0000]/20", after: "from-[#1A0000] to-[#CC0000]/35" },
    { id: 6, label: "Atmosfär", before: "from-[#1A0000] to-[#CC0000]/25", after: "from-[#CC0000]/60 to-[#0D0000]" },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Garcon Barber. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Garcon Barber varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  about: {
    headline: "Om Garcon Barber",
    paragraphs: [
      "Premium barbershop focused on traditional hot-towel shaves and precision men's grooming.",
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
