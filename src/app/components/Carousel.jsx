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
            <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center p-6">
              <img
                className="w-24 h-24 mb-4 rounded-full shadow-lg"
                src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                alt={product.name}
              />
              <h5 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {product.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {product.description}
              </span>
              <div className="mt-4">
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
        );
    };

    return (
        <div className="card m-2"  style={{
            background: "url('/bg-cards.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 p-2">Welcome to Our Community</h2>
                <h3 className="text-xl font-semibold text-gray-700 p-2">Join us and connect with amazing people</h3>
                {/* <p className="text-gray-500 p-6">Explore our diverse range of products and services that cater to all your needs.</p> */}
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
             <div className='mt-6 display-none'>0</div>
        </div>
    );
}
