import React, { useState, useEffect } from 'react'
import Product from './Product';

// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

const Products = () => {
    const BASE_URL = 'https://api.rawg.io/api/games?key=00d647439340449eae7acb7e965ca18b';
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [games, setGames] = useState([]);

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

    useEffect(() => {
        setIsLoading(true)
        fetch(`${BASE_URL}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setGames(data.results);
                setIsLoading(false)
                console.log(data);
            })
    }, [page])

    return (
        <div className='w-full h-auto pb-[20px] relative'>
            <select id="countries" className="bg-[#383838] border border-none text-white text-sm rounded-lg  outline-none block w-[170px] p-2">
                <option defaultValue="">Choose a Platforms</option>
                <option value="pc">PC</option>
                <option value="xbox">Xbox</option>
                <option value="playstation">PlayStation</option>
            </select>

            <span className='text-[#ffffff] flex relative left-0 mt-[20px]'>STORE</span>
            <div className='w-full h-auto rounded-t-[15px] mt-[20px] py-[10px] relative'>
                <div className='w-full h-auto bg-[#ffffff00] grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>

                    {games.map(game => (
                        !isLoading && <Product
                            key={game.id}
                            id={game.id}
                            released={game.released}
                            name={game.name}
                            cover={game.background_image}
                            pics={game.short_screenshots}
                            genres={game.genres}
                            platforms={game.parent_platforms}
                        />
                    ))}

                </div>
                <div className='mt-[30px] flex justify-center'>
                    <button onClick={nextPage} className='rounded-xl mr-6 text-[#ffffff] w-[100px] h-[35px] bg-[#363636]'>Next</button>
                    {
                        page >= 2 ?
                            <button onClick={previousPage} className='rounded-xl mr-6 text-[#ffffff] w-[100px] h-[35px] bg-[#363636]'>Previous</button> :
                            <button disabled={true} onClick={previousPage} className='rounded-xl mr-6 text-[#ffffff] w-[100px] h-[35px] bg-[#202020]'>Previous</button>
                    }

                </div>
            </div>
        </div>


    )
}

export default Products