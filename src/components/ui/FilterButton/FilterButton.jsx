import { useState } from "react"

export default function FilterButton({ tag, selected, onToggle }) {
    const [isPressed, setIsPressed] = useState(false)

    return (
        <button
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            key={tag.value}
            className={`px-2.5 py-0.5 rounded-full cursor-pointer ${selected.includes(tag.value) ? "bg-blue-600 text-white border-blue-600": "bg-badge-color text-white border-gray-700"} ${(isPressed ? 'scale-95!': "")} hover:scale-105 hover:translate-y-[-0.5px] transition-transform duration-200`}
            onClick={() => onToggle(tag.value)}
            >
                {tag.label}
        </button>
    )
}