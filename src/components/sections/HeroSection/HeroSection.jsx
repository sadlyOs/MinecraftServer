import { useEffect, useState } from "react";
import { motion } from "motion/react";
export default function HeroSection() {
    return (
        <section
        id="#home"
        className="relative top-[-64px] containerw-full h-screen bg-[url('@assets/hero/hero.png')] bg-cover">
            <div className="text-white px-4 w-full h-full flex justify-center items-center bg-black-transparent">
                <div className="text-center">
                    <motion.h1
                    initial={{x: -400, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1}}
                    className="text-2xl md:text-4xl font-bold pb-2">Лучшие сервера Minecraft</motion.h1>
                    <motion.p
                    initial={{x: 400, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 0.4}}
                    className="text-[0.6rem] md:text-[1.2rem]">Лучший рейтинг и мониторинг Майнкрафт-серверов в России.<br />Ищи топовые сервера с мини-играми, модами и плагинами,<br /> читай отзывы и следи за онлайном.</motion.p>
                </div>
            </div>
        </section>
    )
}