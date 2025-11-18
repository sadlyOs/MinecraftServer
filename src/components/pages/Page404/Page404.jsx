import './Page404.css'
import * as m from "motion/react-m"

export default function Page404() {
    return (
        <main className="main-not min-h-screen bg-[#1F2120] py-20 text-white flex flex-col justify-center text-center gap-3">
            <m.div
            initial={{x: -300, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.8}}
            className='flex flex-col gap-3 px-4'>
                <h2 className='text-[1.4rem] md:text-[3rem] font-bold'>404 – Ой, страница не найдена!</h2>
                <p className='text-[1.1rem] md:text-xl'>Похоже, ссылка устарела или адрес был введён с ошибочкой.<br />
    Вернитесь на главную страницу, воспользуйтесь кнопкой снизу<br/> или посмотрите популярные разделы.</p>
                <a href="/" className="text-sm">На главную</a>
            </m.div>
        </main>
    )
}