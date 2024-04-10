import React from 'react'
import { ExtraQuestion } from '../../components/widgets/extraQuestion'
import { MediaCom } from '../../components/widgets/MediaCom'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { ProjectsCom } from '../../components/widgets/ProjectsCom'
import { Activity } from '../../components/widgets/activity'

export const Main = () => {

    // const dataPressBlock = {
    //     date: '6 февраля, 2024',
    //     description: 'Форум “Цифровая Экономика”',
    //     imgPress: {
    //         url: 'src/assets/pressBlock-1.svg',
    //         alt: 'press-conf',
    //     },
    //     typePress: 'Новости',
    //     link: '#'
    // }

    const MediaData = useSelector((state: RootState) => state.aict.MediaData)
    const PressData = useSelector((state: RootState) => state.aict.PressData)

    return (
        <div>
            <Activity />
            <MediaCom data={PressData} name='Пресс-центр' link='Все новости' />
            <MediaCom data={MediaData} name='Фото и видио' link='Вся медиа' />
            <ProjectsCom />
            <ExtraQuestion />
        </div>
    )
}
