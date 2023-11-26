export const LOGO_PRIMARY_COLOR = '#012734';
export const LOGO_TEXT = 'powered by Degordian';
export const LOGO_SIZE_SM = {
  w: 85,
  h: 30,
  name: 'sm',
};
export const LOGO_SIZE_MD = {
  w: 260,
  h: 125,
  name: 'md',
};
export const LOGO_SIZE_LG = {
  w: 425,
  h: 150,
  name: 'lg',
};

// If this was a prod website we'd use a more robust solution than this
// storing the translation nodes in the DB.
export const TRANSLATIONS = {
  '/': {
    count: {
      sr: 'proizvoda',
      en: 'products',
    },
    h1: {
      sr: 'Svi Proizvodi',
      en: 'All Products',
    },
  },
  '/cart': {
    h1: {
      sr: 'Tvoja Korpa',
      en: 'Your Cart',
    },
  },
};
