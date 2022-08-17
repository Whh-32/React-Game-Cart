import React, { useState } from 'react'

import pic0 from '../asset/game_cover/watchDogs.jpg'
import pic1 from '../asset/game_cover/WarZone.jpg'
import pic2 from '../asset/game_cover/FortNight.jpg'
import pic3 from '../asset/game_cover/Apex.jpg'

const Slider = () => {
    const images = [pic0, pic1, pic2, pic3];
    const [slide, setSlide] = useState(0);

    const radioHandler = (index) => {
        setSlide(index)
    }
    const buttonHandler = (direction) => {
        direction === "right"
            ? setSlide((prev) => slide < images.length - 1 ? prev + 1 : slide)
            : setSlide((prev) => slide > 0 ? prev - 1 : slide)
    }

    return (
        <div className='w-full max-h-[570px] h-[42vw] rounded-2xl mb-[50px] overflow-hidden'>
            <div id="default-carousel" className="relative" data-carousel="slide">

                <div className="overflow-hidden relative rounded-lg w-full max-h-[570px] h-[42vw]">

                    <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20">
                        {/* <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span> */}
                        <img src={images[slide]} className="flex object-cover" alt="apex" />
                    </div>
                </div>

                <div className="flex absolute bottom-2 sm:bottom-4 left-1/2 z-30 space-x-2 -translate-x-1/2">
                    <button type="button" className={`sm:w-6 sm:h-1  w-5 h-1 rounded-sm  dark:bg-gray-800 ${slide === 0 ? 'bg-[#ff1010]' : 'bg-white/50'}`} aria-current="true" aria-label="Slide 1" onClick={() => { radioHandler(0) }}></button>
                    <button type="button" className={`sm:w-6 sm:h-1  w-5 h-1 rounded-sm  dark:bg-gray-800 ${slide === 1 ? 'bg-[#ff1010]' : 'bg-white/50'}`} aria-current="false" aria-label="Slide 2" onClick={() => { radioHandler(1) }}></button>
                    <button type="button" className={`sm:w-6 sm:h-1  w-5 h-1 rounded-sm  dark:bg-gray-800 ${slide === 2 ? 'bg-[#ff1010]' : 'bg-white/50'}`} aria-current="false" aria-label="Slide 3" onClick={() => { radioHandler(2) }}></button>
                    <button type="button" className={`sm:w-6 sm:h-1  w-5 h-1 rounded-sm  dark:bg-gray-800 ${slide === 3 ? 'bg-[#ff1010]' : 'bg-white/50'}`} aria-current="false" aria-label="Slide 3" onClick={() => { radioHandler(3) }}></button>
                </div>

                <button onClick={() => { buttonHandler("left") }} type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-12 sm:h-12 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={() => { buttonHandler("right") }} type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-12 sm:h-12 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Slider