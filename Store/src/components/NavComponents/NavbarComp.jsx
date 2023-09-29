import React, { useState } from "react";
import { 
    Navbar, 
    NavbarMenu, 
    NavbarMenuToggle, 
    NavbarMenuItem, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    Avatar,
    Link, Button } from '@nextui-org/react';

import { Link as RouterLink } from 'react-router-dom'; 

import LoginModal from './LoginModal';
{/* Import Logo When Made */}

export default function NavbarComp() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navmenuItems = [
        "Home",
        "Products",
        "Misc"
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false} className="absolute top-0 bg-black/75 h-28 text-white">
            
            <NavbarContent>
                <RouterLink to="/" className="text-white cursor-pointer">
                <NavbarBrand>
                    <img src="../src/assets/images/vanity_icon.png" className="w-20 h-20 sm:-translate-x-4 -translate-x-2 hidden sm:flex" />
                    <p className="font-bold sm:text-4xl text-2xl ">Vanity</p>
                </NavbarBrand>
                </RouterLink>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="#" className="text-lg text-white">
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <RouterLink to="/faq" className="text-lg text-white">
                        FAQ
                    </RouterLink>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="" justify="end">
                <NavbarItem>

                    <LoginModal />

                </NavbarItem>
                <NavbarItem>
                    <Button isIconOnly className="flex items-center justify-center text-2xl rounded-full text-white bg-[#131313] hover:bg-white hover:text-black  border-none">
                        <ion-icon name="globe-outline"></ion-icon>
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button isIconOnly className="flex items-center justify-center text-2xl rounded-full text-white bg-[#131313] hover:bg-white hover:text-black border-none">
                        <ion-icon name="moon-outline"></ion-icon>
                    </Button>
                </NavbarItem>
                <NavbarMenuToggle 
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="border-none md:hidden flex"
                />
                <NavbarMenu>
                {navmenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                    color={
                        index === 2 ? "primary" : index === navmenuItems.length - 1 ? "danger" : "foreground"
                    }
                    className="flex w-full justify-center"
                    href="#"
                    size="lg"
                    >
                    {item}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
            </NavbarContent>
        </Navbar>
    )
}
