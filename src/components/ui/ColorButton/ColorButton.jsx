import { useState } from "react"

export default function ColorButton({title, style}) {
    const [clicked, setClicked] = useState(false)
    return (
        <div className="relative w-full">
            <button
            type="button"
            onClick={() => setClicked(!clicked)}
            className={`w-full py-2 cursor-pointer rounded-4xl duration-100 bg-gray-transparent`}
            style={{
                background: clicked ? style[2]: style[1],
                border: `2px solid ${style[0]}`
            }}
            >
                {title}
            </button>
        </div>
    )
}