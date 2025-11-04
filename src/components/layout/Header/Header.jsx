import icon from "@assets/header/icon.png"
import logo from "@assets/header/logo.png"
import { NavLink } from "react-router-dom"
import './Header.css'
import { useState } from "react"

export default function Header() {

    const [burger, setBurger] = useState(false)

    return (
        <header className="text-white bg-black relative">
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center">
                    <div>
                        <NavLink to='/'>
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div>
                        <nav className="hidden md:block">
                            <ul className="flex gap-7 text-sm font-light">
                                {[['Скачать Minecraft', '/test1'], ['Создать сервер', '/test2'], ['Хостинг', '/test3'], ['Моды', '/test4']].map((item, index) => (
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
            {burger && (
                <div className="inset-0 w-full min-h-screen bg-[]">

                </div>
            )}
        </header>
    )
}