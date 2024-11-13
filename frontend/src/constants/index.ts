const iconUrl = `${import.meta.env.VITE_API_URL}/assets/icons/`;
const imageUrl = `${import.meta.env.VITE_API_URL}/assets/images/`;

export const icons = {
  search: `${iconUrl}/search.svg`,
  searchBarGrey: `${iconUrl}/search-bar-grey.svg`,
  cart: `${iconUrl}/cart.svg`,
  profile: `${iconUrl}/profile.svg`,
  burger: `${iconUrl}/burger-menu.svg`,
  chevronDown: `${iconUrl}/chevron-down.svg`,
};

export const images = {
  heroLarge: `${imageUrl}/hero-cover-large.png`,
  heroSmall: `${imageUrl}/hero-cover-small.png`,
};
