import { useNavigate, useParams } from "react-router-dom"
import cancel from '@assets/modal/cancel.svg';
import { AnimatePresence} from "motion/react";
import * as m from "motion/react-m"
import noImg2 from '@assets/myServerblock/noImg.svg';
import noImg from '@assets/myServerblock/noImg.png';
import Input from "@components/ui/Input/Input";
import TextArea from "@components/ui/TextArea/TextArea";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import discord from "@assets/serverPage/discord.svg";
import vk from "@assets/header/vk.svg";
import youtube from "@assets/header/youtube.svg";
import ModalMessage from "@/components/ui/ModalMessage/ModalMessage";
import "./MyServerEditPage.css";

export default function MyServerEditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const arrayVersion = ["1.19.4", "1.19.3", "1.19.2", "1.19.1", "1.19", "1.18.2", "1.18.1", "1.18", "1.17.1", "1.17", "1.16.5", "1.16.4", "1.16.3", "1.16.2", "1.16.1", "1.16", "1.15.2", "1.15.1", "1.15", "1.14.4", "1.14.3", "1.14.2", "1.14.1", "1.14", "1.13.2", "1.13.1", "1.13", "1.12.2", "1.12.1", "1.12"];
    const [isArrayVersionOpen, setIsArrayVersionOpen] = useState(false);
    const [modes, setModes] = useState([]);
    const [miniGames, setMiniGames] = useState([]);
    const [options, setOptions] = useState([]);
    const [modalMessage, setModalMessage] = useState(false)
    const [key, setKey] = useState("")

    console.log(id);

    const handleAddMode = (e, type) => {
        if (e.code === "Enter" && e.target.value.trim() !== "") {
            e.preventDefault();

            switch (type) {
                case "mode":
                    setModes([...modes, e.target.value.trim()]);
                    break;

                case "miniGame":
                    setMiniGames([...miniGames, e.target.value.trim()]);
                    break;

                case "options":
                    setOptions([...options, e.target.value.trim()]);
                    break;
            }
            e.target.value = "";
        }
    }

    function handleSubmit(e) {
        console.log(key);
        navigate(`/myServer/${id}`)

    }

    return (
        <main className="min-h-screen bg-color-bg">
            <div className="flex justify-center px-4 py-30 text-white">
                <m.form
                    onKeyDown={(e) => e.code == "Enter" && e.preventDefault()}
                    onSubmit={(e) => handleSubmit(e)}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[610px] bg-gray-transparent p-5 rounded-2xl">
                    <div className="flex flex-col gap-5 pb-7 border-b border-gray-transparent">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl md:text-2xl font-semibold">Редактировать сервер</h2>
                            <img className="duration-100 cursor-pointer hover:scale-150" onClick={() => navigate(`/myServer/${id}`)} src={cancel} alt="cancel" />
                        </div>
                        <div>
                            <p className="text-gray-main pb-2">Аватарка</p>
                            <img src={noImg2} alt="noImg2" />
                        </div>
                        <div>
                            <label className="block text-gray-main pb-2">Банер</label>
                            <img className="w-full" src={noImg} alt="noImg" />
                        </div>
                        <Input labelText={"Название сервера"} placeholder={"MINELANDY"} type={"text"} />
                        <TextArea labelText={"Короткое описание"} placeholder={""} type={"text"} style={"text-xl"} />
                    </div>

                    <div className="pt-7 pb-7 flex flex-col gap-5 border-b border-gray-transparent">
                        <Input labelText={"IP"} placeholder={"skyblock.xyz"} type={"text"} />
                        <div className="relative">
                            <Input handleClick={() => setIsArrayVersionOpen(!isArrayVersionOpen)} labelText={"Версия ядра вашего сервера"} placeholder={"1.93.2"} type={"text"} img={true} style={"cursor-pointer"} readOnly={true} />
                            <AnimatePresence>
                                {isArrayVersionOpen && (
                                        <m.div
                                        initial={{opacity: 0, y: -50}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -50}}
                                        transition={{duration: 0.3}}
                                        className="absolute z-10 top-[110%] left-0 w-full max-h-60 overflow-y-auto bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal">
                                            {arrayVersion.map((version, index) => (
                                                <div key={index} onClick={() => {setIsArrayVersionOpen(false);}} className="px-4 py-3 cursor-pointer hover:bg-gray-main duration-100">
                                                    {version}
                                                </div>
                                            ))}
                                        </m.div>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                        <Input labelText={"URL адрес"} placeholder={"URL адрес"} type={"text"} />
                        <Input labelText={"Сайт сервера"} placeholder={"Сайт сервера"} type={"text"} />
                        <Input labelText={"Ссылка для скачивания лаунчера"} placeholder={"Ссылка для скачивания лаунчера"} type={"text"} />
                        <div className="flex flex-col gap-5">
                            <div>
                                <Input handleKeyUp={(e) => handleAddMode(e, "mode")} labelText={"Режимы"} placeholder="Ввод через Enter"/>
                                {modes.length > 0 && <div className="flex flex-wrap gap-2 mt-3">
                                    {modes.map((mode, index) => (
                                        <div key={index} className="px-3 py-1 bg-gray-transparent rounded-full flex gap-2 items-center cursor-pointer" onClick={() => {
                                                const newModes = modes.filter((_, i) => i !== index);
                                                setModes(newModes);
                                        }}>
                                            <span>{mode}</span>
                                            <img src={cancel}/>
                                        </div>
                                    ))}
                                </div>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <Input handleKeyUp={(e) => handleAddMode(e, "miniGame")} labelText={"Мини игры"} placeholder="Ввод через Enter"/>
                                {miniGames.length > 0 && <div className="flex flex-wrap gap-2 mt-3">
                                    {miniGames.map((miniGame, index) => (
                                        <div key={index} className="px-3 py-1 bg-gray-transparent rounded-full flex gap-2 items-center cursor-pointer" onClick={() => {
                                                const newGame = miniGames.filter((_, i) => i !== index);
                                                setModes(newGame);
                                        }}>
                                            <span>{miniGame}</span>
                                            <img src={cancel}/>
                                        </div>
                                    ))}
                                </div>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <Input handleKeyUp={(e) => handleAddMode(e, "options")} labelText={"Моды"} placeholder="Ввод через Enter"/>
                                {options.length > 0 && <div className="flex flex-wrap gap-2 mt-3">
                                    {options.map((option, index) => (
                                        <div key={index} className="px-3 py-1 bg-gray-transparent rounded-full flex gap-2 items-center cursor-pointer" onClick={() => {
                                                const option = options.filter((_, i) => i !== index);
                                                setOptions(option);
                                        }}>
                                            <span>{option}</span>
                                            <img src={cancel}/>
                                        </div>
                                    ))}
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className="pt-7 pb-7 flex flex-col gap-5 border-b border-gray-transparent">
                        <div className="flex gap-3">
                            <div>
                                <input type="checkbox" className="my-server-checkbox"/>
                            </div>
                            <p>Онлайн мод (только лицензионный майнкрафт)</p>
                        </div>
                        <div className="flex gap-3">
                            <div>
                                <input type="checkbox" className="my-server-checkbox"/>
                            </div>
                            <p>Разрешить комментарии</p>
                        </div>
                    </div>

                    <div className="pt-7 pb-7 flex flex-col gap-5 border-b border-gray-transparent">
                        <div>
                            <label className="block text-gray-main pb-2">Группа ВКонтакте</label>
                            <div className="relative">
                                <input type="text" placeholder="Группа ВКонтакте" className={`w-full py-3 pl-10 pr-4 box-border bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal outline-0`} />
                                <img src={vk} alt="vk" className="absolute top-1/2 left-3 -translate-y-1/2" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-main pb-2">Discord</label>
                            <div className="relative">
                                <input type="text" placeholder="Discord" className={`w-full py-3 pl-10 pr-4 box-border bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal outline-0`} />
                                <img src={discord} alt="discord" className="absolute top-1/2 left-3 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-7 pb-7 flex flex-col gap-5 border-b border-gray-transparent">
                        <div>
                            <label className="block text-gray-main pb-2">Видео сервера (Ссылка)</label>
                            <div className="relative">
                                <input type="text" placeholder="Видео сервера (Ссылка)" className={`w-full py-3 pl-10 pr-4 box-border bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal outline-0`} />
                                <img src={youtube} alt="youtube" className="absolute top-1/2 left-3 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-7 pb-7 flex flex-col gap-5">
                        <label>Скриншоты</label>
                        <div className="flex gap-4 justify-center items-center border-2 border-dashed border-blue-600 rounded-2xl h-[70px] cursor-pointer">
                            <span>+</span>
                            <input type="file" className="hidden" />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button style={"flex-1 bg-gray-transparent text-white cursor-pointer duration-100 hover:bg-gray-transparent-dark"} handleClick={() => navigate(`/myServer/${id}`)} label={"Отмена"}/>
                        <Button type="submit" style={"flex-1 bg-green-transparent text-black cursor-pointer duration-100 hover:bg-green-transparent-dark"} label={"Сохранить изменения"} />
                    </div>
                </m.form>
            </div>

        </main>
    )
}