import React, { useState, useEffect } from 'react';


import { FaWindows } from 'react-icons/fa';
import { FaPlaystation } from 'react-icons/fa';
import { FaXbox } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const [platforms, setPlatforms] = useState([]);
    const [Rdate, setRDate] = useState({});
    const [image, setImage] = useState(props.cover);
    const [chengeActive, setChengeActive] = useState(false);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        //platform
        let plats = [];
        props.platforms.map(plat => {
            return plats.push(plat.platform.name)
        })
        setPlatforms(plats);

        //time 
        const date = new Date()
        const released = props.released

        const dateHandler = () => {
            const Rmonth = released.slice(5, 7);
            date.setMonth(Rmonth - 1);
            const month = date.toLocaleString('en-US', {
                month: 'short',
            });
            setRDate({ 'day': released.slice(8, 10), 'year': released.slice(0, 4), 'month': month });
        }
        released === null ? setRDate('-') : dateHandler()
    }, [props.platforms, props.released])

    const activChengeImage = (state) => {
        if (state === 'enter') {
            setChengeActive(true);
        } else {
            setChengeActive(false);
            setImage(props.cover);
            setIndex(-1);
        }
    }

    const chengImageHandler = (image, index) => {
        setImage(image);
        setIndex(index);
    }

    return (
        <div onMouseEnter={() => { activChengeImage('enter') }} onMouseLeave={() => { activChengeImage('leave') }} className='hover:scale-[103%] transition-all duration-[80ms] w-full h-[100%]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#202020]'>
            <div className='w-full h-[clamp(85px,25vw,156px)] sm:h-[clamp(104px,17vw,172px)] lg:h-[clamp(172px,17vw,230px)] xl:h-[clamp(172px,13vw,191px)]  relative'>
                <img className='w-full h-full object-cover' src={image} alt="pix" />
                <ul className='absolute bottom-0 w-full h-full flex justify-center px-[10px]'>
                    {chengeActive && props.pics.map(pic => (
                        <li key={pic.id}
                            onMouseEnter={() => { chengImageHandler(pic.image, pic.id) }}
                            className='relative h-full w-full mx-1'
                        >
                            <span className={pic.id === index ? 'absolute bottom-2 w-full h-[4px] bg-[#ffffff] rounded-sm' : 'absolute bottom-2 w-full h-[4px] bg-[#ffffff9f] rounded-sm'}></span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-full h-auto py-[15px] px-[10px] text-white flex flex-col'>
                <span className='w-full text-[14px] sm:text-[16px] font-medium hover:text-[#cacaca] overflow-hidden text-ellipsis whitespace-nowrap'>
                    <Link to='/'>{props.name}</Link>
                </span>

                {<span className='text-[12px] sm:text-[14px] flex my-2 w-[100px]'>
                    {platforms.find(plat => plat === 'PC') && <FaWindows className='mr-2 text-[14px]' />}
                    {platforms.find(plat => plat === 'PlayStation') && <FaPlaystation className='mr-2 text-[14px]' />}
                    {platforms.find(plat => plat === 'Xbox') && <FaXbox className='mr-2 text-[14px]' />}

                </span>}

                <div className='text-[9px] sm:text-[12px] flex justify-between border-[#696969] border-b-[1px] py-[10px]'>
                    <span className='text-[#696969]'>Release date:</span>
                    <span>{Rdate === '-' ? '-' : `${Rdate.month} ${Rdate.day}, ${Rdate.year}`}</span>
                </div>

                <div className='text-[9px] sm:text-[12px] flex justify-between py-[10px]'>
                    <span className='text-[#696969]'>Genres:</span>
                    <span>{props.genres.length === 0 ? "-" : props.genres[0].name}</span>
                </div>

                <button className='hover:text-[#FAD860] bg-[#303030] h-[30px] mt-[10px] rounded-[5px] text-[12px] sm:text-[14px] text-start pl-[10px] transition-all duration-200'>
                    <Link className='flex w-full h-full items-center' to={`/Details/${props.slug}`}>
                        Show more details
                    </Link>
                </button>
                <button className='hover:text-[#FAD860] bg-[#303030] h-[30px] mt-[10px] rounded-[5px] text-[12px] sm:text-[14px] text-start pl-[10px] transition-all duration-200'>
                    <Link className='flex w-full h-full items-center' to='/'>
                        Add to collection
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Product