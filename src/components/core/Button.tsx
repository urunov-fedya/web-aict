import React from 'react'
import { Button } from '@nextui-org/react'

type Props = {
  txt: string
  py?: number
}

export const ButtonCom = ({ txt, py }: Props) => {
  return (
    <Button className={`bg-greenAict text-white rounded-lg ${py ? `py-[${py}px]` : 'w-full'}`}>{txt}</Button>
  )
}
