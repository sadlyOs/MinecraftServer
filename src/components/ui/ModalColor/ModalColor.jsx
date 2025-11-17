import * as m from "motion/react-m"
import { AnimatePresence } from "motion/react"
import cancel from "@assets/modal/cancel.svg"
import Input from "@components/ui/Input/Input";
import ColorButton from "../ColorButton/ColorButton";
import { useState } from "react";
import selector from "@assets/myServerblock/selector.svg"
import scoreYellow from "@assets/header/scoreYellow.svg"
import Button from "../Button/Button";

export default function ModalColor({ isOpen, onClose }) {
    const arrayVersion = ["1.19.4:2345", "1.19.3:2345", "1.19.2:2345", "1.19.1:2345", "1.19:2345", "1.18.2:2345", "1.18.1:2345", "1.18:2345", "1.17.1:2345", "1.17:2345", "1.16.5:2345", "1.16.4:2345", "1.16.3:2345", "1.16.2:2345", "1.16.1:2345"];
    const arrayDelay = ["3 месяца - скидка 30%", "2 месяца - скидка 20%", "1 месяца - скидка 10%"];
    const [selectedVersion, setSelectedVersion] = useState("1.19.3")
    const [selectedDelay, setSelectedDelay] = useState({
        value: "3 месяца - скидка 30%",
        clicked: false
    })
    const [isArrayVersionOpen, setIsArrayVersionOpen] = useState(false);

    const colors = [
        { name: 'Желтый', default: 'rgba(255, 255, 0, 0.1)', selected: 'rgba(255, 255, 0, 0.35)' },
        { name: 'Зеленый', default: 'rgba(68, 255, 0, 0.1)', selected: 'rgba(68, 255, 0, 0.35)' },
        { name: 'Красный', default: 'rgba(255, 0, 0, 0.1)', selected: 'rgba(255, 0, 0, 0.35)' },
        { name: 'Розовый', default: 'rgba(255, 0, 221, 0.1)', selected: 'rgba(255, 0, 221, 0.35)' },
        { name: 'Бирюзовый', default: 'rgba(0, 255, 255, 0.1)', selected: 'rgba(0, 255, 255, 0.3)' },
        { name: 'Оранжевый', default: 'rgba(255, 106, 0, 0.1)', selected: 'rgba(255, 106, 0, 0.35)' },
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen &&
                <m.div
                    onClick={() => onClose()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 w-full h-full flex justify-center items-center bg-black-transparent px-4 py-20 lg:py-0 z-500"
                >
                    <m.form
                        onSubmit={(e) => handleSubmit(e)}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="w-[450px] lg:h-fit h-full overflow-y-scroll md:overscroll-none bg-modal-bg text-white relative lg:p-5 box-border rounded-2xl backdrop-blur-2xl"
                    >
                        <div className="bg-modal-bg sticky top-0 pb-4 z-100 pt-5 lg:pt-0">
                            <div className="relative">
                                <h3 className="text-center font-semibold">Выделить сервер цветом</h3>
                                <div className="absolute right-4 lg:right-0 top-1/2 -translate-y-full">
                                    <img onClick={() => { onClose() }} className="cursor-pointer duration-100 hover:scale-130" src={cancel} alt="cancel" />
                                </div>
                            </div>
                        </div>
                        <div className="px-5 pb-5 lg:pb-0 lg:px-0">
                            <div className="relative">
                                <div>
                                    <Input handleClick={() => setIsArrayVersionOpen(!isArrayVersionOpen)} labelText={"Выберите или добавьте сервер для раскрутки"} style={"cursor-pointer"} placeholder={selectedVersion} readOnly={true} />
                                    <img src={selector} alt="selector" className="absolute right-4 md:top-14 top-20" />
                                </div>
                                <AnimatePresence>
                                    {isArrayVersionOpen && (
                                        <m.div
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -50 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute z-10 top-full left-0 w-full max-h-60 overflow-y-auto bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal">
                                            {arrayVersion.map((version, index) => (
                                                <div key={index} onClick={() => { setIsArrayVersionOpen(false); setSelectedVersion(version) }} className="px-4 py-3 cursor-pointer bg-modal-bg hover:bg-gray-main duration-100">
                                                    {version}
                                                </div>
                                            ))}
                                        </m.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="py-5">
                                <div>
                                    <p className="pb-2 text-gray-main">Выберите цвет выделения сервера:</p>
                                </div>
                                <div className="flex flex-col gap-3 p-4">
                                    {colors.map((color, index) => {
                                        const isSelected = selectedIndex === index;

                                        return (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={() => setSelectedIndex(index)}
                                                className={`
                relative w-full py-3 px-6 text-center text-white
                rounded-xl border-2 transition-all duration-200 border-transparent cursor-pointer
                `}
                                                style={{
                                                    background: isSelected ? color.selected : color.default,
                                                    // Если хочется ещё и бордер такого же цвета как фон (как у тебя на скрине)
                                                    borderColor: isSelected ? undefined : color.default,
                                                }}
                                            >
                                                {color.name}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="relative">
                                <Input handleClick={() => setSelectedDelay({ ...selectedDelay, clicked: !selectedDelay.clicked })} labelText={"Срок действия:"} placeholder={selectedDelay.value} style={"px-4 cursor-pointer"} readOnly={true} />
                                <img src={selector} alt="scoreYellow" className="absolute top-13 right-4 z-300 w-4 h-4" />
                                <AnimatePresence>
                                    {selectedDelay.clicked && (
                                        <m.div
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -50 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute z-10 top-full left-0 w-full max-h-60 overflow-y-auto bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal">
                                            {arrayDelay.map((version, index) => (
                                                <div key={index} onClick={() => { setIsArrayVersionOpen(false); setSelectedDelay({ ...selectedDelay, value: version, clicked: false }) }} className="px-4 py-3 cursor-pointer bg-modal-bg hover:bg-gray-main duration-100">
                                                    {version}
                                                </div>
                                            ))}
                                        </m.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="flex justify-center py-8">
                                <p className="flex items-center gap-1"><span>Итог к оплате:</span><span className="pl-2"><img src={scoreYellow} alt="scoreYellow" className="w-4 h-4" /></span>1 020 <span className="text-sm line-through text-gray-main">1 244</span></p>
                            </div>
                            <Button type="submit" label={"Оплатить"} style={"bg-green-transparent w-full text-black"} />
                        </div>
                    </m.form>
                </m.div>
            }

        </AnimatePresence>
    )
}