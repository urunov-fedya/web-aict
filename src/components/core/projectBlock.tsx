import React, { FC } from 'react'

export type PropsProject = {
    urlImg: string,
    title: string,
    describe: string,
    link: string,
}

type ProjectApp = {
    data: PropsProject
}

export const ProjectBlock: React.FC<ProjectApp> = ({ data }) => {
    return (
        <div className='py-[40px] w-[406px] shadow-md px-[42px] rounded-[10px] bg-white flex flex-col items-start'>
            <div>
                <img src={data.urlImg} alt='icon-project' />
            </div>
            <div className='w-[80%] flex flex-col mt-6'>
                <h2 className='font-semibold mb-[10px] text-[18px]'>{data.title}</h2>
                <p className='font-normal text-[14px] text-[#2E363E]'>{data.describe}</p>
            </div>
            <a href={data.link}></a>
        </div>
    )
}
