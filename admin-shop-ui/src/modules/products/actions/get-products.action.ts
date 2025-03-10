import { adminShopApi } from '@/api/adminShopApi';
import type { Product } from '../interfaces/product.interface';
import { getProductImageAction } from './get-product-image.action';

export const getProductsAction = async (
  page: number = 1,
  limit: number = 12,
) => {
  try {
    const { data } = await adminShopApi.get<Product[]>(
      `/products?limit=${limit}&offset=${page * limit}`,
    );

    return data.map((product) => ({
      ...product,
      images: product.images.map(getProductImageAction)
    }));
    
  } catch (error) {
    console.log(error);
    throw new Error('Error getting products');
  }
};
