import React, { useState, useEffect } from 'react'
import Product from './Product';

const Products = () => {
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
        fetch(`https://api.rawg.io/api/games?key=00d647439340449eae7acb7e965ca18b&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setGames(data.results)
                console.log(data)
            })
    }, [page])

    return (
        <div className='w-full h-auto bg-[#262735] rounded-t-[15px] px-[30px] py-[60px] relative'>
            <span className='text-[#ffffff] absolute left-4 top-4'>STORE</span>
            <div className='w-full h-auto bg-[#262735] rounded-t-[15px] px-[10px] py-[10px] relative'>
                <div className='w-full h-auto bg-[#ffffff00] grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>

                    {games.map(game => (
                        <Product
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            cover={game.background_image}
                            platforms={game.parent_platforms}
                        />
                    ))}

                </div>
                <div className='mt-6'>
                    <button onClick={nextPage} className='rounded-xl mr-6 text-[#ffffff] w-[100px] h-[40px] bg-[#4f5fec]'>Next</button>
                    {
                        page >= 2 ?
                            <button onClick={previousPage} className='rounded-xl mr-6 text-[#ffffff] w-[100px] h-[40px] bg-[#4f5fec]'>Previous</button> :
                            <button disabled={true} onClick={previousPage} className='rounded-xl mr-6 text-[#ffffff] w-[100px] h-[40px] bg-[#535883]'>Previous</button>
                    }

                </div>
            </div>
        </div>


    )
}

export default Products