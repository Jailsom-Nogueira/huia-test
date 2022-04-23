export interface ProductCardProps {
  productDescription: string;
  productThumbnail: string;
  productImage: string;
  productTitle: string;
  productPrice: number;
  productId: string;
};

export interface ProductProps {
  product: ProductCardProps 
};
