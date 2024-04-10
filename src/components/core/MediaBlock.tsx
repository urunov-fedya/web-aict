import React from 'react'
import { Link } from 'react-router-dom'

export type PropsPress = {
    id: number,
    date: string,
    description: string,
    imgPress: {
        url: string,
        alt: string,
    }
    typePress?: string,
    place?: string
    link: string,
}

type PressApp = {
    data: PropsPress
}

export const PressBlock: React.FC<PressApp> = ({ data }) => {
    return (
        <div className='w-[405px] flex-col flex'>
            <Link to={data.link}>
                <div className='rounded-md shadow-md flex justify-center items-center'>
                    <img src={data.imgPress.url} alt={data.imgPress.alt} />
                </div>
                <div className='p-[30px] flex flex-col bg-white text-textBlackAict shadow-md rounded-b-[10px]'>
                    {data.typePress && <div className='rounded-[5px] py-[10px] px-[18px] w-fit bg-grayAict '>
                        <p className='font-normal text-[11px]'>{data.typePress}</p>
                    </div>}
                    <h1 className={`font-bold text-wrap ${data.place ? '' : 'mt-[18px]'} text-2xl`}>
                        {data.description}
                    </h1>
                    {data.place &&
                        <p className='font-normal mt-[10px] text-primary text-[11px]'>{data.place}</p>
                    }
                    <p className='mt-[30px] font-normal text-base opacity-70 text-[#2E363E]'>{data.date}</p>
                </div>
            </Link>
        </div>
    )
}
