import { NavLink } from "react-router-dom"

export default function AccountPage() {
    return (
        <main className="bg-[#333] min-h-screen w-full text-white">
            <div className="pt-30  mx-auto">
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
                <div></div>
            </div>
        </main>
    )
}