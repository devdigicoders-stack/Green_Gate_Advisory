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
    mapsDirectionsUrl: 'https://maps.app.goo.gl/LfbSbp2cDenwBg6f8'
  },
  email: 'info@greengateadvisory.com',

  // Spanish direct contact lines (configured via ENV or defaults)
  phone: {
    raw: import.meta.env.VITE_PHONE_NUMBER || '+34 930 000 000',
    display: '+34 930 000 000'
  },
  whatsapp: {
    // Number format for wa.me API (digits only with country code 34 for Spain)
    raw: (import.meta.env.VITE_WHATSAPP_NUMBER || '+34 697 76 80 14').replace(/[^0-9]/g, ''),
    display: '+34 697 76 80 14',
    defaultMessageEn: 'Hello Green Gate Advisory, I would like to enquire about your climate and carbon market advisory services.',
    defaultMessageEs: 'Hola Green Gate Advisory, me gustaría consultar sobre sus servicios de asesoría climática y mercados de carbono.'
  }
};

