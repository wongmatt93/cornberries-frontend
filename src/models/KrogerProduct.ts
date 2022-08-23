interface Size {
  size: string;
  url: string;
}

interface ProductImage {
  perspective: string;
  sizes: Size[];
}

export default interface KrogerProduct {
  brand: string;
  categories: string[];
  countryOrigin: string;
  description: string;
  images: ProductImage[];
}
