import React from 'react'
import CategoryCard from './CategoryCard'

const CCCont = () => {
  return (
    <div className="flex flex-wrap justify-center w-full md:grid md:grid-cols-3 md:grid-rows-3 h-fit p-4 z-20 md:gap-4 sm:gap-6 lg:py-4 md:py-12">
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-purple.png"
            categoryText="Category"
        />
        <CategoryCard  
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-blue.png"
            categoryText="Category"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-lightblue.png"
            categoryText="Category"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-yellow.png"
            categoryText="Category"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-green.png"
            categoryText="Category"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-reversegreen.png"
            categoryText="Category"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-lightgreen.png"
            categoryText="Category"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-red.png"
            categoryText="Category"
        />
        <CategoryCard 
            imageSrc="./src/assets/images/category-backgrounds/radialsunrays-pink.png"
            categoryText="Category"
        />
    </div>
  )
}

export default CCCont;
