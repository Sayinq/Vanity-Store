import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import ProductsModal from './ProductsModal';

export default function ProductsCards() {
    const list = [
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
        {
            title: "Product Title",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
            button_text: "Button Text",
        },
    ];

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
                {/* Display the product button text and open the modal on click */}
                <ProductsModal />
                </div>
            </CardFooter>
            </Card>
            
        ))}
        {/* Render the ProductsModal */}
        </div>
    );
}