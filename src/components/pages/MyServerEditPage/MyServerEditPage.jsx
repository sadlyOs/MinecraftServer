import { useNavigate, useParams } from "react-router-dom"
import cancel from '@assets/modal/cancel.svg';
// import { AnimatePresence, motion, m } from "motion/react";
import * as m from "motion/react-m"
import noImg2 from '@assets/myServerBlock/noImg.svg';
import noImg from '@assets/myServerBlock/noImg.png';
import Input from "@components/ui/Input/Input";
import TextArea from "@components/ui/TextArea/TextArea";
import { useState } from "react";

export default function MyServerEditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const arrayVersion = ["1.19.4", "1.19.3", "1.19.2", "1.19.1", "1.19", "1.18.2", "1.18.1", "1.18", "1.17.1", "1.17", "1.16.5", "1.16.4", "1.16.3", "1.16.2", "1.16.1", "1.16", "1.15.2", "1.15.1", "1.15", "1.14.4", "1.14.3", "1.14.2", "1.14.1", "1.14", "1.13.2", "1.13.1", "1.13", "1.12.2", "1.12.1", "1.12"];
    const [isArrayVersionOpen, setIsArrayVersionOpen] = useState(false);
    console.log(id);

    return (
        <main className="min-h-screen bg-[#333]">
            <div className="flex justify-center px-4 py-30 text-white">
                <m.form
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[610px] bg-gray-transparent p-5">
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
                            <img src={noImg} alt="noImg" />
                        </div>
                        <Input labelText={"Название сервера"} placeholder={"MINELANDY"} type={"text"} />
                        <TextArea labelText={"Короткое описание"} placeholder={""} type={"text"} style={"text-xl"} />
                    </div>
                    <div className="pt-7 flex flex-col gap-5 border-b border-gray-transparent">
                        <Input labelText={"IP"} placeholder={"skyblock.xyz"} type={"text"} />
                        <div className="relative">
                            <Input handleClick={() => setIsArrayVersionOpen(!isArrayVersionOpen)} labelText={"Версия ядра вашего сервера"} placeholder={"1.93.2"} type={"text"} img={true} style={"cursor-pointer"} />
                            <AnimatePresence>
                                {isArrayVersionOpen && (
                                        <m.div
                                        initial={{opacity: 0, scale: 0.8}}
                                        animate={{opacity: 1, scale: 1}}
                                        exit={{opacity: 0, scale: 0.8}}
                                        transition={{duration: 0.3}}
                                        className="absolute z-10 top-[110%] left-0 w-full max-h-30 overflow-y-auto bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal">
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
                        <Input labelText={"Категории"} placeholder={""} type={"text"} />
                    </div>
                </m.form>
            </div>

        </main>
    )
}