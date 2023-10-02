import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function ProductsModal({ selectedProduct, onCloseModal }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        onCloseModal(); // Call the onCloseModal function passed as a prop
    };

    return (
        <>
            <div
                onClick={openModal}
                className="flex flex-row items-center justify-center bg-green-500 w-full h-auto py-4 cursor-pointer"
            >
                <span>Modal Filler Text</span>
                <ion-icon name="cart"></ion-icon>
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={closeModal}
                className="bg-[#131313]"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 bg-slate-700">
                                {selectedProduct.title}
                            </ModalHeader>
                            <ModalBody className="flex w-full h-fit">
                                <img src={selectedProduct.img} alt={selectedProduct.title} />
                            </ModalBody>
                            <ModalFooter>
                                <div className="mr-2">
                                    <Button color="danger" variant="light" onPress={closeModal}>
                                        Close
                                    </Button>
                                </div>
                                <Button
                                    color="primary"
                                    onPress={() => {
                                        // Handle adding the selected product to the cart here
                                        closeModal();
                                    }}
                                    className="text-white"
                                >
                                    Add to cart
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
