import { images } from './index.ts';

export const MOCK_NEW_ARRIVALS_DATA: ProductCard[] = [
  {
    id: '1',
    price: '120',
    image: images.tshirtWithTapeDetails,
    title: 'T-shirt with Tape Details',
    rating: '4.5',
    imageAlt: 'T-shirt with Tape Details',
  },
  {
    id: '2',
    price: '240',
    image: images.skinnyFitJeans,
    title: 'Skinny Fit Jeans',
    rating: '3.5',
    imageAlt: 'Skinny Fit Jeans',
    discount: '20',
    oldPrice: '260',
  },
  {
    id: '3',
    price: '180',
    image: images.checkeredShirt,
    title: 'Checkered Shirt',
    rating: '4.5',
    imageAlt: 'Checkered Shirt',
  },
  {
    id: '4',
    price: '130',
    image: images.sleeveStripedTshirt,
    title: 'Sleeve Striped T-shirt',
    rating: '4.5',
    imageAlt: 'T-shirt with Tape Details',
    discount: '30',
    oldPrice: '160',
  },
];
export const MOCK_TOP_SELLING_DATA: ProductCard[] = [
  {
    id: '5',
    price: '212',
    image: images.verticalStripedShirt,
    title: 'Vertical Striped Shirt',
    rating: '5/5',
    imageAlt: 'Vertical Striped Shirt',
    discount: '20',
    oldPrice: '232',
  },
  {
    id: '6',
    price: '145',
    image: images.courageGraphicTshirt,
    title: 'Courage Graphic T-shirt',
    rating: '4',
    imageAlt: 'Courage Graphic T-shirt',
  },
  {
    id: '7',
    price: '80',
    image: images.looseFitBermudaShort,
    title: 'Loose Fit Bermuda Shirts',
    rating: '3',
    imageAlt: 'Loose Fit Bermuda Shirts',
  },
  {
    id: '8',
    price: '210',
    image: images.fadedSkinnyJeans,
    title: 'Faded Skinny Jeans',
    rating: '4.5',
    imageAlt: 'Loose Fit Bermuda Shirts',
  },
];

export const MOCK_CATEGORIES_CARDS_DATA: CategoryCard[] = [
  {
    id: '1',
    title: 'Casual',
    category: 'casual',
    image: images.categoryCasual,
    imageAlt: 'Casual category',
  },
  {
    id: '2',
    title: 'Formal',
    category: 'formal',
    image: images.categoryFormal,
    imageAlt: 'Formal category',
  },
  {
    id: '3',
    title: 'Party',
    category: 'party',
    image: images.categoryParty,
    imageAlt: 'Party category',
  },
  {
    id: '4',
    title: 'Gym',
    category: 'gym',
    image: images.categoryGym,
    imageAlt: 'Gym category',
  },
];
export const MOCK_CATEGORIES_CARDS_LARGE_DATA: CategoryCard[] = [
  {
    id: '1',
    title: 'Casual',
    category: 'casual',
    image: images.categoryCasualLarge,
    imageAlt: 'Casual category',
  },
  {
    id: '2',
    title: 'Formal',
    category: 'formal',
    image: images.categoryFormalLarge,
    imageAlt: 'Formal category',
  },
  {
    id: '3',
    title: 'Party',
    category: 'party',
    image: images.categoryPartyLarge,
    imageAlt: 'Party category',
  },
  {
    id: '4',
    title: 'Gym',
    category: 'gym',
    image: images.categoryGymLarge,
    imageAlt: 'Gym category',
  },
];
