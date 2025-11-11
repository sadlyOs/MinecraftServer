import { NavLink } from "react-router-dom"
import profile from "@assets/header/profile.svg"
import Input from "@/components/ui/Input/Input"
import Button from "@/components/ui/Button/Button"
import { useAuth } from "@/context/AuthContext";

export default function AccountPage() {
    const { user } = useAuth();
    return (
        <main className="bg-[#333] min-h-screen w-full text-white">
            <div className="lg:pt-30 pb-30 pt-20 mx-auto">
                <div>
                    <nav>
                        <div className="overflow-x-auto hide-scrollbar">
                            <ul className="flex justify-between lg:max-w-[1400px] max-w-full mx-auto overflow-x-scroll gap-4 px-4 py-6 scrollbar-hide snap-x snap-mandatory">
                                {[['Акаунт', '/account/'], ['Мои сервера', '/account/servers/'], ['Добавить сервер', '/account/add/'], ["Создать проект", '/account/create/'], ['Мои проекты', '/account/myprojects/'], ["Пополнить баланс", "/account/balance/"], ['Мои платежи', '/account/mypayments']].map((item, index) => (
                                    <li key={index} className="flex-none snap-start">
                                        <NavLink key={index} to={item[1]} className={({isActive}) => isActive ? "px-6 py-3 bg-blue-600 duration-300 rounded-full hover:bg-gray-main": "px-6 py-3 bg-gray-transparent duration-300 rounded-full hover:bg-gray-main"}>{item[0]}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="flex justify-center px-4">
                    <form className="bg-gray-transparent backdrop-blur-2xl rounded-2xl p-6 box-border border border-gray-transparent max-w-[570px] w-full mt-10">
                        <div className="flex justify-center mb-6">
                            <img className="lg:h-[15vh]" src={profile} alt="" />
                        </div>
                        <div className="flex flex-col gap-4 pb-8">
                            <Input value={user.login} labelText="Логин" type="text" placeholder="Введите ваш логин" />
                            <Input value={user.email} labelText="Ваш Email" type="email" placeholder="Введите ваш email" />
                        </div>
                        <div className="flex flex-col gap-3 lg:flex-row">
                            <Button label={"Сменить раполь"} style={"bg-gray-transparent flex-1"}/>
                            <Button label={"Сохранить"} style={"bg-green-transparent flex-1 text-black"}/>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}