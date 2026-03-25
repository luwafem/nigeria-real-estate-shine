// 🎨 GLOBAL CONFIGURATION - ANGLOW HOMES (LAGOS & OGUN)
export const siteConfig = {
  name: "Anglow Homes",
  shortName: "Anglow",
  location: "Lagos & Ogun",
  description: "Redefining affordable luxury and strategic land banking in Lagos and Ogun State. Specializing in secure gated communities, prime investment lands, and modern residential builds.",
  keywords: "real estate lagos, houses for sale in lekki, land in ibeju lekki, affordable homes ogun state, mowe ofada lands, land banking nigeria, Anglow Homes Nigeria",
  author: "Anglow Homes & Investment Ltd",
  siteUrl: "https://anglowhomes.com", // Updated to reflect new brand
  twitterHandle: "@anglowhomes",
  
  // Brand Assets & Visual Identity
  logo: "https://www.verazadvocates.com.ng/property/wp-content/uploads/2024/06/logo-vera.png", 
  favicon: "https://www.verazadvocates.com.ng/property/wp-content/uploads/2024/06/logo-vera.png",
  
  // Theme & Aesthetic Control
  theme: {
    primary: "#FFFFFF",
    accent: "#D4AF37", // Keeping the premium Gold accent
    background: "#080808", 
    cardBg: "#0A0A0A",     
    fontSerif: "'Playfair Display', serif", 
    fontSans: "'Inter', sans-serif",
  },

  // --- HERO SECTION (Images kept as requested, Copy updated for Lagos/Ogun) ---
  hero: {
    scrollText: "Discover",
    slides: [
      {
        desktopImage: "https://www.as-p.com/fileadmin/_processed_import_/b/1/csm_img_1Lekki-Ikoyi_Link_Bridge_6e73d5c8d2.jpg",
        mobileImage: "https://www.as-p.com/fileadmin/_processed_import_/b/1/csm_img_1Lekki-Ikoyi_Link_Bridge_6e73d5c8d2.jpg",
        ctaText: "Premium Lagos Listings",
        ctaLink: "/properties" 
      },
      {
        desktopImage: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Ikoyi%2C_Lagos%2C_Nigeria.jpg",
        mobileImage: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Ikoyi%2C_Lagos%2C_Nigeria.jpg",
        ctaText: "Investment Lands in Ogun",
        ctaLink: "/lands"
      },
      {
        desktopImage: "https://images.trvl-media.com/place/6354407/d80547cb-401a-41d7-96ca-75515126c4ff.jpg",
        mobileImage: "https://images.trvl-media.com/place/6354407/d80547cb-401a-41d7-96ca-75515126c4ff.jpg",
        ctaText: "Start Land Banking",
        ctaLink: "/contact"
      }
    ],
    fallbackBg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2070&q=80",
  },

  // Carousel Settings
  carousel: {
    autoPlaySpeed: 6000, 
    fadeDuration: 1500,  
    parallaxStrength: 15, 
  },
  
  // Contact Details (Updated for Lagos/Ogun context)
  contact: {
    phone: "+234 000 000 0000", // Update with your actual number
    whatsappNumber: "2340000000000", // Update (No '+' or spaces)
    email: "info@anglowhomes.com",
    address: "Lekki, Lagos State / Mowe, Ogun State, Nigeria",
  },
  
  // Social Ecosystem
  social: {
    instagram: "https://instagram.com/anglowhomes",
    youtube: "https://youtube.com/@anglowhomes" 
  },
  
  // Lead Generation
  formspreeEndpoint: "https://formspree.io/f/your_endpoint_here", 
  
  // Global Metadata for SEO
  ogImage: "https://anglowhomes.com/og-preview.jpg", 
};

/**
 * WhatsApp Message Generator
 */
export const whatsappMessage = (propertyTitle, propertyPrice, propertyUrl) => {
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(propertyPrice);

  return `Hello Anglow Homes. I am interested in this listing:
  
Property: ${propertyTitle}
Value: ${formattedPrice}
Link: ${propertyUrl}

I would like to schedule a site inspection. Please let me know the availability.`;
};