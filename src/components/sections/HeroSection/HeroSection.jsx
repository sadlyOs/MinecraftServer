import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
    const headerText = useRef(null)
    const text = useRef(null)

    useGSAP(() => {
        gsap.to(headerText.current, {
            duration: 2,
            text: "Лучшие сервера Minecraft",
            ease: "back.inOut"
        })
        gsap.to(text.current, {
            duration: 2,
            text: "Лучший рейтинг и мониторинг Майнкрафт-серверов в России.<br />Ищи топовые сервера с мини-играми, модами и плагинами,<br /> читай отзывы и следи за онлайном.",
            ease: "back.inOut"
        })
    })

    return (
        <section
        id="#home"
        className="relative top-[-64px] containerw-full h-screen bg-[url('@assets/hero/hero.png')] bg-cover">
            <div className="text-white px-4 w-full h-full flex justify-center items-center bg-black-transparent">
                <div className="text-center">
                    <motion.h1
                    className="text-2xl md:text-4xl font-bold pb-2" ref={headerText}></motion.h1>
                    <motion.p
                    className="text-[0.6rem] md:text-[1.2rem]" ref={text}></motion.p>
                </div>
            </div>
        </section>
    )
}