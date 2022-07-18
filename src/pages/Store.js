import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Products from '../components/games/Products'
import { BiSearch } from 'react-icons/bi'

const Store = () => {
    const [platform, setPlatform] = useState('1');
    const [search, setSearch] = useState('');

    const param = useParams();

    const filterPlatform = (event) => {
        setPlatform(event.target.value)
    }

    const inputHandler = (event) => {
        setSearch(event.target.value)
    }

    return (

        <div className='bg-[#141414] w-full px-[20px] lg:px-[40px] pt-[15px] transition-all duration-[500ms]' >
            <div className='flex justify-between items-center'>
                <select onChange={filterPlatform} id="countries" className="bg-[#383838] border border-none text-white text-[12px] rounded-lg  outline-none block w-[143px] lg:w-[170px] lg:text-[14px] p-2">
                    <option value="1">Choose a Platforms</option>
                    <option value="1">PC</option>
                    <option value="3">Xbox</option>
                    <option value="2">PlayStation</option>
                </select>
                <div className='relative flex items-center'>
                    <input onChange={inputHandler} spellCheck={false} type="text" placeholder='Search Game' className='bg-transparent border-[1px] border-[#b1b1b1]  outline-none w-[200px] h-[37px] text-[13px] rounded-lg pl-8 text-white' />
                    <BiSearch color='#ffffff' className='absolute left-2' />
                </div>
            </div>

            <Products param={parseInt(param.page)} platform={platform} search={search} />
        </div>

    )
}

export default Store