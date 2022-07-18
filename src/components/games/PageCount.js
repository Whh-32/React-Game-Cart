import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PageCount = (props) => {
    const navigate = useNavigate()
    const getPage = (e) => {
        // props.onGetPage(parseInt(e.target.innerText))
        navigate(`/Store/${e.target.innerText}`)
    }
    return (
        <div className='mt-[30px] flex justify-center max-w-[400px] w-[35%] min-w-[320px] m-auto'>
            {
                props.page >= 2 ?
                    <button onClick={() => { navigate(`/Store/${props.page - 1}`) }} className='rounded-xl text-[#ffffff] w-[100px] h-[35px] bg-[#363636]'>Prev</button> :
                    <button disabled={true} onClick={() => { navigate(`/Store/${props.page - 1}`) }} className='rounded-xl text-[#ffffff] w-[100px] h-[35px] bg-[#202020]'>Prev</button>
            }
            <div className='flex mx-2 text-white overflow-y-auto w-[calc(100%-210px)] m-auto'>
                <div className='flex items-center justify-center text-white w-full'>
                    <span onClick={getPage} className='bg-[#252525] cursor-pointer hover:text-[#FAD860] rounded-sm h-[25px] min-w-[25px] px-[6px] flex justify-center mr-2'>1</span>
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
                    <span onClick={getPage} className='bg-[#252525] cursor-pointer hover:text-[#FAD860] rounded-sm h-[25px] flex justify-center px-[6px]'>{props.pages}</span>
                </div>
            </div>
            <button onClick={() => { navigate(`/Store/${props.page + 1}`) }} className='rounded-xl text-[#ffffff] w-[100px] h-[35px] bg-[#363636]'>
                <Link to={`/Store`}>Next</Link>
            </button>
        </div>
    )
}

export default PageCount