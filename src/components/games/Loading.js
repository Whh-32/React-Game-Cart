import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <SkeletonTheme baseColor="#363636" highlightColor="#444">
        <div  className='transition-all duration-[80ms] w-full h-[100%]  aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden xl:aspect-w-6 xl:aspect-h-8 bg-[#202020]'>
                <div className='w-full h-[clamp(85px,25vw,156px)] sm:h-[clamp(104px,17vw,172px)] lg:h-[clamp(172px,17vw,230px)] xl:h-[clamp(172px,13vw,191px)] relative'>
                    <Skeleton className='h-full absolute top-[-4px]' />
                </div>
                <div className='w-full h-auto py-[15px] px-[10px] text-white flex flex-col'>
                    <span className='w-full text-[14px] sm:text-[16px] font-medium hover:text-[#cacaca] overflow-hidden text-ellipsis whitespace-nowrap'><Skeleton className='h-[18px] absolute top-[-4px]' /></span>

                    <span className='text-[12px] sm:text-[14px] flex my-2 w-[100px]'>
                        <span className='mr-2 h-[14px]'><Skeleton className='mr-2 h-[100%]' width={80} height={14} /></span>
                    </span>

                    <div className='text-[9px] sm:text-[12px] flex justify-between border-[#696969] border-b-[1px] py-[10px]'>
                        <span className='text-[#696969]'><Skeleton className='h-[16px]' width={40} /></span>
                        <span><Skeleton className='h-[16px]' width={40} /></span>
                    </div>

                    <div className='text-[9px] sm:text-[12px] flex justify-between py-[10px]'>
                        <span className='text-[#696969]'><Skeleton className='h-[16px]' width={55} /></span>
                        <span><Skeleton className='h-[16px]' width={55} /></span>
                    </div>

                    <Skeleton className='h-[30px] mt-[10px] rounded-[5px] text-[12px] sm:text-[14px] text-start pl-[10px] transition-all duration-200' width='100%' />
                    <Skeleton className='h-[30px] mt-[10px] rounded-[5px] text-[12px] sm:text-[14px] text-start pl-[10px] transition-all duration-200' width='100%' />
                </div>
            </div>
    </SkeletonTheme>
  )
}

export default Loading