import { m } from "motion/react";
import scoreYellow from "@assets/header/scoreYellow.svg"
import pipette from "@assets/pipette.svg"
import stop from "@assets/stop.svg"
import promotion from "@assets/promotion.png"
import Button from "@/components/ui/Button/Button";
import "./ServerPromotionPage.css"

export default function ServerPromotionPage() {
    return (
        <m.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-[#333]">
            <div className="container mx-auto px-4 flex flex-col gap-4 md:py-40 py-20 text-white">
                <div className="p-5">
                    <div className="promotion">
                        <div className="text-center pb-5">
                            <h2 className="pb-2 text-xl font-bold">Как раскрутить сервер майнкрафт</h2>
                            <p className="text-gray-main text-[0.7rem] md:text-[1rem]">Благодаря привлеченным игрокам, вы не только окупите<br/>рекламу вашего сервера, но и получите прибыль</p>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-5">
                            <div className="bg-gray-transparent flex-1 md:shrink-0 p-5 rounded-2xl">
                                <div className="flex md:text-xl items-center gap-3 font-semibold">
                                    <img src={scoreYellow} className="w-6 h-6" alt="scoreYellow" />
                                    <p>Купить промо-баллы</p>
                                </div>
                                <div className="pb-7">
                                    <ul className="list-disc list-inside mt-4 flex flex-col gap-2 text-gray-main">
                                        <li>Скидка до 15% при покупке первых мест</li>
                                        <li>Увеличивает посещаемость сервера в 20 раз</li>
                                        <li>Возможность покупки от 2 баллов</li>
                                    </ul>
                                </div>
                                <Button label={"Купить промо баллы"} style={"w-full py-4 bg-gray-transparent text-xl hover:scale-105"} />
                            </div>
                            <div className="bg-gray-transparent flex-1 md:shrink-0 p-5 rounded-2xl flex flex-col">
                                <div className="flex md:text-xl items-center gap-3 font-semibold">
                                    <img src={stop} className="w-6 h-6" alt="scoreYellow" />
                                    <p>Мультиплеер MisterLauncher</p>
                                </div>
                                <div className="flex-1 pb-7">
                                    <p className="text-gray-main mt-4">Всего 5 статичных мест. Успейте занять свое место и увеличить посещаемость сервера</p>
                                </div>
                                <Button label={"Купить промо баллы"} style={"w-full py-4 bg-gray-transparent text-xl hover:scale-105"} />
                            </div>
                            <div className="bg-gray-transparent flex-1 md:shrink-0 p-5 rounded-2xl flex flex-col">
                                <div className="flex md:text-xl items-center gap-3 font-semibold">
                                    <img src={pipette} className="w-6 h-6" alt="scoreYellow" />
                                    <p>Выделить сервер цветом</p>
                                </div>
                                <div className="flex-1 pb-7">
                                    <ul className="list-disc list-inside mt-4 flex flex-col gap-2 text-gray-main">
                                        <li>Скидка до 15% при покупке первых мест</li>
                                        <li>Увеличивает посещаемость сервера в 20 раз</li>
                                        <li>Возможность покупки от 2 баллов</li>
                                    </ul>
                                </div>
                                <Button label={"Купить промо баллы"} style={"w-full py-4 bg-gray-transparent text-xl hover:scale-105"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
    )
}