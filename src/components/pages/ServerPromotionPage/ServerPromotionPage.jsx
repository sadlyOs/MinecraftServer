import { m } from "motion/react";
import scoreYellow from "@assets/header/scoreYellow.svg"
import pipette from "@assets/pipette.svg"
import stop from "@assets/stop.svg"
import promotion from "@assets/promotion.png"
import Button from "@/components/ui/Button/Button";
import scoreCircle from "@assets/promotion/scoreCircle.svg"
import profiles from "@assets/promotion/profiles.svg"
import any from "@assets/promotion/any.svg"
import setting from "@assets/promotion/setting.svg"
import reload from "@assets/promotion/reload.svg"
import five from "@assets/promotion/5.svg"
import ModalPromo from "@/components/ui/ModalPromo/ModalPromo";
import ModalColor from "@/components/ui/ModalColor/ModalColor";
import "./ServerPromotionPage.css"
import { useState } from "react";

export default function ServerPromotionPage() {
    const [isPromo, setIsPromo] = useState(false)
    const [isColor, setIsColor] = useState(false)
    return (
        <>
            <div className="min-h-screen bg-[#333]">
                <div className="container mx-auto flex flex-col gap-4 md:py-40 py-20 text-white">
                    <div className="p-5 flex flex-col gap-15">
                        <m.div
                        initial={{x: -300, opacity: 0 }}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 2, type: "spring"}}
                        className="promotion">
                            <div className="text-center pb-5">
                                <h2 className="pb-2 text-xl font-bold">Как раскрутить сервер майнкрафт</h2>
                                <p className="text-gray-main text-[0.7rem] md:text-[1rem]">Благодаря привлеченным игрокам, вы не только окупите<br/>рекламу вашего сервера, но и получите прибыль</p>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row gap-5">
                                <div className="bg-gray-transparent flex-1 md:shrink-0 p-5 rounded-2xl backdrop-blur-2xl">
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
                                    <Button handleClick={() => setIsPromo(true)} label={"Купить промо баллы"} style={"w-full py-4 bg-gray-transparent md:text-xl hover:scale-105"} />
                                </div>
                                <div className="bg-gray-transparent flex-1 md:shrink-0 p-5 rounded-2xl flex flex-col backdrop-blur-2xl">
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
                                    <Button handleClick={() => setIsColor(true)} label={"Выделить цветом"} style={"w-full py-4 bg-gray-transparent md:text-xl hover:scale-105"} />
                                </div>
                            </div>
                        </m.div>
                        <m.div
                        initial={{x: 300, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 2, type: "spring", stiffness: 50}}
                        viewport={{once: true}}
                        key={location.pathname}
                        >
                            <div className="text-center pb-5">
                                <h2 className="pb-2 text-xl font-bold">Твой сервер — в топе</h2>
                                <p className="text-gray-main text-[0.7rem] md:text-[1rem]">Хочешь больше игроков? Мы поможем вывести сервер на новый уровень и залить онлайн по полной.</p>
                            </div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                                <div className="py-5 px-10 border border-gray-transparent rounded-3xl text-center flex flex-col items-center">
                                    <img src={scoreCircle} alt="scoreCircle" />
                                    <h3 className="text-[1.2rem] md:text-xl font-semibold pt-4">Окупаемость и профит</h3>
                                    <p className="text-gray-main text-[0.8rem] md:text-[1rem]">Ты не только привлекаешь игроков, но и зарабатываешь больше за счёт донатов. Реклама реально работает.</p>
                                </div>
                                <div className="py-5 px-10 border border-gray-transparent rounded-3xl text-center flex flex-col items-center">
                                    <img src={profiles} alt="scoreCircle" />
                                    <h3 className="text-[1.2rem] md:text-xl font-semibold pt-4">Привлекай и зарабатывай</h3>
                                    <p className="text-gray-main text-[0.8rem] md:text-[1rem]">С нами реклама реально окупается. Чем больше игроков, тем выше донат. Всё просто.</p>
                                </div>
                                <div className="py-5 px-10 border border-gray-transparent rounded-3xl text-center flex flex-col items-center">
                                    <img src={any} alt="scoreCircle" />
                                    <h3 className="text-[1.2rem] md:text-xl font-semibold pt-4">Работаем стабильно</h3>
                                    <p className="text-gray-main text-[0.8rem] md:text-[1rem]">Надёжность, скорость и поддержка. Ты занимаешься игрой. Мы приводим игроков
                                        .</p>
                                </div>
                                <div className="py-5 px-10 border border-gray-transparent rounded-3xl text-center flex flex-col items-center">
                                    <img src={setting} alt="setting" />
                                    <h3 className="text-[1.2rem] md:text-xl font-semibold pt-4">Гибкая настройка продвижения</h3>
                                    <p className="text-gray-main text-[0.8rem] md:text-[1rem]">Выдели сервер цветом, подними в топ, добавь баннер. Продвигайся как хочешь.</p>
                                </div>
                                <div className="py-5 px-10 border border-gray-transparent rounded-3xl text-center flex flex-col items-center">
                                    <img src={reload} alt="reload" />
                                    <h3 className="text-[1.2rem] md:text-xl font-semibold pt-4">Постоянное обновление базы</h3>
                                    <p className="text-gray-main text-[0.8rem] md:text-[1rem]">Мы ежедневно проверяем сервера, чтобы игроки видели только живые и актуальные проекты.</p>
                                </div>
                                <div className="py-5 px-10 border border-gray-transparent rounded-3xl text-center flex flex-col items-center">
                                    <img src={five} alt="five" />
                                    <h3 className="text-[1.2rem] md:text-xl font-semibold pt-4">Запуск за 5 минут</h3>
                                    <p className="text-gray-main text-[0.8rem] md:text-[1rem]">Добавить сервер и начать продвигать можно буквально за несколько минут — без лишней бюрократии.</p>
                                </div>
                            </div>
                        </m.div>
                    </div>
                </div>
            </div>
            <ModalPromo isOpen={isPromo} onClose={() => setIsPromo(false)}/>
            <ModalColor isOpen={isColor} onClose={() => setIsColor(false)}/>

        </>
    )
}