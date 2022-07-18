import React, { useState, useEffect } from 'react'

import Loading from './Loading';
import PageCount from './PageCount';
import Product from './Product';

const Products = (props) => {
    const BASE_URL = 'https://api.rawg.io/api/games?key=00d647439340449eae7acb7e965ca18b';
    const [isLoading, setIsLoading] = useState(true)
    // const [page, setPage] = useState(1);
    const [games, setGames] = useState([]);
    const [pages, setPages] = useState('');


    useEffect(() => {
        // setPage(props.param)
        setIsLoading(true);
        fetch(`${BASE_URL}&parent_platforms=${props.platform}&page=${props.param}&search=${props.search}`)
            .then(res => res.json())
            .then(data => {
                setGames(data.results);
                setPages(Math.ceil(data.count / 20));
                setIsLoading(false)
            })
    }, [props.param, props.platform, props.search])

    return (
        <div className='w-full h-auto pb-[20px] relative'>
            <span className='text-[#ffffff] flex relative left-0 mt-[20px]'>STORE</span>
            <div className='w-full h-auto rounded-t-[15px] mt-[20px] py-[10px] relative'>
                <div className='w-full h-auto bg-[#ffffff00] grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>

                    {!isLoading ? games.map(game => (
                        <Product
                            key={game.id}
                            id={game.id}
                            released={game.released}
                            name={game.name !== undefined && game.name}
                            cover={game.background_image}
                            pics={game.short_screenshots}
                            genres={game.genres}
                            platforms={game.parent_platforms}
                            slug={game.slug}
                        />
                    )) : Array.from(Array(20), (_, i) => <Loading key={i} />)
                    }
                    {
                        (pages === 0 && !isLoading) && 
                        <div className='absolute flex justify-center items-center w-full text-white'>
                            <p>Not Found</p>
                        </div>
                    }

                </div>
                <PageCount
                    page={props.param}
                    pages={pages}
                />
            </div>
        </div>
    )
}

export default Products