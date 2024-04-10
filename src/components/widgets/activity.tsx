import { Button } from '@nextui-org/react'
import React from 'react'
import { ActivityBlock } from '../core/activityBlock'


export const Activity = () => {



    return (
        <div className='pt-16 px-[80px] pb-16'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-4xl'>
                    Деятельность  АИЦТ
                </h1>
                <a href="#" className='text-primary text-[18px] font-semibold'>Больше информации</a>
            </div>
            <ActivityBlock />
        </div>
    )
}
