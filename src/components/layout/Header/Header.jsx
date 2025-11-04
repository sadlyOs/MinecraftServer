import icon from "@assets/header/icon.png"
import logo from "@assets/header/logo.png"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from 'motion/react'
import './Header.css'
import { useEffect, useState } from "react"
import { Link } from 'react-scroll';

export default function Header() {
    const [burger, setBurger] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            setIsScrolled(scrollTop > 150)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`text-white sticky top-0 z-10 ` + (isScrolled ? "backdrop-blur-2xl bg-black-transparent" : "")}>
            <div className="relative">
                <div className="container mx-auto p-4">
                    <div className="flex justify-between items-center">
                        <div className="relative z-10 cursor-pointer">
                            <Link to="home" spy={true} smooth={true} offset={-70} duration={100}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div>
                            <nav className="hidden md:block">
                                <ul className="flex gap-7 text-sm font-light">
                                    {[['Скачать Minecraft', '#'], ['Создать сервер', '#'], ['Хостинг', '#'], ['Моды', '#']].map((item, index) => (
                                        <NavLink key={index} to={item[1]} className="duration-100 hover:text-gray-400">{item[0]}</NavLink>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <div className="hidden md:block">
                                <img src={icon} alt="log icon" />
                            </div>
                            <div onClick={() => setBurger(!burger)} className={"md:hidden burger " + (burger ? "active": "")}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {burger && (
                    <motion.div
                    initial={{x: -100, opacity: 0}}
                    animate={{x: -0, opacity: 1}}
                    exit={{x: -100, opacity: 0}}
                    transition={{duration: 0.4}}
                    className="md:hidden absolute inset-0 w-full min-h-screen bg-[#333333] px-4">
                        <nav className="py-20">
                            <ul className="flex flex-col gap-3 text-sm font-semibold">
                                {[['Скачать Minecraft', '#'], ['Создать сервер', '#'], ['Хостинг', '#'], ['Моды', '#']].map((item, index) => (
                                    <NavLink key={index} to={item[1]} className="bg-[#404040] p-2 rounded-2xl duration-100 hover:text-gray-400">{item[0]}</NavLink>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}