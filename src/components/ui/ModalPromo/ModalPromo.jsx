import * as m from "motion/react-m"
import { AnimatePresence } from "motion/react"
import cancel from "@assets/modal/cancel.svg"
import Input from "@components/ui/Input/Input";
import PromoButton from "@components/ui/PromoButton/PromoButton";
import { useState } from "react";
import selector from "@assets/myServerblock/selector.svg"
import sale35 from "@assets/promotion/35.svg"
import sale25 from "@assets/promotion/25.svg"
import sale15 from "@assets/promotion/15.svg"
import scoreYellow from "@assets/header/scoreYellow.svg"
import Button from "../Button/Button";

export default function ModalPromo({ isOpen, onClose }) {
    const arrayVersion = ["1.19.4:2345", "1.19.3:2345", "1.19.2:2345", "1.19.1:2345", "1.19:2345", "1.18.2:2345", "1.18.1:2345", "1.18:2345", "1.17.1:2345", "1.17:2345", "1.16.5:2345", "1.16.4:2345", "1.16.3:2345", "1.16.2:2345", "1.16.1:2345"];
    const [selectedVersion, setSelectedVersion] = useState("1.19.3")
    const [isArrayVersionOpen, setIsArrayVersionOpen] = useState(false);
    const [amount, setAmount] = useState(0)

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
                    className="fixed inset-0 w-full h-full flex justify-center items-center bg-black-transparent px-4 py-20 md:py-0 z-500"
                >
                    <m.form
                        onSubmit={(e) => handleSubmit(e)}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="w-[450px] md:h-fit h-full overflow-y-scroll md:overscroll-none bg-modal-bg text-white relative p-5 box-border rounded-2xl backdrop-blur-2xl"
                    >
                        <div className="relative pb-4">
                            <h3 className="text-center font-semibold">Приобрести промо баллы</h3>
                            <div className="absolute right-0 top-1/2 -translate-y-full">
                                <img onClick={() => { onClose() }} className="cursor-pointer duration-100 hover:scale-130" src={cancel} alt="cancel" />
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <Input handleClick={() => setIsArrayVersionOpen(!isArrayVersionOpen)} labelText={"Выберите или добавьте сервер для раскрутки"} style={"cursor-pointer"} placeholder={selectedVersion} readOnly={true}/>
                                <img src={selector} alt="selector" className="absolute right-4 top-14" />
                            </div>
                            <AnimatePresence>
                                {isArrayVersionOpen && (
                                    <m.div
                                    initial={{opacity: 0, y: -50}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -50}}
                                    transition={{duration: 0.3}}
                                    className="absolute z-10 top-[110%] left-0 w-full max-h-60 overflow-y-auto bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal">
                                        {arrayVersion.map((version, index) => (
                                                <div key={index} onClick={() => {setIsArrayVersionOpen(false); setSelectedVersion(version)}} className="px-4 py-3 cursor-pointer bg-modal-bg hover:bg-gray-main duration-100">
                                                    {version}
                                                </div>
                                            ))}
                                    </m.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="flex flex-col py-5 gap-3">
                            {[["Топ 1", ["#FFC300", "#FFC30054"], sale35], ["Топ 2", ["#E1E2E1", "#FFFFFF1A"], sale25], ["Топ 3", ["#FF6200", "#FF62001A"], sale15], ["Топ 4", ["#00FFD4", "#1F201F"]], ["Топ 5", ["#00FFD4", "#1F201F"]]].map((item, index) => (
                                <PromoButton key={index} style={item[1]} title={item[0]} sale={item[2]}/>
                            ))}
                        </div>
                        <div className="relative">
                            <img src={scoreYellow} alt="scoreYellow" className="absolute top-13 left-4 z-300 w-4 h-4" />
                            <Input value={1234} labelText={"Количество промо баллов:"} placeholder="0" style={"px-9"} readOnly={true}/>
                        </div>
                        <div className="flex justify-center py-8">
                            <p className="flex items-center gap-1"><span>Итог к оплате:</span><span className="pl-2"><img src={scoreYellow} alt="scoreYellow" className="w-4 h-4"/></span>1 020 <span className="text-sm line-through text-gray-main">1 244</span></p>
                        </div>
                        <Button type="submit" label={"Оплатить"} style={"bg-green-transparent w-full text-black"}/>
                    </m.form>
                </m.div>
            }

        </AnimatePresence>
    )
}