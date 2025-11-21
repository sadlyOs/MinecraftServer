import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"; import * as m from "motion/react-m"

import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { versionTags, miniGameTags, modeTags, optionTags, pluginTags } from "@/data/filters";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import FilterModal from "@/components/ui/FilterModal/FilterModal";
import icon from '@assets/hero/icon.svg'
import "./HeroSection.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
    const SECTIONS = [
        { title: 'Версия игры', tags: versionTags, key: 'versions' },
        { title: 'Режимы', tags: modeTags, key: 'modes' },
        { title: 'Мини игры', tags: miniGameTags, key: 'minigames' },
        { title: 'Моды', tags: optionTags, key: 'options' },
        { title: 'Плагины', tags: pluginTags, key: 'plugins' },
    ]
  const headerText = useRef(null);
  const text = useRef(null);
  const [filters, setFilters] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFilter = (sectionKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [sectionKey]: prev[sectionKey]?.includes(value)
        ? prev[sectionKey].filter((v) => v !== value)
        : [...(prev[sectionKey] || []), value],
    }));
  }

  const applyFilters = () => {
    console.log('Фильтры применены: ', filters);
    setIsModalOpen(false)
  }
  // useGSAP(() => {
  //     gsap.to(headerText.current, {
  //         duration: 2,
  //         text: "Лучшие сервера Minecraft",
  //         ease: "back.inOut"
  //     })
  //     gsap.to(text.current, {
  //         duration: 2,
  //         text: "Лучший рейтинг и мониторинг Майнкрафт-серверов в России.<br />Ищи топовые сервера с мини-играми, модами и плагинами,<br /> читай отзывы и следи за онлайном.",
  //         ease: "back.inOut"
  //     })
  // })

  return (
    <section id="#home" className="relative w-full hero pt-20 pb-10">
      <div className="container-response mx-auto px-4 h-full flex flex-col justify-center lg:block">
        <div className="hero__content">
            <m.div
            initial={{x:-200, opacity: 0}}
            animate={{x:0, opacity: 1}}
            exit={{x:-200, opacity: 0}}
            transition={{duration: 1}}
            className="text-white flex-1 text-center md:text-start pb-8 lg:pb-0">
                <h1 className="text-2xl md:text-4xl pb-3 font-bold">Лучшие сервера Minecraft</h1>
                <p className="text-sm md:text-[1rem] text-white-light-text font-normal">
                    Добро пожаловать на лучший рейтинг и мониторинг серверов Майнкрафт
                    (Minecraft) в России – MinecraftRating.ru. У нас вы можете найти
                    игровой сервер Minecraft на любой вкус. Подавляющее большинство
                    серверов на сайте русские. Самые популярные игровые площадки нашего
                    рейтинга попадают в топ. Пользуйтесь поиском крутых серверов с
                    мини-играми, модами и плагинами. Следите за онлайн статистикой,
                    читайте отзывы игроков и оставляйте свои. Чтобы начать играть на
                    понравившейся площадке, узнайте её IP адрес. Если у вас есть свой
                    сервер Майнкрафта, то добавьте его айпи к нам, а затем заполните
                    дополнительную информацию. Наш мониторинг предоставляет огромные
                    возможности по привлечению новых игроков на сервера!
                </p>
            </m.div>
            <m.div
            initial={{x:200, opacity: 0}}
            animate={{x:0, opacity: 1}}
            exit={{x:200, opacity: 0}}
            transition={{duration: 1}}
            className="hidden lg:flex flex-col flex-1 gap-4">
                {SECTIONS.map((section) => (
                    <FilterBlock
                        key={section.key}
                        title={section.title}
                        tags={section.tags}
                        selected={filters[section.key] || []}
                        onToggle={(value) => toggleFilter(section.key, value)}
                    />
                ))}
            </m.div>
            <m.div
            initial={{y:100, opacity: 0}}
            animate={{y:0, opacity: 1}}
            exit={{y:100, opacity: 0}}
            transition={{duration: 1.5}}
            className="lg:hidden">
                <button onClick={() => setIsModalOpen(true)} className="w-full text-white text-sm bg-white-light py-2 rounded-xl flex justify-center gap-2">
                    <img src={icon} alt="icon" />
                    <p>Фильтр</p>
                </button>
            </m.div>
        </div>
      </div>

      <FilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} filters={SECTIONS} selectedFilters={filters} onToggle={toggleFilter} onApply={applyFilters}/>
    </section>
  );
}
