declare interface Card {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
}

declare interface ProductCard extends Card {
  rating: string;
  price: string;
  oldPrice?: string;
  discount?: string;
}

declare interface CategoryCard extends Card {
  category: string;
  index?: number;
}
