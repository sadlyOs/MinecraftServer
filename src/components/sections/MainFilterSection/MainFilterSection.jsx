import { useRef, useState } from "react"
import MainFilterItem from "@/components/ui/MainFilterItem/MainFilterItem"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/src/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export default function MainFilterSection() {
    const [version, setVersion] = useState(null)
    const [gameType, setGameType] = useState(null)
    const [miniGame, setMiniGame] = useState(null)
    const [mode, setMode] = useState(null)
    const [plugins, setPlugins] = useState(null)
    const blockRef = useRef(null)

    useGSAP(() => {
        // Анимация элемента
        gsap.from(blockRef.current, {
        opacity: 0, // Начинаем с прозрачного
        y: 50,      // Смещаем на 50px вниз
        scrollTrigger: {
            trigger: blockRef.current, // Элемент, который запускает анимацию
            start: 'top 80%',         // Анимация начнется, когда верх элемента достигнет 80% высоты вьюпорта
            end: 'bottom 20%',        // Анимация закончится, когда низ элемента достигнет 20% высоты вьюпорта
                             // Анимация будет плавно следовать за прокруткой
        }
        });
    })

    return (
        <section className="container mx-auto py-5" ref={blockRef}>
            <div className="flex flex-wrap justify-center gap-1.5 text-[0.8rem] md:text-[1rem]">
                <MainFilterItem value={version} defaultValue={"Версия игры"} setValue={setVersion}/>
                <MainFilterItem value={gameType} defaultValue={"Режимы"} setValue={setGameType}/>
                <MainFilterItem value={miniGame} defaultValue={"Мини игры"} setValue={setMiniGame}/>
                <MainFilterItem value={mode} defaultValue={"Моды"} setValue={setMode}/>
                <MainFilterItem value={plugins} defaultValue={"Плагины"} setValue={setPlugins}/>
            </div>
        </section>
    )
}