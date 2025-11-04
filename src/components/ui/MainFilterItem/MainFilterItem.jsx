import { useState } from "react"
import arrow from "@assets/mainFilter/arrow.svg"
import { motion, AnimatePresence} from "motion/react"
export default function MainFilterItem({ value, defaultValue, setValue }) {
    const [isPressed, setIsPressed] = useState(false)
    const [click, setClick] = useState(false)
    return (
        <div onClick={() => setClick(!click)} onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)} className={`relative flex gap-3 items-center py-2.5 px-3 bg-white rounded-4xl cursor-pointer duration-150 ` + (isPressed ? "scale-80": "")}>
            <div>
                <p>{value ? value : defaultValue}</p>
            </div>
            <div>
                <img className="pt-1" src={arrow} alt="" />
            </div>

            <AnimatePresence>
                {click && (
                <motion.div
                onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()} onMouseUp={(e) => e.stopPropagation()}
                initial={{y: -100, opacity: 0, width: 0 }}
                animate={{y: 0, opacity: 1, width: "100%" }}
                exit={{y: -100, opacity: 0, width: 0}}
                transition={{duration: 0.2}}
                className="absolute top-12 left-0 z-4 bg-white p-2 w-full rounded-xl">
                    <div>
                        {["Test", "Test", "Test"].map((item) => (
                            <div className="hover:border-b hover:border-gray-400" onClick={() => {setValue(item); setClick(false)}}>{item}</div>
                        )) }
                    </div>
                </motion.div>)}
            </AnimatePresence>
        </div>
    )
}