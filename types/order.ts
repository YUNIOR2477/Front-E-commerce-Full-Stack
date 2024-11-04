export type OrderType={
    products:[{productName: string;
        slug: string;
        description: string;
        active: boolean;
        isFeatured: boolean;
        origin: string;
        price: number;
        colors: string;
        images: [{ id: number; url: string }];
        category: {
          id: number;
          slug: string;
          categoryName: string;
          description: string;
          url: string;
        };}]
}