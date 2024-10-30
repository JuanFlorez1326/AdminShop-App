import axios from 'axios';

const adminShopApi = axios.create({
  baseURL: import.meta.env.VITE_ADMIN_SHOP_API_URL,
});

export { adminShopApi };
