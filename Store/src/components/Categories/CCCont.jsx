import React from 'react'
import CategoryCard from './CategoryCard'

const CCCont = () => {
  return (
    <div className="flex flex-wrap justify-center w-full md:grid md:grid-cols-3 md:grid-rows-3 h-fit p-4 z-20 md:gap-4 sm:gap-6 lg:py-4 md:py-12">
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-purple.png"
            categoryText="Weapons"
        />
        <CategoryCard  
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-blue.png"
            categoryText="Armor"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-lightblue.png"
            categoryText="Tools"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-yellow.png"
            categoryText="Pets"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-green.png"
            categoryText="Hats"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-reversegreen.png"
            categoryText="Emotes"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-lightgreen.png"
            categoryText="Mounts"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-red.png"
            categoryText="Banners"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-pink.png"
            categoryText="Effects"
        />
    </div>
  )
}

export default CCCont;
