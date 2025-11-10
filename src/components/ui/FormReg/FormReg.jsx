import { motion, AnimatePresence } from "motion/react"
import Button from "@/components/ui/Button/Button"
import Input from "@/components/ui/Input/Input"
import cancel from "@assets/modal/cancel.svg"
import { useDispatch } from "react-redux"
import { editOpen } from "@/store/openLogin"

export default function FormReg() {
    const dispatch = useDispatch()
    return (
        <>
            <div className="flex justify-between pb-8">
                <div className="text-xl font-bold">
                    <p>Регистрация</p>
                </div>
                <div className="modal__cancel" onClick={() => dispatch(editOpen(false))}>
                    <img src={cancel} alt="cancel" />
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-4">
                    <Input labelText="Придумайте логин" placeholder="Логин"/>
                    <Input labelText="Придумайте логин" placeholder="Логин"/>
                    <Input labelText="Придумайте логин" placeholder="Логин"/>
                </div>
            </div>
        </>
    )
}