import logo from "@assets/header/logo.png";
import facebook from "@assets/header/facebook.svg";
import vk from "@assets/header/vk.svg";
import youtube from "@assets/header/youtube.svg";
import telegram from "@assets/header/telegram.svg";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { motion } from "motion/react";
import "./Footer.css";

gsap.registerPlugin(useGSAP);
export default function Footer() {
  return (
    <footer className="footer text-white py-10">
      <div className="py-4 container w-full mx-auto px-4 flex flex-col gap-10">
        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="w-full flex flex-col md:flex-row md:justify-between text-center md:text-start">
          <div>
            <div className="flex justify-center md:block">
              <img src={logo} alt="logo" />
            </div>
            <div className="pb-4">
              <p>
                Лучший рейтинг и мониторинг Майнкрафт-серверов в России.
                <br />
                Ищи топовые сервера с мини-играми, модами и плагинами,
                <br /> читай отзывы и следи за онлайном.
              </p>
            </div>
            <div className="flex gap-3 justify-center md:justify-start pb-4">
              <a href="https://google.com">
                <img src={facebook} alt="" />
              </a>
              <a href="https://google.com">
                <img src={vk} alt="" />
              </a>
              <a href="https://google.com">
                <img src={youtube} alt="" />
              </a>
              <a href="https://google.com">
                <img src={telegram} alt="" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <NavLink to={"#"}>Log in</NavLink>
            <NavLink to={"#"}>Скачать Minecraft</NavLink>
            <NavLink to={"#"}>Моды</NavLink>
          </div>
          <div className="flex flex-col gap-2.5">
            <NavLink to={"#"}>Создать сервер</NavLink>
            <NavLink to={"#"}>Хостинг</NavLink>
          </div>
        </motion.div>
        <div className="text-center border-t border-t-white-light">
          <p className="py-4">© 2015-2025 Все права защищены </p>
        </div>
      </div>
    </footer>
  );
}
