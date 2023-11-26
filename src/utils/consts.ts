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
  global: {
    maxStock: {
      sr: 'Ne možete poručiti više nego što je na stanju',
      en: 'Cannot order more than current stock',
    },
    minStock: {
      sr: 'Ako želite ukloniti artikal, pristinite Ukloni',
      en: 'To remove a product click on Remove',
    },
  },
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
    item: {
      button: {
        sr: 'Ukloni',
        en: 'Remove',
      },
      piece: {
        sr: 'po komadu',
        en: 'one piece',
      },
    },
    info: {
      button: {
        sr: 'Prijavi se za brže plaćanje',
        en: 'Login for faster payment',
      },
      h4: {
        sr: 'Tvoja narudžbina',
        en: 'Your Order',
      },
      row1: {
        sr: 'Ukupno',
        en: 'Total',
      },
      row2: {
        sr: 'Ušteda',
        en: 'Saving',
      },
      row3: {
        sr: 'Isporuka',
        en: 'Delivery',
      },
      row4: {
        sr: 'Ukupno za uplatu',
        en: 'Total Payment Due',
      },
      row5: {
        sr: 'Cena je sa uključenim PDV-om',
        en: 'VAT is included in price',
      },
    },
  },
};
