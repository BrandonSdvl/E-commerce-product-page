import {
    defineStore
} from 'pinia';

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [{
            id: '0',
            data: {
                company: "Sneaker Company",
                postTitle: "Fall Limited Edition Sneakers",
                description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
                price: 250,
                discount: 50,
            },
            images: {
                full: [
                    "image-product-1.jpg",
                    "image-product-2.jpg",
                    "image-product-3.jpg",
                    "image-product-4.jpg",
                ],
                thumbnails: [
                    "image-product-1-thumbnail.jpg",
                    "image-product-2-thumbnail.jpg",
                    "image-product-3-thumbnail.jpg",
                    "image-product-4-thumbnail.jpg",
                ],
            },
        }]
    }),
    getters: {
        getNetPrice: (state) => (productIndex) => {
            const product = state.products[productIndex];
            return product.data.price - (product.data.price * (product.data.discount / 100));
        },
        getProductById: (state) => (id) => {
            return state.products.find(product => product.id == id);
        },
    },
});