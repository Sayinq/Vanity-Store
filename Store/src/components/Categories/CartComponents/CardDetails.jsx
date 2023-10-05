import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from '@nextui-org/react';
import { Link as RouterLink } from 'react-router-dom'; 



{/* INN Range algorithm for determining if Mastercard/Visa/Etc ? */}
const CardDetails = () => {
  return (
    <Card radius="none" className="flex w-full sm:max-w-[600px] max-w-[350px] rounded-md bg-[#131313] p-8 overflow-x-visible gap-y-4">

        <CardHeader className="flex flex-col w-full justify-start items-start text-white py-2 gap-y-8">
            <span className="text-lg font-black tracking-widest">Card Details</span>
            <p>Card type</p>
        </CardHeader>

        <div className="flex flex-row w-full h-auto gap-x-4 items-center justify-between">
            <Card className="flex w-full max-w-[350px] h-auto p-4 rounded-md text-white bg-zinc-600">
                <CardHeader className="flex w-full justify-start items-start text-white py-2">
                    <span className="text-lg font-black tracking-wider italic">MasterCard</span>
                </CardHeader>
                <CardBody className="flex flex-col gap-y-8">
                    <Input type="text" variant="underlined" label="Card Number Display" />
                    <div className="flex flex-row items-center justify-between">
                        <span>Card Name</span>
                        <p>Exp Date</p>
                    </div>
                </CardBody>
            </Card>
            <div className="sm:flex w-full justify-start xl:max-w-[150px] lg:max-w-[100px] max-w-[150px] p-4 h-auto hidden">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png"
                    className="sm:w-[100px] w-[50px] h-auto object-fit"   
                />
            </div>
        </div>
        <CardBody className="px-4 gap-y-4">
            <Input type="text" variant="underlined" label="Name on Card" />
            <Input type="text" variant="underlined" label="Card Number" />
            <div className="flex flex-wrap items-center justify-between">
                <div className="flex">
                    <Input type="text" variant="underlined" label="Exp Date" placeholder="mm" className="w-full max-w-[100px]" />
                    <Input type="text" variant="underlined" placeholder="yyyy" className="w-full max-w-[100px] mt-4" />
                </div>
                <Input type="text" variant="underlined" label="CVV" placeholder="XXX" className="w-full sm:max-w-[100px] max-w-[50px]" />
            </div>
        </CardBody>
        <CardFooter className="flex w-full items-center justify-center">
            <Button className="w-full max-w-[400px] bg-green-500 text-white rounded-md">
                <span>Checkout</span>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default CardDetails