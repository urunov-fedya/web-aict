import { FC } from "react"
import { TVerticalSliderProps } from "./types"
import { ButtonCom } from "../Button"

export const VerticalSlider: FC<TVerticalSliderProps> = ({ currentPoint, sliders }) => (
  <div className="overflow-hidden">
    <div
      style={{ transform: `translateY(${(currentPoint) * -424}px)` }}
      className="transition-all duration-300 min-h-full flex flex-col gap-6"
    >
      {sliders.map((slide, i) => (
        <div className="h-[400px] bg-white rounded-xl p-10" key={i}>
          <div className="h-full flex flex-1 flex-col justify-center items-center">
            <div className="flex flex-col flex-1">
              <h1 className="font-bold text-2xl mb-5">{slide.title}</h1>
              <div className="font-medium text-[#7B8B8D]">{slide.content}</div>
            </div>
            <div className="self-baseline">
              <ButtonCom txt="Подробнее о направлении" onClick={slide.action} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)