import React from 'react'

const PageCount = (props) => {
    const getPage = (e) => {
        props.onGetPage(parseInt(e.target.innerText))
    }

    return (
        <div className='mt-[30px] flex justify-center w-[80%] m-auto'>
            {
                props.page >= 2 ?
                    <button onClick={props.onPrevPage} className='rounded-xl text-[#ffffff] w-[100px] h-[35px] bg-[#363636]'>Prev</button> :
                    <button disabled={true} onClick={props.onPrevPage} className='rounded-xl text-[#ffffff] w-[100px] h-[35px] bg-[#202020]'>Prev</button>
            }
            <div className='flex items-center justify-center mx-2 text-white overflow-auto'>
                <div className='flex items-center justify-center mx-2 text-white w-full'>
                    <span onClick={getPage} className='bg-[#252525] cursor-pointer hover:text-[#FAD860] rounded-sm h-[25px] w-[25px] flex justify-center mr-2'>1</span>
                    <div className='flex items-center justify-center'>
                        <span onClick={getPage} className='bg-[#252525] cursor-pointer hover:text-[#FAD860] rounded-sm h-[25px] px-[6px] min-w-[25px] flex justify-center mr-2'>
                            {props.page < props.pages / 2 ? props.page + 1 : props.page - 3}
                        </span>
                        <span onClick={getPage} className='bg-[#252525] cursor-pointer hover:text-[#FAD860] rounded-sm h-[25px] px-[6px] min-w-[25px] flex justify-center mr-2'>
                            {props.page < props.pages / 2 ? props.page + 2 : props.page - 2}
                        </span>
                        <span onClick={getPage} className='bg-[#252525] cursor-pointer hover:text-[#FAD860] rounded-sm h-[25px] px-[6px] min-w-[25px] flex justify-center mr-2'>
                            {props.page < props.pages / 2 ? props.page + 3 : props.page - 1}
                        </span>
                    </div>
                    <span onClick={getPage} className='bg-[#252525] cursor-pointer hover:text-[#FAD860] rounded-sm h-[25px] min-w-[25px] flex justify-center px-[6px]'>{props.pages}</span>
                </div>
            </div>
            <button onClick={props.onNextPage} className='rounded-xl text-[#ffffff] w-[100px] h-[35px] bg-[#363636]'>Next</button>
        </div>
    )
}

export default PageCount