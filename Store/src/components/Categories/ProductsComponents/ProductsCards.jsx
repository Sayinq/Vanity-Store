import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import ProductsModal from './ProductsModal';

export default function ProductsCards() {
    const list = [
        {
            title: "Product Title 1",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 2",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 3",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 4",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 5",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 6",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 7",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 8",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 9",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 10",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 11",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 12",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="flex flex-wrap w-full h-auto gap-4 items-center justify-center sm:px-4 px-10">
        {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => handleOpenModal(item)}>
            <CardBody className="overflow-visible p-2">
                <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="lg:w-[250px] w-full md:max-w-[300px] object-cover h-full md:max-h-[300px] drop-shadow-md"
                src={item.img}
                />
            </CardBody>
            <CardFooter className="flex flex-col w-full text-small gap-y-4">
                <div className="flex flex-row w-full text-small justify-between font-semibold tracking-wide px-10">
                <h1>{item.title}</h1>
                <p className="text-zinc-500">${item.price}.99</p>
                </div>
                <div className="flex w-full">
                {selectedProduct && (
                    <ProductsModal
                        selectedProduct={selectedProduct}
                        onCloseModal={handleCloseModal}
                    />
                )}
                </div>
            </CardFooter>
            </Card>
        ))}
        </div>
    );
}