/**
 * Central contact and office configuration for Green Gate Advisory.
 * Updated with official Barcelona, Spain headquarters as requested.
 */
export const CONTACT_CONFIG = {
  address: {
    street: 'Rambla de Catalunya 38, 8°, 1a',
    postalCode: '08007',
    city: 'Barcelona',
    country: 'Spain',
    countryCode: 'ES',
    fullFormatted: 'Rambla de Catalunya 38, 8°, 1a, 08007 Barcelona, Spain',
    mapsEmbedUrl: 'https://maps.google.com/maps?q=Rambla%20de%20Catalunya%2038%2C%2008007%20Barcelona%2C%20Spain&t=m&z=16&output=embed&iwloc=near',
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Rambla+de+Catalunya+38+08007+Barcelona+Spain'
  },
  email: 'contact@greengateadvisory.com',
  
  // Spanish direct contact lines (configured via ENV or defaults)
  phone: {
    raw: import.meta.env.VITE_PHONE_NUMBER || '+34 930 000 000',
    display: '+34 930 000 000'
  },
  whatsapp: {
    // Number format for wa.me API (digits only with country code 34 for Spain)
    raw: (import.meta.env.VITE_WHATSAPP_NUMBER || '34600000000').replace(/[^0-9]/g, ''),
    display: '+34 600 000 000',
    defaultMessageEn: 'Hello Green Gate Advisory, I would like to enquire about your climate and carbon market advisory services.',
    defaultMessageEs: 'Hola Green Gate Advisory, me gustaría consultar sobre sus servicios de asesoría climática y mercados de carbono.'
  }
};

