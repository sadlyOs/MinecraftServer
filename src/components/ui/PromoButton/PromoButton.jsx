import { useState } from "react"

export default function PromoButton({title, style, sale}) {
    const [clicked, setClicked] = useState(false)
    return (
        <div className="relative w-full">
            <button
            type="button"
            onClick={() => setClicked(!clicked)}
            className={`w-full py-2 cursor-pointer rounded-4xl duration-100 ${clicked ? `border-2 border-[${style[0]}] bg-[${style[1]}]`: "bg-gray-transparent"}`}>
                {title}
            </button>
            {sale && <img className="absolute -top-3 -right-3" src={sale}/>}
        </div>
    )
}