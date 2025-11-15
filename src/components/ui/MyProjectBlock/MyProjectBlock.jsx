import chartUp from "@assets/myServerblock/chartUp.svg"
import pencil from "@assets/myServerblock/pencil.svg"
import trash from "@assets/myServerblock/trash.svg"
import noImg from "@assets/myServerblock/noImg.png"
import online from "@assets/serverBlock/icon1.svg";
import version from "@assets/serverBlock/icon2.svg";
import likeBlue from "@assets/serverBlock/likeBlue.svg";
import score from "@assets/serverBlock/score.svg";
import clipboard from "@assets/serverBlock/clipboardBlue.svg";
import { useState } from "react";
import { AnimatePresence } from "motion/react"; import * as m from "motion/react-m"

import ModalDelete from "../ModalDelete/ModalDelete";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MyProjectBlock({ id }) {
    const [isPressed, setIsPressed] = useState(false)
    const [isDeletedModal, setIsDeletedModal] = useState(false)
    const [isPressedBlock, setIsPressedBlock] = useState(false)
    const { deleteServer } = useAuth();
    const navigate = useNavigate();

    function copyToClipboard() {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
        }, 3000);
        navigator.clipboard.writeText("82.100.12.1.1");
    }

    function handleDelete() {
        deleteServer(id);
        console.log("Удален сервер с id:", id);
    }

    return (
        <m.div
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{ once: true }}
        onMouseDown={() => setIsPressedBlock(true)}
        onClick={() => navigate(`/myServer/${id}`)}
        className="bg-gray-transparent py-3 px-4 rounded-2xl flex flex-col gap-4 cursor-pointer">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-semibold">MINELANDY</h3>
                </div>
                <div className="flex gap-5">
                    <img onClick={(e) => {e.stopPropagation()}} className="w-4 h-4 duration-100 cursor-pointer hover:scale-115" src={pencil} alt="pencil" />
                    <img onClick={(e) => {e.stopPropagation()}} className="w-4 h-4 duration-100 cursor-pointer hover:scale-115" src={trash} alt="trash" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-7 mt-4">
                <div className="">
                    <img className="w-full lg:w-auto" src={noImg} alt="noImg" />
                </div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 justify-between gap-3">
                    <div className="flex-1 flex flex-col items-center py-2 border border-gray-transparent rounded-2xl">
                        <p className="text-gray-main">Версия</p>
                        <div className="flex gap-2">
                            <img src={version} alt="version" />
                            <span>1.15.5</span>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center py-2 border border-gray-transparent rounded-2xl">
                        <p className="text-gray-main">Общий онлайн</p>
                        <div className="flex gap-2">
                            <img src={online} alt="online" />
                            <span>15 323</span>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center py-2 border border-gray-transparent rounded-2xl">
                        <p className="text-gray-main">Голосов</p>
                        <div className="flex gap-2">
                            <img src={likeBlue} alt="likeBlue" />
                            <span>5 000</span>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center py-2 border border-gray-transparent rounded-2xl">
                        <p className="text-gray-main">Баллов</p>
                        <div className="flex gap-2">
                            <img src={score} alt="score" />
                            <span>5 323</span>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isPressed && (
                    <m.div
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: 100, opacity: 0}}
                    transition={{duration: 0.4}}
                    className="fixed bottom-5 left-1/2 -translate-x-1/2 text-center bg-blue-600 backdrop-blur-3xl z-100 md:px-4 px-2 py-3 rounded-2xl md:text-[1rem] text-[0.7rem]"
                    >
                        <p>Успешно скопировано</p>
                    </m.div>
                )}

                <ModalDelete
                    isModal={isDeletedModal}
                    setModal={setIsDeletedModal}
                    functionDelete={() => handleDelete()}
                    title={"Удаление сервера"}
                    label={"Вы уверены, что хотите удалить этот сервер из вашего списка?"}
                >
                </ModalDelete>
            </AnimatePresence>
        </m.div>
    )
}