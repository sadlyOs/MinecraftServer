import icon from "@assets/header/icon.png"
import logo from "@assets/header/logo.png"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from 'motion/react'
import './Header.css'
import { useEffect, useState } from "react"
import { Link } from 'react-scroll';
import facebook from "@assets/header/facebook.svg"
import telegram from "@assets/header/telegram.svg"
import vk from "@assets/header/vk.svg"
import youtube from "@assets/header/youtube.svg"

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
        <header className={`text-white fixed top-0 left-0 w-full h-[60px] z-10 ` + (isScrolled ? "bg-black-transparent" : "")}>
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
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: 100, opacity: 0}}
                    transition={{duration: 0.4}}
                    className="md:hidden fixed top-0 right-0 backdrop-blur-3xl min-h-screen">
                        <div className="flex flex-col h-screen pb-10">
                            <div className="pl-4 py-6.5">
                                <img src={icon} alt="icon" />
                            </div>
                            <nav className="flex-1 py-5 w-full relative">
                                <ul className="flex flex-col gap-3 text-sm font-semibold">
                                    {[['Акаунт', '#'], ['Добавить сервер', '#'], ['Мои сервера', '#'], ['Пополнить баланс', '#'], ['Скачать Minecraft', '#'], ['Создать сервер', '#'], ['Хостинг', '#'], ['Моды', '#']].map((item, index) => (
                                        <NavLink key={index} to={item[1]} className="link relative px-4 py-2 duration-100 hover:text-gray-400">{item[0]}</NavLink>
                                    ))}
                                </ul>
                            </nav>
                            <div className="flex justify-center items-center gap-3">
                                <a href="https://google.com"><img src={facebook} alt="facebook" /></a>
                                <a href="https://google.com"><img src={vk} alt="vk" /></a>
                                <a href="https://google.com"><img src={youtube} alt="youtube" /></a>
                                <a href="https://google.com"><img src={telegram} alt="telegram" /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}