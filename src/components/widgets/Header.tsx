import React from 'react'
import { ButtonCom } from '../core/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'

export const Header = () => {

    const name = useSelector((state: RootState) => state.aict.name)

    return (
        <div className='px-[80px] py-5 flex justify-between'>
            <div className='flex items-start'>
                <div className='border-r-2 pr-[15px]'>
                    <img src='src/assets/simbal.svg' alt="gerb" />
                </div>
                <div className='flex pl-[15px]'>
                    <img src="src/assets/logo.svg" alt="logo" />
                    <div className='ml-[20px] text-xs font-semibold text-wrap'>
                        <h1>{name.value_1.toUpperCase()}</h1>
                        <h1>{name.value_2.toUpperCase()}</h1>
                    </div>
                </div>
            </div>
            <div>
                <ButtonCom txt='Версия для слабовидящих' py={28} />
            </div>
        </div>
    )
}
