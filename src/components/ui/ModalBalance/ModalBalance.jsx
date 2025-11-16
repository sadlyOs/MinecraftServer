import { AnimatePresence } from "motion/react"
import Input from "@components/ui/Input/Input"
import Button from "@components/ui/Button/Button"
import * as m from "motion/react-m"
import frikassa from "@assets/paymentIcons/frikassa.svg"
import bitcoin from "@assets/paymentIcons/bitcoin.svg"
import etherium from "@assets/paymentIcons/etherium1.svg"
import anyPay from "@assets/paymentIcons/anyPay.svg"
import jukassa from "@assets/paymentIcons/jukassa.svg"
import robokassa from "@assets/paymentIcons/robokassa.svg"
import base from "@assets/paymentIcons/base.svg"
import cancel from "@assets/modal/cancel.svg"
import { useState } from "react"

export default function ModalBalance({ isOpen, onClose, initialType = "fiat" }) {
    const paymentMethods = [
        { id: 'frikassa', title: 'Фрикасса', icon: frikassa, type: 'fiat' },
        { id: 'yokassa', title: 'ЮKassa', icon: jukassa, type: 'fiat' },
        { id: 'cryptoChange', title: 'Крипта', icon: base, type: 'fiat' },
        { id: 'robokassa', title: 'Робокасса', icon: robokassa, type: 'fiat' },

        { id: 'btc', title: 'Bitcoin', icon: bitcoin, type: 'crypto', currency: 'BTC' },
        { id: 'eth', title: 'Ethereum', icon: etherium, type: 'crypto', currency: 'ETH' },
        { id: 'usdt', title: 'USDT (TRC20)', icon: anyPay, type: 'crypto', currency: 'USDT' },
        { id: 'bnb', title: 'Binance Coin', icon: anyPay, type: 'crypto', currency: 'BNB' },
    ]
    const [activeTab, setActiveTab] = useState(initialType);
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const methodsToShow = paymentMethods.filter(m => m.type == activeTab)

    const changeTab = (title) => {
        console.log('handleClick');

        if (title == "Крипта") {
            setActiveTab("crypto")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSubmit');
        if (isNaN(parseInt(amount))) {
            setError("Сумма должна быть числом")
        }
        else if (amount <= 0) {
            setError("Сумма должна быть больше 0")
        }
        else {
            setError('')
            setSuccess(`Вы успешно пополнили баланс на сумму: ${amount}`)
            setActiveTab('fiat')
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <m.div
                    onClick={() => { onClose(); setError(""); setActiveTab('fiat') }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full flex justify-center items-center bg-black-transparent px-4 z-500"
                >
                    {success.length == 0 && (
                        <m.form
                            onSubmit={(e) => handleSubmit(e)}
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="w-[375px] bg-modal-bg text-white relative p-5 box-border rounded-2xl backdrop-blur-2xl"
                        >
                            <div className="relative pb-4">
                                <h3 className="text-center font-semibold">Пополнение баланса</h3>
                                <div className="absolute right-0 top-1/2 -translate-y-full">
                                    <img onClick={() => { onClose(); setError(""); setActiveTab('fiat') }} className="cursor-pointer duration-100 hover:scale-130" src={cancel} alt="cancel" />
                                </div>
                            </div>
                            <div>
                                <div className="pb-8 relative">
                                    <Input value={amount} setValue={setAmount} err={setError} labelText={"Пополнить баланс на"} placeholder="Введите сумму" />
                                    {error.length > 0 && <p className="absolute bottom-2 left-1 text-red-600 text-sm">{error}</p>}
                                </div>
                                <div className="flex flex-col gap-4 pb-8">
                                    {methodsToShow.map((method) => (
                                        <button type="button" onClick={() => changeTab(method.title)} key={method.id} className="w-full py-4 cursor-pointer flex justify-center gap-2 bg-gray-transparent rounded-3xl duration-150 hover:bg-gray-transparent-dark">
                                            <img src={method.icon} alt={method.title} />
                                            <p>{method.title}</p>
                                        </button>
                                    ))}
                                </div>
                                <Button type="submit" label={"Пополнить баланс"} style={"w-full bg-green-transparent text-black hover:bg-green-transparent-dark"} />
                            </div>
                        </m.form>
                    )}
                    {success.length > 0 && (
                        <m.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="w-[375px] bg-modal-bg text-white relative p-5 box-border rounded-2xl backdrop-blur-2xl text-center flex flex-col gap-4"
                        >
                            <h2 className="text-xl font-semibold">Успешно!</h2>
                            <p className="text-gray-main">{success}</p>
                            <Button handleClick={() => {onClose();setSuccess("")}} label={"Понятно"} style={"w-full bg-green-transparent text-black hover:bg-green-transparent-dark"}/>
                        </m.div>
                    )}
                </m.div>
            )}
        </AnimatePresence>
    )
}