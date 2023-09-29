import React from 'react'
import { Input } from '@nextui-org/react';
import vanityIcon from '../../assets/images/vanity_icon.png'

const Footer = () => {
  return (
    <section id="footer" className="flex items-center w-screen h-auto py-10 bg-[#131313]">
        <div id="footer-wrapper" className="flex flex-col items-center w-full h-full gap-y-12">

            {/* Flex wrapper and icons */}
            <div className="flex flex-col md:flex-row md:justify-evenly items-center justify-center w-fit h-full lg:gap-x-24 gap-y-8">
                <div className="flex flex-col items-center">
                    <img src={vanityIcon} className="w-24 h-24" />
                    <div className="flex flex-wrap lg:w-[250px] md:w-[150px] h-fit p-2 justify-center items-center gap-x-4 text-2xl">
                        <a href="https://www.instagram.com/"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="https://www.discord.com/"><ion-icon name="logo-discord"></ion-icon></a>
                        <a href="https://www.twitter.com/"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="https://www.twitch.com/"><ion-icon name="logo-twitch"></ion-icon></a>
                        <a href="https://www.youtube.com/"><ion-icon name="logo-youtube"></ion-icon></a>
                        <a href="https://www.facebook.com/"><ion-icon name="logo-facebook"></ion-icon></a>
                    </div>
                </div>
                {/* Hyperlinks */}
                <div className="flex flex-row w-full h-full md:justify-center top-0 justify-start md:gap-x-12 gap-x-36 md:mt-0 mt-8 pl-2">
                    <div className="flex flex-col w-fit h-fit gap-y-2">
                        <h2 className="font-bold text-2xl">Help</h2>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                    </div>
                    <div className="flex flex-col w-fit h-fit gap-y-2">
                        <h2 className="font-bold text-2xl">About</h2>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                    </div>
                </div>
                {/* Newsletter submit */}
                <div className="flex flex-col w-full max-w-[400px] h-auto py-4 px-2 gap-y-4">
                    <h2 className="font-bold text-3xl tracking-wide">Newsletter</h2>
                    <p className="font-medium text-xl text-slate-500">Sign up to stay up to date on all our offers!</p>
                    <Input type="email" label="Email" variant="bordered" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer