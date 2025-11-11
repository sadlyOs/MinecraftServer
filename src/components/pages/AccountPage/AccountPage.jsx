import { NavLink } from "react-router-dom"
import profile from "@assets/header/profile.svg"
import Input from "@/components/ui/Input/Input"
import Button from "@/components/ui/Button/Button"
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function AccountPage() {
    const { user, update } = useAuth();
    const [login, setLogin] = useState(user.login)
    const [email, setEmail] = useState(user.email)
    const [errLogin, setErrLogin] = useState("")
    const [errEmail, setErrEmail] = useState("")
    const [success, setSuccess] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if (login.length <= 0) {
            setErrLogin("Логин не может быть пустым")
        }

        else if (email.length <= 0) {
            setErrEmail("Email не может быть пустым")
        }

        else {
            const updatedUser = {
                ...user,
                login: login,
                email: email
            }

            console.log('Данные обновились');


            update(updatedUser)
            setErrLogin("")
            setErrEmail("")
            setSuccess("Данные успешно обновлены")
            setTimeout(() => {
                setSuccess(null)
            }, 4000);
        }
    }


    return (
        <main className="bg-[#333] min-h-screen w-full text-white">
            <div className="lg:pt-30 pb-30 pt-20 mx-auto">
                <div>
                    <nav>
                        <div className="overflow-x-auto hide-scrollbar">
                            <ul className="flex justify-between lg:max-w-[1400px] max-w-full mx-auto overflow-x-scroll gap-4 px-4 py-6 scrollbar-hide snap-x snap-mandatory">
                                {[['Акаунт', '/account/'], ['Мои сервера', '/account/servers/'], ['Добавить сервер', '/account/add/'], ["Создать проект", '/account/create/'], ['Мои проекты', '/account/myprojects/'], ["Пополнить баланс", "/account/balance/"], ['Мои платежи', '/account/mypayments']].map((item, index) => (
                                    <li key={index} className="flex-none snap-start">
                                        <NavLink key={index} to={item[1]} className={({isActive}) => isActive ? "first:ml-4 px-6 py-3 bg-blue-600 duration-300 rounded-full hover:bg-gray-main": "px-6 py-3 bg-gray-transparent duration-300 rounded-full hover:bg-gray-main"}>{item[0]}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="flex justify-center px-4">
                    <form onSubmit={(e) => handleSubmit(e)} className="bg-gray-transparent backdrop-blur-2xl rounded-2xl p-6 box-border border border-gray-transparent max-w-[570px] w-full mt-10">
                        <div className="flex justify-center mb-6">
                            <img className="lg:h-[15vh]" src={profile} alt="" />
                        </div>
                        <div className="flex flex-col gap-4 pb-8">
                            <Input value={login} setValue={setLogin} err={setErrLogin} labelText="Логин" type="text" placeholder="Введите ваш логин" />
                            {errLogin && <p className="text-red-600">{errLogin}</p>}
                            <Input value={email} setValue={setEmail} err={setErrEmail} labelText="Ваш Email" type="email" placeholder="Введите ваш email" />
                            {errEmail && <p className="text-red-600">{errEmail}</p>}
                        </div>
                        <div className="flex flex-col gap-3 lg:flex-row">
                            <Button label={"Сменить пароль"} style={"bg-gray-transparent flex-1"}/>
                            <Button type="submit" label={"Сохранить"} style={"bg-green-transparent flex-1 text-black"}/>
                        </div>
                    </form>
                </div>
            </div>

            <AnimatePresence>
                {success && (
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                    className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-green-600 text-white md:px-4 px-2 py-3 rounded-2xl md:text-[1rem] text-[0.7rem]"
                    >
                        {success}
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}