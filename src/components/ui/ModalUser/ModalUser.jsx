import { useAuth } from "@/context/AuthContext"
import { motion, AnimatePresence } from "motion/react";

export default function ModalUser({ isModal, setIsModal }) {
    const { isAuthenticated, user } = useAuth();

    return (
        <AnimatePresence>
            {isModal &&
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.4}}
                className="fixed flex justify-end inset-0 w-full h-full">
                    <div onClick={() => setIsModal(false)} className="relative w-full h-full">
                        <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.4}}
                        onClick={(e) => e.stopPropagation()}
                        className="w-[275px] absolute right-50 top-5 bg-gray-transparent backdrop-blur-2xl rounded-2xl">
                            <p>test</p>
                        </motion.div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}