import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button 
        onPress={onOpen}
        className="flex flex-row items-center justify-center bg-green-500 w-full h-auto py-4"
      >
            <span>Modal Filler Text</span>
            <ion-icon name="cart"></ion-icon>
      </Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        className="bg-[#131313]"    
    >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader 
                className="flex flex-col gap-1 bg-slate-700"> {/* item title here */} </ModalHeader>
              <ModalBody className="flex w-full h-fit">
                {/* item Image here */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button 
                    color="primary" 
                    onPress={onClose}
                    className="text-white"
                >
                        
                  {/* Add to cart button here */}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
  