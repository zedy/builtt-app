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
// storing the translation nodes in the DB or locale/en... and
// using i18next, why i wrote my own transation package? no idea...was late, was tired.
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
    limit: {
      sr: 'Jedan je najmanji kvantitet koji se može dodati u korpu',
      en: 'The least amount of products in your cart is one',
    },
    noStock: {
      sr: 'Artikal trenutno nije na stanju',
      en: "The product currently isn't available",
    },
    header: {
      login: {
        sr: 'Prijavi se',
        en: 'Log in',
      },
      logout: {
        sr: 'Odjavi se',
        en: 'Log out',
      },
    },
  },
  productPage: {
    h1: {
      sr: 'Svi Proizvodi',
      en: 'All Products',
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
  '/login': {
    h1: {
      sr: 'Prijavi se na svoj nalog',
      en: 'Sign in using your account',
    },
    button: {
      modal: {
        sr: 'Potvrdi',
        en: 'Submit',
      },
      google: {
        sr: 'Prijeva preko Google naloga',
        en: 'Sign in with Google',
      },
      create: {
        sr: 'Napravite nalog',
        en: 'Create account',
      },
      signin: {
        sr: 'Prijavi se na nalog',
        en: 'Sign in',
      },
    },
    form: {
      required: {
        sr: 'Ovo polje je obavezno',
        en: 'This field is mandatory',
      },
      modalTitle: {
        sr: 'Kreiranje naloga',
        en: 'Account creation',
      },
      email: {
        sr: 'E-mail adresa',
        en: 'E-mail address',
      },
      pass: {
        sr: 'Upišite šifru',
        en: 'Password',
      },
      name: {
        sr: 'Korisničko ime',
        en: 'Username',
      },
      passV: {
        sr: 'Potvrdite šifru',
        en: 'Confirm password',
      },
    },
  },
  '/cart': {
    h1: {
      sr: 'Tvoja Korpa',
      en: 'Your Cart',
    },
    empty: {
      h2: {
        sr: 'Vaša korpa je prazna!',
        en: 'Your cart is empty!',
      },
      button: {
        sr: 'Dodajte artikle?',
        en: 'Add some products?',
      },
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
      buttonNoAuth: {
        sr: 'Prijavi se za brže plaćanje',
        en: 'Login for faster payment',
      },
      buttonAuth: {
        sr: 'Plati',
        en: 'Pay',
      },
      payed: {
        sr: 'Porudžbina uspešna!',
        en: 'Payment successfull!',
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
      row3a: {
        sr: 'Isporuka',
        en: 'Delivery',
      },
      row3b: {
        sr: 'Besplatno',
        en: 'Free',
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
