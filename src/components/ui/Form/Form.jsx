import { AnimatePresence } from "motion/react"
import { useDispatch } from "react-redux"
import { editOpenLog } from "@/store/openLogin"
import { editOpenReg } from "@/store/openReg"
import { m } from "motion/react";

export default function Form({ children, isOpenedLog, isOpenedReg }) {
    const dispatch = useDispatch()
    return (
        <AnimatePresence>
            {(isOpenedLog || isOpenedReg)  &&
                <m.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.4}}
                className="fixed inset-0 w-full h-full bg-black-transparent flex justify-center items-center text-white z-20 px-4"
                onClick={() => {
                    isOpenedLog ? dispatch(editOpenLog(false)) : editOpenReg
                }}
                >
                    <m.div
                    initial={{transform: "scale(0.8)", opacity: 0}}
                    animate={{transform: "scale(1)", opacity: 1}}
                    exit={{transform: "scale(0.8)", opacity: 0}}
                    className="p-6 rounded-xl bg-modal-bg backdrop-blur-xl w-[400px]"
                    onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </m.div>
                </m.div>
            }
        </AnimatePresence>
    )
}