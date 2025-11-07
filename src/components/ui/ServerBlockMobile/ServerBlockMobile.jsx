import serverImg from "@assets/serverBlock/serverImg1.png";
import icon1 from "@assets/serverBlock/icon1.svg";
import icon2 from "@assets/serverBlock/icon2.svg";
import icon3 from "@assets/serverBlock/likeBlue.svg";
import icon4 from "@assets/serverBlock/score.svg";
import clipboard from "@assets/serverBlock/clipboardBlue.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ServerBlockMobile() {
    const [isPressed, setIsPressed] = useState(false)
    return (
        <NavLink to={"/server/1#serverMain"} className={`p-3.5 flex flex-col gap-4 rounded-2xl bg-[#2B2D2C] duration-150 ${isPressed ? "scale-90": ""}`} onTouchStart={() => setIsPressed(true)} onTouchEnd={() => setIsPressed(false)}>
            <div className="w-full">
                <img srс="../../../assets/serverBlock/serverImg1.png" alt="serverImg" />
            </div>
            <div>
                <h1 className="text-center text-xl font-bold">MINELANDY</h1>
                <p className="text-[#6E6F6F] font-semibold text-sm">К созданию боссов мы подошли особенно тщательно, на нашем сервере их целых 1... </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col border-2 py-2 px-3 border-white-light rounded-3xl">
                    <div className="text-center text-[#747575] font-semibold">
                        <p>Версия</p>
                    </div>
                    <div className="flex gap-1 justify-center">
                        <img src={icon1} alt="" />
                        <p>1.15.5</p>
                    </div>
                </div>
                <div className="flex flex-col border-2 py-2 px-3 border-white-light rounded-3xl">
                    <div className="text-center text-[#747575] font-semibold">
                        <p>Общий онлайн</p>
                    </div>
                    <div className="flex gap-1 justify-center">
                        <img src={icon2} alt="" />
                        <p>15 323</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 border-2 py-2 px-3 border-white-light rounded-3xl">
                    <div className="text-center text-[#747575] font-semibold">
                        <p>Голосов</p>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <img src={icon3} alt="" />
                        <p>5 000</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 border-2 py-2 px-3 border-white-light rounded-3xl">
                    <div className="text-center text-[#747575] font-semibold">
                        <p>Баллов</p>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <img src={icon4} alt="" />
                        <p>5 323</p>
                    </div>
                </div>
            </div>
            <div className="w-full py-3 bg-[#3F403F] flex justify-center gap-3 rounded-2xl">
                <img src={clipboard} alt="clipboard" />
                <p>82.100.12.1.1</p>
            </div>
        </NavLink>
    )
}