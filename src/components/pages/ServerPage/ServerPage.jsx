import { useSearchParams } from "react-router-dom";
import serverImg from "@assets/serverBlock/serverImg1.png";
import likeGreen from "@assets/serverPage/likeGreen.svg";
import likeBlue from "@assets/serverBlock/likeBlue.svg";
import score from "@assets/serverBlock/score.svg";
import discord from "@assets/serverPage/discord.svg";
import vk from "@assets/header/vk.svg";
import instagram from "@assets/serverPage/instagram.svg";
import telegram from "@assets/header/telegram.svg";
import x from "@assets/serverPage/x.svg";
import clipboardBlue from "@assets/serverBlock/clipboardBlue.svg";
import serverLog from "@assets/serverPage/serverLog.png";
import grayProfile from "@assets/serverPage/grayProfile.svg";
import greenCircle from "@assets/serverPage/greenCircle.svg";
import robo from "@assets/serverPage/robo.svg";
import stat from "@assets/serverPage/stat.svg";
import star from "@assets/serverPage/star.svg";
import light from "@assets/serverPage/light.svg";
import globalIc from "@assets/serverPage/global.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { motion } from "motion/react";
import { useRef } from "react";

import "./ServerPage.css";

gsap.registerPlugin(useGSAP);

export default function ServerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const testData = {
    plugins: [
      "Hypixelpets",
      "Uralpassport",
      "Floodprotect",
      "Авто-шахта",
      "Minecrafthub",
      "CryptoTracker",
      "EcoGuardians",
      "SmartFarming",
      "DataVision",
      "QuickNote",
      "TravelWizard",
      "HealthMonitor",
      "SecureVault",
      "RecipeMaster",
      "CodeReview",
      "MoodDiary",
      "ArtGallery",
      "MixologyApp",
      "ShopSmart",
      "EventPlanner",
      "LanguageLearner",
    ],

    other: {
      Режимы: [
        "Выживание",
        "КреативаДоп",
        "1000 лвл",
        "Без допа",
        "Мир приключений",
        "Эксплорация",
        "Невероятные пейзажи",
        "Легендарные монстры",
        "Командная игра",
        "Скрытые сокровища",
        "Арены сражений",
        "Магические артефакты",
        "Квесты на время",
        "Загадки древних",
      ],

      "Мини игры": [
        "Голодные игры",
        "Прятки",
        "Скай Варс",
        "Паркур",
        "Квесты",
        "Танцевальные баттлы",
        "Выживание на острове",
        "Шпионские игры",
        "Гонка на выживание",
        "Кулинарные испытания",
        "Творческие конкурсы",
        "Стратегические сражения",
        "Симуляторы жизни",
        "Гонки на время",
        "Фантастические приключения",
      ],

      Моды: [
        "Оружия",
        "DayZ",
        "Машины",
        "Сталкер",
        "Гарри Поттер",
        "Ведьмак",
        "Космические корабли",
        "Футбол",
        "Киберпанк",
        "Зомби",
        "Деньги",
        "Мир приключений",
        "Мифология",
        "Супергерои",
        "Танки",
        "Путешествия",
        "Роботы",
        "Наука",
        "Магия",
        "Природа",
        "Космос",
        "Древние цивилизации",
        "Спорт",
        "Фантастика",
        "Музыка",
        "Искусство",
      ],

      Боссы:
        "К созданию боссов мы подошли особенно тщательно, на нашем сервере их целых 14 штук, каждый из них детально проработан и доведен до совершенства. Также мы постарались максимально разнообразить ваш игровой опыт путем добавления боссов с уникальной текстурой и абсолютно новой механикой сражения. Каждый из боссов становится доступен на определенном этапе игры, что делает ваше погружение невероятно увлекательным и незабываемым. За сражение с боссами вы можете получать игровую валюту, опыт скиллов, ключи от кейсов, а также донат-предметы, что позволяет установить баланс между обычными игроками и донатерами. ",

      Постройки:
        'На нашем сервере существует множество финтифлюшек и прибамбасов, которые позволят улучшить ваш строительный опыт. Мы создали уникальный предмет - жезл строителя, который стал незаменимым для ваших построек. Этот предмет погружает вас в невероятный мир "креатива" и бесконечных возможностей, что позволяет полностью погрузиться в процесс строительства. Также жезл строителя полностью совместим со схематикой/лайтматикой и различными принтерами, которые разрешены на нашем сервере. Мы постарались разнообразить строительство не только жезлом, но и новой мебелью, которая добавлена с помощью нашего серверного текстурпака,',

      "Легендарные ивенты":
        "Наши ивенты на пвп-арене гарантируют вам незабываемые эмоции, ведь теперь вы можете не только красть вещи соперника, но еще и получать бонус в виде игровой валюты, баллов конкурса и опыта.",

      "Уникальная система достижений":
        "Наш проект разработал собственную систему достижений, которая сможет помочь разобраться в различных механиках сервера, а также получить приятный бонус за выполнения сложных достижений.",

      Экономика:
        "Наша экономика проекта основана на меди, за 1 медь мы даем 1 единицу игровой валюты. Игровая валюта на нашем сервере используется в серверном магазине - /shop, а также на аукционе - /ah, для осуществления покупок у других игроков. Также помимо копания меди существуют и другие способы заработка, подробнее можно узнать в /sellitems",
    },
  };

  const element1 = useRef(null);
  const element2 = useRef(null);
  const element3 = useRef(null);

  useGSAP(() => {
    gsap.from(element1.current, {
      scrollTrigger: {
        trigger: element1.current,
        start: "top 70%",
        end: "center 20%",
      },
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(element2.current, {
      scrollTrigger: {
        trigger: element2.current,
        start: "top 90%",
        end: "center 20%",
        toggleActions: "restart none"
      },
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: "power2.out",
    });
    gsap.from(element3.current, {
      scrollTrigger: {
        trigger: element3.current,
        start: "top 90%",
        end: "center 20%",
      },
      opacity: 0,
      y: 100,
      duration: 1.8,
      ease: "power2.out",
    });
    ScrollTrigger.batch('.left', {
      onEnter: (batch) => gsap.to(batch, {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
      }),
      onLeave: (batch) => gsap.to(batch, { opacity: 0, x: -50 }),
      onEnterBack: (batch) => gsap.to(batch, { opacity: 1, x: 0 }),
      onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, x: -50 }),

      start: "top 99%",      // когда верх элемента на 80% экрана
      end: "bottom 20%",
      scrub: false,          // true — если нужен scrub
    })
  }, []);


  return (
    <main className="server__main" id="serverMain">
      <div className="server-hero py-20 container md:px-4 mx-auto text-white">
        <div className="w-full server__wrapper">
          <div ref={element1} className="server__head h-fit px-4 py-3 md:bg-gray-transparent md:backdrop-blur-2xl rounded-2xl">
            <div className="relative w-full pb-2">
              <img
                className=" w-full h-full object-cover object-center rounded-2xl"
                src={serverImg}
                alt="serverImg"
              />
            </div>
            <div className="server__head-content">
              <div className="flex items-center gap-2">
                <div className="">
                  <img className="h-16" src={serverLog} alt="serverLog" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 md:gap-7 flex-col md:flex-row">
                    <div>
                      <h3>Skyblock.XYZ</h3>
                    </div>
                    <div className="flex gap-2 md:gap-5">
                      <div className="flex gap-2 px-3 bg-green-transparent rounded-full">
                        <img src={greenCircle} alt="greenCircle" />
                        <p>Online</p>
                      </div>
                      <div className="flex gap-2 px-3 bg-gray-transparent rounded-full">
                        <img src={grayProfile} alt="grayProfile" />
                        <p>1 244 / 10 000</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-gray-main opacity-50">
                      Выживай в чистом ванильном мире, где каждый блок добыт
                      собственными руками!
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <p className="text-gray-main opacity-50">
                  Выживай в чистом ванильном мире, где каждый блок добыт
                  собственными руками!
                </p>
              </div>
            </div>
          </div>
          <div ref={element3} className="server__side">
            <div className="flex flex-col gap-4">
              <div>
                <button className="w-full bg-green-transparent md:rounded-full flex justify-center gap-3 py-3 cursor-pointer">
                  <img src={likeGreen} alt="likeGreen" />
                  <p>Голосовать</p>
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex-1 bg-blue-transparent py-2 rounded-r-2xl md:rounded-2xl text-center flex flex-col items-center">
                  <p className="text-[#73829A]">Голосов</p>
                  <div className="flex gap-2">
                    <img src={likeBlue} alt="likeBlue" />
                    <p>5 000</p>
                  </div>
                </div>
                <div className="flex-1 bg-orange-transparent py-2 rounded-l-2xl md:rounded-2xl text-center flex flex-col items-center">
                  <p className="text-[#73829A]">Голосов</p>
                  <div className="flex gap-2">
                    <img src={score} alt="likeBlue" />
                    <p>5 323</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-transparent flex justify-center items-center gap-4 py-4 md:rounded-full">
                {[
                  [discord, "discord"],
                  [vk, "vk"],
                  [instagram, "instagram"],
                  [telegram, "telegram"],
                  [x, "x"],
                ].map((img) => (
                  <img src={img[0]} alt={img[1]} />
                ))}
              </div>
              <div className="bg-gray-transparent px-5 py-3 md:rounded-3xl">
                <p className="text-white opacity-50 pb-1 text-center  md:text-start">
                  Адрес сервера
                </p>
                <div className="flex gap-2 justify-center md:justify-start">
                  <img src={clipboardBlue} alt="clipboardBlue" />
                  <p>skyblock.xyz</p>
                </div>
              </div>
              <div className="flex md:flex-col gap-4 text-center md:text-start">
                <div className="flex-1 bg-gray-transparent px-5 py-3 rounded-r-2xl md:rounded-3xl">
                  <p className="text-white opacity-50 pb-1">Язык</p>
                  <p>English</p>
                </div>
                <div className="flex-1 bg-gray-transparent px-5 py-3 rounded-l-2xl md:rounded-3xl">
                  <p className="text-white opacity-50 pb-1">Версия игры</p>
                  <p>1.22 - 1.5.2</p>
                </div>
              </div>
              <div className="bg-gray-transparent px-5 py-3 md:rounded-3xl">
                <div className="pb-3 text-white opacity-50 text-center md:text-start">
                  <p>Плагины</p>
                </div>
                <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                  {testData.plugins.map((item) => (
                    <div className="py-1 px-2 bg-gray-transparent rounded-full">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div ref={element2} className="server__content px-4 py-3 bg-gray-transparent backdrop-blur-2xl rounded-2xl h-fit flex flex-col gap-6">
            <div>
              <h2 className="text-2xl pb-2 left">
                FunParty - идеальное РПГ-выживание.
              </h2>
              <p className="left">
                Наш сервер - это настоящая революция в мире майнкрафт-выживания,
                здесь вы найдете множество интересных механик, проработанную до
                мелочей экономику, по-настоящему честное PvP, большое и
                дружелюбное комьюнити и многое другое. 
              </p>
            </div>
            <div className="flex gap-6">
              <div>
                <div className="left flex gap-2 text-gray-main opacity-70">
                  <img src={light} alt="light" />
                  <p>Версия:</p>
                </div>
                <div className="left flex gap-2 text-gray-main opacity-70">
                  <img src={robo} alt="robo" />
                  <p>IP:</p>
                </div>
                <div className="left flex gap-2 text-gray-main opacity-70">
                  <img src={stat} alt="stat" />
                  <p>Место в топе:</p>
                </div>
                <div className="left flex gap-2 text-gray-main opacity-70">
                  <img src={star} alt="star" />
                  <p>Рейтинг::</p>
                </div>
                <div className="left flex gap-2 text-gray-main opacity-70">
                  <img src={globalIc} alt="global" />
                  <p>Сайт:</p>
                </div>
                <div className="left flex gap-2 items-center text-gray-main opacity-70">
                  <img className="h-4" src={vk} alt="vk" />
                  <p>Группа сервера в ВК:</p>
                </div>
                <div className="left flex gap-2 items-center text-gray-main opacity-70">
                  <img className="h-4" src={discord} alt="discord" />
                  <p>Версия:</p>
                </div>
              </div>
              <div>
                {[
                  "1.21.4",
                  "connect.fpmc.pro",
                  ">200",
                  "3.2",
                  "shop.fpmc.pw",
                  "connect.fpmc.pro",
                  "connect.fpmc.pro",
                ].map((item) => (
                  <p className="left">{item}</p>
                ))}
              </div>
            </div>
            {Object.entries(testData.other).map(([key, value]) => (
              <>
                {key == "Режимы" || key == "Мини игры" || key == "Моды" ? (
                  <div key={key}>
                    <div>
                      <h3 className="text-xl mb-2 left">{key}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {value.map((item) => (
                        <div className="left py-1 px-2 bg-gray-transparent rounded-full">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {key == "Боссы" ||
                key == "Постройки" ||
                key == "Легендарные ивенты" ||
                key == "Уникальная система достижений" ||
                key == "Экономика" ? (
                  <div key={key}>
                    <div>
                      <h3 className="left text-xl mb-2">{key}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <p className="left">{value}</p>
                    </div>
                  </div>
                ) : null}
              </>
            ))}
            <div>
              <div>
                <h3 className="left text-xl mb-2">Другое</h3>
              </div>
              <div>
                <p className="left">
                  Кастомные зачарования Кланы Свадьбы Новые крафты Супер-печки
                  Умные воронки Большие сундуки Система усилителей /power На
                  нашем сервере каждый игрок сможет найти себе занятие по душе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
