import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import PageCount from './PageCount';
import Product from './Product';

const Products = () => {
    const BASE_URL = 'https://api.rawg.io/api/games?key=00d647439340449eae7acb7e965ca18b';
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [games, setGames] = useState([]);
    const [pages, setPages] = useState('');

    const nextPage = () => {
        setPage(prev => {
            return prev + 1;
        });
    }

    const previousPage = () => {
        setPage(prev => {
            return prev - 1;
        })
    }

    const chengePage = (page) => {
        setPage(page)
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(`${BASE_URL}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setGames(data.results);
                setPages(Math.ceil(data.count/20));
                setIsLoading(false)
            })
    }, [page])

    return (
        <div className='w-full h-auto pb-[20px] relative'>
            <select id="countries" className="bg-[#383838] border border-none text-white text-[12px] rounded-lg  outline-none block w-[140px] lg:w-[170px] lg:text-[14px] p-2">
                <option defaultValue="">Choose a Platforms</option>
                <option value="pc">PC</option>
                <option value="xbox">Xbox</option>
                <option value="playstation">PlayStation</option>
            </select>

            <span className='text-[#ffffff] flex relative left-0 mt-[20px]'>STORE</span>
            <div className='w-full h-auto rounded-t-[15px] mt-[20px] py-[10px] relative'>
                <div className='w-full h-auto bg-[#ffffff00] grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>

                    {!isLoading ? games.map(game => (
                        <Product
                            key={game.id}
                            id={game.id}
                            released={game.released}
                            name={game.name}
                            cover={game.background_image}
                            pics={game.short_screenshots}
                            genres={game.genres}
                            platforms={game.parent_platforms}
                        />
                    )) : Array.from(Array(20), (_, i) => <Loading key={i} />)
                }

                </div>
                <PageCount 
                    page={page}
                    pages={pages}
                    onNextPage={nextPage}
                    onPrevPage={previousPage}
                    onGetPage={chengePage}
                />
            </div>
        </div>
    )
}

export default Products