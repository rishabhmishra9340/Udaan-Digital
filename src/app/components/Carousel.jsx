"use client";

import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from '@/app/components/ProductService';

export default function CarouselFeed() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 4))); // Adjusted to show 4 cards
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="w-full max-w-sm mx-auto bg-slate-500 border rounded-lg shadow-md ">
            <div className="flex flex-col items-center p-6">
             
              <h5 className="mb-2 text-lg font-semibold text-white dark:text-white">
                {product.name}
              </h5>
              <span className="text-sm text-white dark:text-white text-center">
                {product.description}
              </span>
            </div>
          </div>
          
        );
    };

    return (
        <div className="card m-6 rounded-md bg-slate-300 p-16" >
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 p-2">What our client says</h2>
            </div>
            
           
            <Carousel
                value={products}
                numVisible={3}
                numScroll={3}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                circular
                autoplayInterval={3000}
                itemTemplate={productTemplate}
            />
             <div className='mt-6 display-none'></div>
        </div>
    );
}
