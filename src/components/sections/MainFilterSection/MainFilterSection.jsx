import { useState } from "react"
import MainFilterItem from "@/components/ui/MainFilterItem/MainFilterItem"
import arrow from "@assets/mainFilter/arrow.svg"

export default function MainFilterSection() {
    const [version, setVersion] = useState(null)
    const [gameType, setGameType] = useState(null)
    const [miniGame, setMiniGame] = useState(null)
    const [mode, setMode] = useState(null)
    const [plugins, setPlugins] = useState(null)
    return (
        <section className="container mx-auto py-5">
            <div className="flex flex-wrap justify-center gap-1.5 text-[0.8rem]">
                <MainFilterItem value={version} defaultValue={"Версия игры"} setValue={setVersion}/>
                <MainFilterItem value={gameType} defaultValue={"Режимы"} setValue={setGameType}/>
                <MainFilterItem value={miniGame} defaultValue={"Мини игры"} setValue={setMiniGame}/>
                <MainFilterItem value={mode} defaultValue={"Моды"} setValue={setMode}/>
                <MainFilterItem value={plugins} defaultValue={"Плагины"} setValue={setPlugins}/>
            </div>
        </section>
    )
}