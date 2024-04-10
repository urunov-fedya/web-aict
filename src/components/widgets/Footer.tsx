import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { SelectLanguage } from '../core/langSelect'

export const Footer = () => {

    const name = useSelector((state: RootState) => state.aict.name)
    const dataFooter = useSelector((state: RootState) => state.aict.dataFooter)
    const iconsFooter = useSelector((state: RootState) => state.aict.iconsFooter)



    return (
        <div className='px-[80px] pt-[80px] pb-[36px] flex flex-col  bg-[#222222]'>
            <div className='flex justify-between'>
                <div className='flex flex-col items-start text-white'>
                    <img src="src/assets/logoFooter.svg" alt="logo-footer" />
                    <div className='mt-4'>
                        <h1>{name.value_1.toUpperCase()}</h1>
                        <h1>{name.value_2.toUpperCase()}</h1>
                    </div>
                    <div className='flex mt-6 *:mr-4'>
                        {iconsFooter.map((item) => (
                            <a key={item.txt} href={item.link} className='last:mr-0'>
                                <img src={item.txt} alt={item.alt} />
                            </a>
                        ))}
                    </div>
                </div>
                {dataFooter.map((item) => (
                    <div key={item.name} className='flex flex-col items-start text-white'>
                        <h1 className='font-bold text-sm'>{item.name}</h1>
                        <ul className='*:mb-3  '>
                            {item.values.map((value) => (
                                <li key={value.txt} className='last:mb-0 first:mt-4'>
                                    <a href={value.link} className='text-sm font-normal'>{value.txt}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='flex justify-between items-center mt-[72px] border-t-1 border-[#D0D5DD] pt-[24px]'>
                <div className='text-white'>
                    © 2024 Copyright
                </div>
                <div className='text-white'>
                    <SelectLanguage />
                </div>
            </div>
        </div>
    )
}
