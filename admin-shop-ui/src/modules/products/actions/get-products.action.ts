import { adminShopApi } from '@/api/adminShopApi';
import type { Product } from '../interfaces/product.interface';

export const getProductsAction = async (
  page: number = 1,
  limit: number = 10,
) => {
  try {
    const { data } = await adminShopApi.get<Product[]>(
      `/products?limit=${limit}&offset=${page * limit}`,
    );
    console.log({ page, limit, data });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting products');
  }
};
