export interface ProductShipping {
  productWeight: number,
  productLength: number,
  productHeight: number,
  productWidth: number,
  productDiameter: number,
  productDeclaredValue: number
};
export interface ProductCardProps {
  productDescription: string;
  productThumbnail: string;
  productImage: string;
  productTitle: string;
  productPrice: number;
  productId: string;
  productQuantity: number;
  productWeight: number,
  productLength: number,
  productHeight: number,
  productWidth: number,
  productDiameter: number,
  productDeclaredValue: number
};

export interface ProductProps {
  product: ProductCardProps 
};
