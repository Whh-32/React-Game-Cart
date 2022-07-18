import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { FaWindows } from 'react-icons/fa';
import { FaPlaystation } from 'react-icons/fa';
import { FaXbox } from 'react-icons/fa';
import Gallery from '../components/Gallery';

const Details = () => {
    const param = useParams();
    const [details, setDetails] = useState('');
    const [image, setImage] = useState('');

    const DETAIL_URL = `https://api.rawg.io/api/games/${param.slug}?key=00d647439340449eae7acb7e965ca18b`;
    const IMAGE_URL = `https://api.rawg.io/api/games/${param.slug}/screenshots?key=00d647439340449eae7acb7e965ca18b`;

    useEffect(() => {
        fetch(`${DETAIL_URL}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
                // setIsLoading(false)
            })

        fetch(`${IMAGE_URL}`)
            .then(res => res.json())
            .then(data => {
                setImage(data.results);
                // setIsLoading(false)
            })
    }, [DETAIL_URL, IMAGE_URL]);

    return (
        <Fragment>
            <div className='bg-gradient-to-b from-[#141414c4] to-[#141414] overflow-hidden flex items-start left-0 top-0 w-full absolute h-auto max-h-[600px]'>
                {details && <img className='w-full object-cover z-[-1]' src={details.background_image} alt="cover" />}
            </div>

            <div className='w-full relative px-[20px] lg:px-[40px] pt-[15px] transition-all duration-[500ms]' >
                <div className='w-full z-10 flex flex-col items-center text-white mt-[20px]'>
                    <div className='w-full flex justify-between md:flex-row flex-col'>
                        <div className='md:w-[500px] mr-6 w-full'>

                            <div className='flex flex-col items-start mb-2'>
                                <div className='flex mb-3'>
                                    <span className='flex justify-center items-center text-[14px] w-[100px] h-[30px] bg-[#fffffff8] mr-4 rounded-md text-black'>
                                        AUG 23, 2022
                                    </span>
                                    <span className='flex items-center'>
                                        {details && details.parent_platforms.find(plat => plat.platform.name === 'PC') && <FaWindows className='mr-2 text-[14px]' />}
                                        {details && details.parent_platforms.find(plat => plat.platform.name === 'PlayStation') && <FaPlaystation className='mr-2 text-[14px]' />}
                                        {details && details.parent_platforms.find(plat => plat.platform.name === 'Xbox') && <FaXbox className='mr-2 text-[14px]' />}
                                    </span>
                                </div>
                                <span className='text-[13px]'>AVERAGE PLAYTIME: {details.playtime} HOURS</span>
                            </div>

                            <div className='pr-2'>
                                <span className='text-[30px] sm:text-[40px] lg:text-[60px] font-bold leading-[65px] flex mt-[18vw] md:mt-[40px]'>{details.name}</span>
                            </div>

                            <div className='w-full mt-4'>
                                <button className='w-full h-[35px] rounded-md bg-[#d83535] text-white font-medium  lg:mt-4'>Add to collection</button>
                            </div>

                            <div className='mt-[20px]'>
                                <h1 className='text-[20px] sm:text-[25px] font-bold mb-2 '>About</h1>
                                {<div className='text-[14px] sm:text-[16px]' dangerouslySetInnerHTML={{ __html: details.description }}></div>}
                            </div>

                            <div className='mt-4'>
                                <h1 className='text-[20px] sm:text-[25px] font-bold mb-2'>System requirements for PC</h1>
                                <p className='mb-6 text-[14px] sm:text-[16px]'>
                                    Minimum:<br />
                                    • Requires a 64-bit processor and operating system<br />
                                    • OS: Windows 7 - Service Pack 1 (6.1.7601)<br />
                                    • Processor: Intel® Core™ i5-2500K / AMD FX-6300<br />
                                    • Memory: 8 GB RAM<br />
                                    • Graphics: Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB<br />
                                    • Network: Broadband Internet connection<br />
                                    • Storage: 150 GB available space<br />
                                    • Sound Card: Direct X Compatible<br />
                                    <br />Recommended:<br />
                                    • Requires a 64-bit processor and operating system<br />
                                    • OS: Windows 10 - April 2018 Update (v1803)<br />
                                    • Processor: Intel® Core™ i7-4770K / AMD Ryzen 5 1500X<br />
                                    • Memory: 12 GB RAM<br />
                                    • Graphics: Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB<br />
                                    • Network: Broadband Internet connection<br />
                                    • Storage: 150 GB available space<br />
                                    • Sound Card: Direct X Compatible<br />
                                </p>
                            </div>
                        </div>

                        {image && <Gallery image={image} />}
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Details