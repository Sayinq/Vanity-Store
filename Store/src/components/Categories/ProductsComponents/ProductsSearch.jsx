import React from 'react';
import { Input } from "@nextui-org/react";

export default function ProductsSearch() {
    return (
        <div className="w-[300px] flex flex-col gap-4">
            <div 
                variant="underlined"
                className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 text-lg"
            >
                <Input type="search" variant="underlined" label="Search"

                    className="text-3xl" 
                    endContent= {<ion-icon name="search-circle"></ion-icon>}
                />
            </div>
        </div>
    );
}