import React from 'react'
import { Avatar, Tooltip } from '@nextui-org/react';

const Contributors = () => {
  return (
    <div id="misc-content" className="flex flex-col w-screen xl:w-full lg:w-[400px] md:w-[700px] h-[300px] max-h-[450px] justify-center rounded-lg shadow-md z-10 bg-[#131313] text-white overflow-hidden">
        <span className="lg:text-base">Our main contributors</span>
        <div className="flex gap-4 p-2 justify-center items-center h-1/2 w-full">
          <Tooltip showArrow={true} content="User Name" className="text-white bg-zinc-600">
            <Avatar src="../src/assets/images/vanity_icon.png" className="w-20 h-20 lg:w-12 lg:h-12 xl:w-20 xl:h-20" />
          </Tooltip>
          <Tooltip showArrow={true} content="User Name" className="text-white bg-zinc-600">
            <Avatar src="../src/assets/images/vanity_icon.png" className="w-20 h-20 lg:w-12 lg:h-12 xl:w-20 xl:h-20" />
          </Tooltip>
          <Tooltip showArrow={true} content="User Name" className="text-white bg-zinc-600">
            <Avatar src="../src/assets/images/vanity_icon.png" className="w-20 h-20 lg:w-12 lg:h-12 xl:w-20 xl:h-20" />
          </Tooltip>
        </div>
        <span className="font-bold lg:text-xs">Thanks you for your continuous support.</span>
    </div>
  )
}

export default Contributors