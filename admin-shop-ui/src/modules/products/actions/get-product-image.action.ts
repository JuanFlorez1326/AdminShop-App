export const getProductImageAction = (imgName: string): string => {
    return imgName.includes('http') 
        ? imgName 
        : `${import.meta.env.VITE_ADMIN_SHOP_API_URL}/files/product/${imgName}`;
}