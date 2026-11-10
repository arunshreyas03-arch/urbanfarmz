/**
 * Urbanfarmz Central Site Configuration
 * All contact details, social links, and external endpoints are configured here.
 */
export const siteConfig = {
  brandName: "Urbanfarmz",
  tagline: "Community Farming",
  locationDisplay: "Kanakapura Road, Bengaluru",
  
  // Contact & Social configurations
  whatsappNumber: "+919108345119",
  whatsappDisplay: "+91 91083 45119",
  contactEmail: "info@urbanfarmz.in",
  instagramUrl: "https://www.instagram.com/urbanfarmz",
  websiteUrl: "https://urbanfarmz.in",
  googleMapsUrl: "https://maps.app.goo.gl/g5bnbTRews6nb4FAA",

  // API endpoint for enquiries (leave empty for frontend mock mode)
  formApiEndpoint: "",

  // Pre-filled WhatsApp message generator
  getWhatsAppEnquiryUrl: (planName?: string) => {
    const text = planName 
      ? `Hi Urbanfarmz, I am interested in the ${planName} and would like to learn more about community farming and schedule a farm visit.`
      : "Hi Urbanfarmz, I would like to enquire about community farming membership and book a farm visit on Kanakapura Road.";
    return `https://wa.me/919108345119?text=${encodeURIComponent(text)}`;
  }
};
