import React, { useState } from 'react'
import { Button, image } from '@nextui-org/react'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { ButtonCom } from './Button'

export const ActivityBlock = () => {

    const ActivityButtonData = useSelector((state: RootState) => state.aict.ActivityButtonData)
    const ActivityBlockData = useSelector((state: RootState) => state.aict.ActivityBlockData)
    const [isActive, setActive] = useState<string>(ActivityButtonData[0].name)

    return (
        <div className='p-[25px] mt-[40px] flex justify-between bg-[#E9EAEF] rounded-lg'>
            <div className='flex flex-col items-start justify-start w-[32%] *:mb-[25px] bg-white p-[25px] rounded-lg'>
                {ActivityButtonData.map((item) =>
                    <Button onClick={() => setActive(item.name)} className={`bg-white last:mb-0 !px-0 w-full flex justify-start text-[18px] text-[#7D868D] ${isActive === item.name ? 'font-semibold text-[#383B43]' : 'font-medium'}`} key={item.id}>
                        <div className={`p-2 ${isActive === item.name ? 'bg-primary' : 'bg-[#EEF1F6]'} transition duration-300 ease-in-out  rounded-[10px]`}>
                            <img src={item.icon} className={`${isActive === item.name ? 'icon-active' : 'icon'}`} alt="icon" />
                        </div>
                        {item.name}
                    </Button>
                )}
            </div>
            <div className={`w-[65%] bg-white p-[40px] rounded-lg block-rotate `}>
                {ActivityBlockData.map((item) => (
                    <div key={item.txt}>
                        {isActive === item.txt && (
                            <div>
                                <h1 className='font-bold mb-[25px] text-2xl'>{item.txt}</h1>
                                <p className='font-medium mb-[79px] text-base text-[#7B8B8D]'>{item.link}</p>
                                <ButtonCom txt='Подробнее о направлении' />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
