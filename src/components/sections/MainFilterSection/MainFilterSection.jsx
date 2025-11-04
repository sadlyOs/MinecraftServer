import { useState } from "react"
import arrow from "@assets/mainFilter/arrow.svg"

export default function MainFilterSection() {
    const [version, setVersion] = useState(null)
    const [gameType, setGameType] = useState(null)
    const [miniGame, setMiniGame] = useState(null)
    const [mode, setMode] = useState(null)
    const [plugins, setPlugins] = useState(null)
    const [isPressed, setIsPressed] = useState(false)
    return (
        <section className="container mx-auto py-5">
            <div className="flex justify-center">
                <div onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)} className={`flex gap-3 items-center py-2.5 px-3 bg-white rounded-3xl cursor-pointer duration-150 ` + (isPressed ? "scale-80": "")}>
                    <div>
                        <p>{version ? version : "Версия игры"}</p>
                    </div>
                    <div>
                        <img className="pt-1" src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}