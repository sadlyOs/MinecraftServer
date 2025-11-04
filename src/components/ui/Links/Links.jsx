export default function Links(style) {
    return (
        <nav className="hidden md:block">
            <ul className={`flex ${style} gap-7 text-sm font-light`}>
                {[['Скачать Minecraft', '/test1'], ['Создать сервер', '/test2'], ['Хостинг', '/test3'], ['Моды', '/test4']].map((item, index) => (
                    <NavLink key={index} to={item[1]} className="duration-100 hover:text-gray-400">{item[0]}</NavLink>
                ))}
            </ul>
        </nav>
    )
}