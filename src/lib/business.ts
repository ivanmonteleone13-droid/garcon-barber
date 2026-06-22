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
  email: "info@garcon.se",
  emailLink: "mailto:info@garcon.se",
  bookingUrl: "https://www.bokadirekt.se/places/garcon-barber-54580",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Garcon Barber",
  rating: 4.9,
  reviewCount: 2058,
  foundedYear: null as number | null,
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
      description: "Professionell knivrakning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sk-ggtrim",
      name: "Skäggtrim",
      description: "Professionell skäggtrim med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "herrklippning",
      name: "Herrklippning",
      description: "Professionell herrklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "skin-fade",
      name: "Skin fade",
      description: "Professionell skin fade med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "br-llopsklippning",
      name: "Bröllopsklippning",
      description: "Professionell bröllopsklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
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
  seoKeywords: [
    "barbershop Uppsala",
    "knivrakning Uppsala",
    "herrfrisör Skolgatan",
    "skäggvård Uppsala",
  ],
  brandColors: {
    primary: "#1a1a2e",
    secondary: "#c9a227",
    accent: "#f5f0e8",
    dark: "#0f0f1a",
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
