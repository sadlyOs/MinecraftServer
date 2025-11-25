import ServerBlock from "@/components/ui/ServerBlock/ServerBlock"
import ServerBlockMobile from "@/components/ui/ServerBlockMobile/ServerBlockMobile";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m"


export default function ServerSection() {
    const [isPressed, setIsPressed] = useState(false)

    function copyToClipboard() {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
        }, 2000);
        navigator.clipboard.writeText("82.100.12.1.1");
    }

    useEffect(() => {
        if (isPressed) {
            copyToClipboard()
        }
    }, [isPressed])

    return (
        <>
            <section className="container-response mx-auto px-4 pb-8 relative z-1 text-white">
                <div><h3 className="text-3xl font-bold py-4">Сервера</h3></div>
                <div className="flex flex-col items-center gap-10">
                    {/* <div className="rounded-2xl max-w-[610px] shadow-md">
                        <div className="w-full h-[60px] relative">
                            <img src={serverImg} alt="serverImg" className="absolute rounded-t-2xl w-full h-full object-fit" />
                        </div>
                        <div className="py-3 px-3.5 flex flex-col gap-3">
                            <div>
                                <div className="flex justify-between items-center">
                                    <h3>🔥MINELANDY🔥</h3>
                                    <div className="flex gap-2">
                                        <img src={star} alt="stars" />
                                        <span>4.3</span>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <p>Выживай в чистом ванильном мире, где каждый блок добыт собственными руками! Здесь тебя ждут дружелюбное комьюнити, честная экономика и настоящие приключения. Построй свою базу, исследуй огромный мир и стань легендой среди выживших!</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                                <div className="py-3 pl-4 bg-[#8A38F50D] rounded-2xl pr-10">
                                    <p className="text-sm text-gray-500 pb-1">Онлайн</p>
                                    <div className="flex gap-2">
                                        <img src={icon1} alt="profile" />
                                        <span>15 323</span>
                                    </div>
                                </div>
                                <div className="py-3 pl-4 bg-[#00C22A0D] rounded-2xl pr-10">
                                    <p className="text-sm text-gray-500 pb-1">Версия</p>
                                    <div className="flex gap-2">
                                        <img src={icon2} alt="profile" />
                                        <span>1.16.5</span>
                                    </div>
                                </div>
                                <div className="py-3 pl-4 bg-[#0059FF0D] rounded-2xl pr-10">
                                    <p className="text-sm text-gray-500 pb-1">Голосов</p>
                                    <div className="flex gap-2">
                                        <img src={icon3} alt="profile" />
                                        <span>5 323</span>
                                    </div>
                                </div>
                                <div className="py-3 pl-4 bg-[#FF80000D] rounded-2xl pr-10">
                                    <p className="text-sm text-gray-500 pb-1">Баллов</p>
                                    <div className="flex gap-2">
                                        <img src={icon4} alt="profile" />
                                        <span>15 323</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2.5 justify-center py-2 bg-[#00000008] rounded-3xl border border-gray-400 cursor-pointer">
                                    <img src={clipboard} alt="clipboard" />
                                    <p>play.MLegacy.net</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div className="w-full" key={index}>

                                <div className="hidden lg:block duration-150 hover:scale-102">
                                    <ServerBlock setIsPressed={setIsPressed}/>
                                </div>
                                <div className="lg:hidden">
                                    <ServerBlockMobile isPressed={isPressed} setIsPressed={setIsPressed}/>
                                </div>
                        </div>
                    ))
                    }
                </div>
            </section>

            <AnimatePresence>
                {isPressed && (
                    <m.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed bottom-5 left-1/2 -translate-x-1/2 text-center bg-blue-600 text-white backdrop-blur-3xl z-100 md:px-4 px-2 py-3 rounded-2xl md:text-[1rem] text-[0.7rem]"
                    >
                        <p>Успешно скопировано</p>
                    </m.div>
                )}

            </AnimatePresence>
        </>
    )
}