import { useState } from "react"
import arrow from "@assets/mainFilter/arrow.svg"
export default function MainFilterItem({ value, defaultValue }) {
    const [isPressed, setIsPressed] = useState(false)
    return (
        <div onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)} className={`flex gap-3 items-center py-2.5 px-3 bg-white rounded-3xl cursor-pointer duration-150 ` + (isPressed ? "scale-80": "")}>
            <div>
                <p>{value ? value : defaultValue}</p>
            </div>
            <div>
                <img className="pt-1" src={arrow} alt="" />
            </div>
        </div>
    )
}