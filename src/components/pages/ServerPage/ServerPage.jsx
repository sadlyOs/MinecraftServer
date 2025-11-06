import { useSearchParams } from "react-router-dom"
import serverImg from "@assets/serverBlock/serverImg1.png"
import likeGreen from "@assets/serverPage/likeGreen.svg"
import likeBlue from "@assets/serverBlock/likeBlue.svg"
import score from "@assets/serverBlock/score.svg"
import discord from "@assets/serverPage/discord.svg"
import vk from "@assets/header/vk.svg"
import instagram from "@assets/serverPage/instagram.svg"
import telegram from "@assets/header/telegram.svg"
import x from "@assets/serverPage/x.svg"
import clipboardBlue from "@assets/serverBlock/clipboardBlue.svg"

import "./Server.css"

export default function ServerPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams);

    const testData = {
        "plugins": [
            "Hypixelpets",
            "Uralpassport",
            "Floodprotect",
            "Авто-шахта",
            "Minecrafthub",
            "CryptoTracker",
            "EcoGuardians",
            "SmartFarming",
            "DataVision",
            "QuickNote",
            "TravelWizard",
            "HealthMonitor",
            "SecureVault",
            "RecipeMaster",
            "CodeReview",
            "MoodDiary",
            "ArtGallery",
            "MixologyApp",
            "ShopSmart",
            "EventPlanner",
            "LanguageLearner"
            ]
    }

    return (
        <main className="flex-1 server__main">
            <div className="server-hero py-20 container px-4 mx-auto text-white">
                <div className="w-full server__wrapper">
                    <div className="server__head h-36 px-4 py-3 relative">
                        <img className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-2xl" src={serverImg} alt="serverImg" />
                    </div>
                    <div className="server__side">
                        <div className="flex flex-col gap-4">
                            <div>
                                <button className="w-full bg-green-transparent rounded-full flex justify-center gap-3 py-3 cursor-pointer">
                                    <img src={likeGreen} alt="likeGreen" />
                                    <p>Голосовать</p>
                                </button>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="flex-1 bg-blue-transparent py-2 rounded-2xl text-center flex flex-col items-center">
                                    <p className="text-[#73829A]">Голосов</p>
                                    <div className="flex gap-2">
                                        <img src={likeBlue} alt="likeBlue" />
                                        <p>5 000</p>
                                    </div>
                                </div>
                                <div className="flex-1 bg-orange-transparent py-2 rounded-2xl text-center flex flex-col items-center">
                                    <p className="text-[#73829A]">Голосов</p>
                                    <div className="flex gap-2">
                                        <img src={score} alt="likeBlue" />
                                        <p>5 323</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-transparent flex justify-center items-center gap-4 py-4 rounded-full">
                                {[[discord, "discord"], [vk, "vk"], [instagram, "instagram"], [telegram, "telegram"], [x, "x"]].map((img) => (
                                    <img src={img[0]} alt={img[1]} />
                                ))}
                            </div>
                            <div className="bg-gray-transparent px-5 py-3 rounded-3xl">
                                <p className="text-gray-transparent pb-1">Адрес сервера</p>
                                <div className="flex gap-2">
                                    <img src={clipboardBlue} alt="clipboardBlue" />
                                    <p>skyblock.xyz</p>
                                </div>
                            </div>
                            <div className="bg-gray-transparent px-5 py-3 rounded-3xl">
                                <p className="text-gray-transparent pb-1">Язык</p>
                                <p>English</p>
                            </div>
                            <div className="bg-gray-transparent px-5 py-3 rounded-3xl">
                                <p className="text-gray-transparent pb-1">Версия игры</p>
                                <p>1.22 - 1.5.2</p>
                            </div>
                            <div className="bg-gray-transparent px-5 py-3 rounded-3xl">
                                <div className="pb-3 text-gray-transparent">
                                    <p>Плагины</p>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {testData.plugins.map((item) => (
                                        <div className="py-1 px-2 bg-gray-transparent rounded-full">{item}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="server__content">component3</div>
                </div>
            </div>
        </main>
    )
}