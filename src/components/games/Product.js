import React, { useState, useEffect } from 'react';

import { FaWindows } from 'react-icons/fa';
import { FaPlaystation } from 'react-icons/fa';
import { FaXbox } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const [platforms, setPlatforms] = useState([]);

    useEffect(() => {
        let plats = [];
        props.platforms.map(plat => {
            return plats.push(plat.platform.name)
        })
        setPlatforms(plats);
    }, [props.platforms])

    const movieHandler = () => {
        fetch(`https://api.rawg.io/api/games/${props.id}/movies?key=00d647439340449eae7acb7e965ca18b`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
            })
        console.log("ok..")
    }


    return (
        <div onMouseEnter={movieHandler} className='w-full h-[100%]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#161724]'>
            <div className='w-full xl:h-[123px] lg:h-[162px]'>
                <img className='w-full h-full object-cover' src={props.cover} alt="pix" />
            </div>
            <div className='w-full h-auto py-[15px] px-[10px] text-white flex flex-col'>
                <span className='w-full font-medium hover:text-[#cacaca] overflow-hidden text-ellipsis whitespace-nowrap'>
                    <Link to='/'>{props.name}</Link>
                </span>
                <span className='text-[12px] flex my-2'>
                    {platforms.find(plat => plat === 'PC') && <FaWindows className='mr-2 text-[14px]' />}
                    {platforms.find(plat => plat === 'PlayStation') && <FaPlaystation className='mr-2 text-[14px]' />}
                    {platforms.find(plat => plat === 'Xbox') && <FaXbox className='mr-2 text-[14px]' />}

                </span>
                <button className='bg-red-500 mt-[10px] rounded-[5px]'>add to cart</button>
            </div>
        </div>
    )
}

export default Product