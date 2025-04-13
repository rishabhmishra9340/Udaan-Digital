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
                name: 'Bamboo Watch',
                description: 'Product Description lorem hello device bdb bdbd bdbdbnr rnnrnrn Description lorem hello device bdb bdbd bdbdbnr rnnrnrn',

                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description lorem hello device bdb bdbd bdbdbnr rnnrnrn Description lorem hello device bdb bdbd bdbdbnr rnnrnrn',
   
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
         
            {
                id: '1029',
                code: 'gwuby345v',
                name: 'Yoga Set dev',
                description: 'Product Description lorem hello device bdb bdbd bdbdbnr rnnrnrn Description lorem hello device bdb bdbd bdbdbnr rnnrnrn',
  
                price: 20,
                category: 'Fitness',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
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

