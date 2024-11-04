export type ProductType = {
  id: number;
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  isFeatured: boolean;
  origin: string;
  price: number;
  colors: string;
  discountNumber: number;
  material: string;
  images: [{ id: number; url: string; caption: string }];
  value:string
  category: {
    id: number;
    slug: string;
    categoryName: string;
    description: string;
    url: string;
  };
};
