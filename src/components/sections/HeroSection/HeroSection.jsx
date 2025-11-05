import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import "./HeroSection.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  const headerText = useRef(null);
  const text = useRef(null);

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
    <section id="#home" className="relative containerw-full h-screen hero pt-20">
      <div className="container mx-auto flex flex-wrap">
        <div className="text-white">
          <h1 className="text-4xl">Лучшие сервера Minecraft</h1>
          <p className="text-sm text-white-light font-light">
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
        </div>
        <div>

        </div>
      </div>
    </section>
  );
}
