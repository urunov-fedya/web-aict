import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { ProjectBlock } from '../core/projectBlock'


export const ProjectsCom = () => {

    const ProjectData = useSelector((state: RootState) => state.aict.ProjectData)

    return (
        <div className='pt-16 px-[80px] pb-16'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-4xl'>
                    Реализуемые проекты
                </h1>
                <a href="#" className='text-primary text-[18px] font-semibold'>Больше информации</a>
            </div>
            <div className='flex justify-between mt-[40px]'>
                {ProjectData.map((item) => (
                    <ProjectBlock key={item.urlImg} data={item}/>
                ))}
            </div>
        </div>
    )
}
