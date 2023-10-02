import React, { useState } from 'react'
import { 
    Card, 
    CardBody, 
    CardFooter, 
    Image,
    Button, 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Chip } from "@nextui-org/react";

export default function ProductsCards() {
    const list = [
        {
            title: "Product Title 1",
            img: 'https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png',
            price: "19",
        },
        {
            title: "Product Title 2",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "14",
        },
        {
            title: "Product Title 3",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "12",
        },
        {
            title: "Product Title 4",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "19",
        },
        {
            title: "Product Title 5",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "19",
        },
        {
            title: "Product Title 6",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "9",
        },
        {
            title: "Product Title 7",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "11",
        },
        {
            title: "Product Title 8",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "14",
        },
        {
            title: "Product Title 9",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "13",
        },
        {
            title: "Product Title 10",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "16",
        },
        {
            title: "Product Title 11",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "18",
        },
        {
            title: "Product Title 12",
            img: "https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0.png",
            price: "9",
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
                <Card shadow="sm" key={index} className="bg-[#131313]">
                        <Chip
                            variant="shadow"
                            radius="md"
                            color="warning"
                            classNames={{
                                base: "absolute top-5 right-5 z-20 md:p-4 p-6",
                                content: "drop-shadow shadow-black text-white sm:text-xl text-lg",
                            }}
                        >
                            <span>${item.price}.99</span>
                         </Chip>
                    <CardBody className="overflow-visible p-2">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.title}
                            className="lg:w-[250px] w-full md:max-w-[300px] object-cover h-full md:max-h-[300px] drop-shadow-md z-10"
                            src={item.img}
                        />
                    </CardBody>
                    <CardFooter className="flex flex-col w-full text-small gap-y-4 text-white">
                        <div className="flex flex-row w-full text-small justify-center font-semibold tracking-wide px-4 md:text-base sm:text-xl">
                            <h1>{item.title}</h1>
                        </div>
                        <div className="flex w-full">
                            <Button
                                onClick={() => handleOpenModal(item)}
                                color="warning"
                                className="flex flex-row items-center justify-center text-white hover:text-black w-full h-auto py-4 cursor-pointer md:text-base sm:text-lg"
                                radius="lg"
                            >
                                <span>Add to cart</span>
                                <ion-icon name="cart"></ion-icon>
                            </Button>
                        </div>
                    </CardFooter>
                    {selectedProduct && (
                        <Modal
                            isOpen={true}
                            onOpenChange={handleCloseModal}
                            className="bg-[#131313]"
                            size="2xl"
                            classNames={{
                                backdrop: "bg-slate-200/20"
                              }}
                        >
                            <ModalContent>
                                <ModalHeader className="flex flex-col gap-1 bg-slate-700 sm:text-xl">
                                    {selectedProduct.title}
                                </ModalHeader>
                                <ModalBody className="flex w-full h-fit">
                                    <img src={selectedProduct.img} alt={selectedProduct.title} />
                                </ModalBody>
                                <ModalFooter>
                                    <div className="flex flex-row items-center justify-between w-full h-auto px-4 sm:text-xl tracking-wider">
                                        <span>${selectedProduct.price}.99</span>
                                        <div className="flex gap-x-2">
                                            <Button variant="ghost" onPress={handleCloseModal} className="text-white hover:text-black">
                                                Close
                                            </Button>
                                            <Button
                                                color="success"
                                                variant="flat"
                                                onPress={() => {
                                                    // Handle adding the selected product to the cart here
                                                    handleCloseModal();
                                                }}
                                                className="text-white "
                                            >
                                                Add to cart
                                            </Button>
                                        </div>
                                    </div>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    )}
                </Card>
            ))}
        </div>
    );
}