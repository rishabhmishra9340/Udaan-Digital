export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Exceptional Service',
                description: "The team went above and beyond to deliver exactly what we needed—on time and with amazing attention to detail.",

                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Professional and Reliable',
                description: "We could always count on them to be responsive, helpful, and completely professional from start to finish.",

                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Outstanding Results',
                description: 'The quality of the final product exceeded our expectations. We’ve already recommended them to others.',

                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Great Communication',
                description: 'They kept us in the loop throughout the entire process, which made everything smooth and stress-free.',

                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },

            {
                id: '1029',
                code: 'gwuby345v',
                name: 'Highly Recommended',
                description: 'Great Opportunity|',

                price: 20,
                category: '',
                quantity: 25,
                inventoryStatus: '',
                rating: 8,
                orders: [
                    {
                        id: '1029-0',
                        productCode: 'gwuby345v',
                        date: '2020-02-14',
                        amount: 4,
                        quantity: 80,
                        customer: 'Maryann Royster',
                        status: 'DELIVERED'
                    }
                ]
            }
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

