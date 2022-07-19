import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Product from '../components/games/Product';

const Collection = () => {
    const games = useSelector(state => state.collection);

    return (
        <div className='bg-[#141414] h-auto w-full px-[20px] lg:px-[40px] pt-[15px] transition-all duration-[500ms]' >
            <div className='w-full h-auto pb-[20px] relative'>
                <span className='text-[#ffffff] flex relative left-0 mt-[20px]'>COLLECTION</span>
                <div className='w-full h-auto rounded-t-[15px] mt-[20px] py-[10px] relative'>
                    <div className='w-full min-h-[300px] h-auto bg-[#ffffff00] grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>

                        {games.collection.map(game => (
                            <Product
                                key={game.id}
                                id={game.id}
                                released={game.released}
                                name={game.name}
                                cover={game.cover}
                                pics={game.pics}
                                genres={game.genres}
                                platforms={game.platforms}
                                slug={game.slug}
                            />
                        ))}
                        {games.collection.length === 0 &&
                            <div className='w-full text-white absolute text-[20px] flex flex-col items-center justify-center top-[00px] h-full'>
                                <h1>There is nothing here</h1>
                                <button className='mt-4 text-[14px] rounded-md w-200px h-[35px] bg-red-600'>
                                    <Link className='px-6 w-full h-full flex justify-center items-center' to='/Store'>
                                        Go to Store
                                    </Link>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection