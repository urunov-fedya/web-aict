import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { PressBlock, PropsPress } from '../core/MediaBlock'

type Block = {
    data: PropsPress[],
    name: string,
    link: string,
}

export const MediaCom = ({ data, name, link }: Block) => {



    return (
        <div className='pt-16 px-[80px] pb-16'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-4xl'>
                    {name}
                </h1>
                <a href="#" className='text-primary text-[18px] font-semibold'>{link}</a>
            </div>
            <div className='flex justify-between mt-[40px]'>
                {data.map((item) => (
                    <PressBlock key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}
