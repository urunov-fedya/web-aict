import { Button } from '@nextui-org/react'

type Props = {
  txt: string
  py?: number
  onClick?: () => void;
}

export const ButtonCom = ({ txt, py, onClick }: Props) => {
  return (
    <Button
      className={`bg-greenAict text-white rounded-lg ${py ? `py-[${py}px]` : 'w-full'}`}
      onClick={onClick}
    >
      {txt}
    </Button>
  )
}
