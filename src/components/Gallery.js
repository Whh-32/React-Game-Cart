import React, { Fragment } from 'react'

const Gallery = ({ image }) => {
    return (
        <Fragment>
            <div className='hidden w-full md:w-[250px] md:min-w-[250px] lg:min-w-[550px] flex-wrap md:flex md:flex-col overflow-auto'>
                <div className='w-[1000px] md:w-[250px] lg:w-[550px] flex md:flex-col'>
                    <div className='w-full h-[150px] md:h-[150px] lg:h-[320px] rounded-xl sm:mb-4 overflow-hidden'>
                        <img className='flex w-full h-full object-cover' src={image[0].image} alt="cover1" />
                    </div>

                    <div className='relative mx-2 md:mx-0 w-[200%] flex h-[150px] flex-row md:flex-col md:w-full mb-4 md:h-[316px] lg:h-[150px] lg:flex-row'>
                        <div className='md:w-full lg:w-[50%] h-full rounded-xl mr-2 overflow-hidden'>
                            <img className='flex h-full object-cover' src={image[1].image} alt="cover2" />
                        </div>
                        <div className='m-0 md:w-full lg:w-[50%] md:mt-4 h-full rounded-xl lg:mt-0 lg:ml-2 overflow-hidden'>
                            <img className='flex w-full h-full object-cover' src={image[2].image} alt="cover3" />
                        </div>
                    </div>

                    <div className='w-[200%] flex h-[150px] flex-row md:flex-col md:w-full mb-4 md:h-[316px] lg:h-[150px] lg:flex-row'>
                        <div className=' md:w-full lg:w-[50%] h-full rounded-xl mr-2 overflow-hidden'>
                            <img className='flex h-full object-cover' src={image[3].image} alt="cover2" />
                        </div>
                        <div className='m-0 md:w-full lg:w-[50%] md:mt-4 h-full rounded-xl lg:mt-0 lg:ml-2 overflow-hidden'>
                            <img className='flex w-full h-full object-cover' src={image[4].image} alt="cover3" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[150px] flex md:hidden'>
                <div className='cursor-pointer hover:max-w-[700px] hover:min-w-[250px] h-full rounded-xl mr-2 overflow-hidden'>
                    <img className='flex h-full object-cover' src={image[0].image} alt="cover2" />
                </div>
                <div className='cursor-pointer hover:max-w-[700px] hover:min-w-[250px] h-full rounded-xl mr-2 overflow-hidden'>
                    <img className='flex h-full object-cover' src={image[1].image} alt="cover2" />
                </div>
                <div className='cursor-pointer hover:max-w-[700px] hover:min-w-[250px] h-full rounded-xl mr-2 overflow-hidden'>
                    <img className='flex h-full object-cover' src={image[2].image} alt="cover2" />
                </div>
                <div className='cursor-pointer hover:max-w-[700px] hover:min-w-[250px] h-full rounded-xl mr-2 overflow-hidden'>
                    <img className='flex h-full object-cover' src={image[3].image} alt="cover2" />
                </div>
                <div className='cursor-pointer w-[250px] hover:max-w-[700px] hover:min-w-[250px] transition-all duration-[500ms] h-full rounded-xl mr-2 overflow-hidden'>
                    <img className='flex h-full object-cover' src={image[4].image} alt="cover2" />
                </div>
            </div>
        </Fragment>
    )
}

export default Gallery