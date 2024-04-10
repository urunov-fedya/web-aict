import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { ExpandLess } from "@mui/icons-material";

export const ExtraQuestion = () => {

    const extraQuestionState = useSelector((state: RootState) => state.aict.extraQuestionState)

    return (
        <div className='my-[64px] shadow-md mx-[80px] flex rounded-3xl bg-white'>
            <div className='py-[70px] pl-[70px] w-[55%]'>
                <h1 className='font-bold text-[40px]'>{extraQuestionState.label}</h1>
                <p className='font-light text-[22px] mb-[90px] mt-[30px] text-[#777B80]'>{extraQuestionState.describe}</p>
                <a href="#" className='font-semibold  text-[17px] text-primary'>Подробнее
                    <ExpandLess className="rotate-90 !fill-primary" />
                </a>
            </div>
            <div>
                <img src={extraQuestionState.imgUrl} alt="extraQuestionImg" />
            </div>
        </div>
    )
}
