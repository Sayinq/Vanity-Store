import React, { useState } from "react";
import { 
    Navbar, 
    NavbarMenu, 
    NavbarMenuToggle, 
    NavbarMenuItem, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    Link,
    Button,
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem } from '@nextui-org/react';

import { Link as RouterLink } from 'react-router-dom'; 

import LoginModal from './LoginModal';
{/* Import Logo When Made */}

export default function NavbarComp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

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
                    <RouterLink to="/category/products" className="text-lg text-white">
                        Products
                    </RouterLink>
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

                    <Dropdown placement="bottom-end" className="bg-[#131313] gap-y-4">
                        <DropdownTrigger>
                            <Button isIconOnly className="flex items-center justify-center text-2xl rounded-full text-white bg-[#131313] hover:bg-white hover:text-black  border-none">
                                <ion-icon name="globe-outline"></ion-icon>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Language Options" variant="flat">
                            <DropdownItem key="en" value="en">
                                English
                            </DropdownItem>
                            <DropdownItem key="es" value="es">
                                Spanish
                            </DropdownItem>
                            <DropdownItem key="fr" value="fr">
                                French
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

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
                <NavbarMenu 
                    className={`flex absolute top-0 min-h-screen bg-[#131313] items-center justify-center ${isMenuOpen ? 'flex' : 'hidden' }`}
                    onMenuOpenChange={setIsMenuOpen}    
                >
                    <NavbarMenuItem>
                        <RouterLink 
                            to="/" 
                            onClick={closeMenu}
                            className="flex w-full justify-center text-3xl font-bold text-white p-4 tracking-wider">
                            Home
                        </RouterLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <RouterLink 
                            to="/category/products" 
                            onClick={closeMenu}
                            className="flex w-full justify-center text-3xl font-bold text-white p-4 tracking-wider">
                            Products
                        </RouterLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <RouterLink 
                            to="/faq"
                            onClick={closeMenu} 
                            className="flex w-full justify-center text-3xl font-bold text-white p-4 tracking-wider">
                            FAQ
                        </RouterLink>
                    </NavbarMenuItem>
                </NavbarMenu>
            </NavbarContent>
        </Navbar>
    )
}
