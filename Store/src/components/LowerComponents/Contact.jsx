import React from 'react'
import {
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Image, 
    Button} from "@nextui-org/react";

const Contact = () => {
  return (
    <div className="flex w-screen h-fit justify-center sm:mt-0 mt-2">
        <Card isFooterBlurred className="w-full xl:w-full lg:w-[220px] md:w-[695px] lg:h-[200px] h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <h1 className="text-white/90 font-bold text-2xl italic uppercase tracking-wider xl:mt-0 lg:mt-6">Need Support?</h1>
        </CardHeader>
        <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="./src/assets/images/banner-backgrounds/grid-banner-black.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10">
            <div className="flex flex-grow gap-2 items-center">
                <div className="flex max-w-[200px]">
                    <p className="text-tiny text-white/60 xl:flex lg:hidden">We run into issues, we can work through it together.</p>
                </div>
            </div>
            <Button radius="full" size="sm" className="px-4 uppercase bg-sky-500 text-white tracking-wide lg:tracking-normal lg:text-xs xl:max-w-fit lg:w-full">Contact Us</Button>
        </CardFooter>
        </Card>
    </div>
  )
}

export default Contact