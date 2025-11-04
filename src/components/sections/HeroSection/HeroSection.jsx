export default function HeroSection() {
    return (
        <section className="relative top-[-64px] containerw-full h-screen bg-[url('@assets/hero/hero.png')] bg-cover">
            <div className="text-white px-4 w-full h-full flex justify-center items-center bg-black-transparent">
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-bold pb-2">Лучшие сервера Minecraft</h1>
                    <p className="text-[0.7rem] md:text-[1.2rem]">Лучший рейтинг и мониторинг Майнкрафт-серверов в России.<br />Ищи топовые сервера с мини-играми, модами и плагинами,<br /> читай отзывы и следи за онлайном.</p>
                </div>
            </div>
        </section>
    )
}