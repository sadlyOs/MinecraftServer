import { motion, AnimatePresence } from "motion/react"
import { useDispatch } from "react-redux"
import { editOpen } from "@/store/openLogin"

export default function Form({ children, isOpened }) {
    const dispatch = useDispatch()
    return (
        <AnimatePresence>
            {isOpened &&
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.4}}
                className="fixed inset-0 w-full h-full bg-black-transparent flex justify-center items-center text-white z-20"
                onClick={() => dispatch(editOpen(false))}
                >
                    <motion.form
                    initial={{transform: "scale(0.8)", opacity: 0}}
                    animate={{transform: "scale(1)", opacity: 1}}
                    exit={{transform: "scale(0.8)", opacity: 0}}
                    className="p-6 rounded-xl bg-modal-bg backdrop-blur-xl w-[315px]"
                    onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.form>
                </motion.div>
            }
        </AnimatePresence>
    )
}