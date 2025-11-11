import { data, useSearchParams } from "react-router-dom";
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
import img1 from "@assets/serverPage/img1.png"
import img2 from "@assets/serverPage/img2.png"
import img3 from "@assets/serverPage/img3.png"
import img4 from "@assets/serverPage/img4.png"
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { ScrollRestoration } from 'react-router-dom'
import "./ServerPage.css";


Chart.register(...registerables);


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

      Другое:
        [
          "Кастомные зачарования",
          "Кланы",
          "Свадьбы",
          "Новые крафты",
          "Супер-печки",
          "Умные воронки",
          "Большие сундуки",
          "Система усилителей /power"
        ]
    },
  };

 const chartData = {
  labels: ["04:00", "08:00", "12:00", "16:00", "20:00"],
  datasets: [{
    data: [100, 50, 200, 0, 40],
    fill: false,
    borderColor: "green",
    backgroundColor: "rgba(0, 255, 0, 0.2)",
    tension: 0.5,
  }]}

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },

    },
    animation: {
      duration: 3000,
      easing: 'easeOutQuart',
    },
  }

  const variants = {
    left: {
      offscreen: {
        x: -300,
        opacity: 0,
      },

      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
        }
      }
    },

    right: {
      offscreen: {
        x: 300,
        opacity: 0,
      },

      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
        }
      }
    },

    bottom: {
      offscreen: {
        y: 300,
        opacity: 0,
      },

      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
        }
      },

    },
    text: {
    offscreen: {
      x: -70,
      opacity: 0,
    },

    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      }
    }
  },
  }


  return (
    <main className="server__main overflow-hidden pt-10">
      <div className="server-hero py-20 container md:px-4 mx-auto text-white">
        <div className="w-full server__wrapper">
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={variants.left}
          viewport={{once: true}}
          className="server__head h-fit px-4 py-3 md:bg-gray-transparent md:backdrop-blur-2xl rounded-2xl">
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
          </motion.div>
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={variants.right}
          viewport={{once: true}}
          className="server__side">
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
          </motion.div>
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={variants.bottom}
          viewport={{ once: true }}
          className="server__content py-3 bg-gray-transparent backdrop-blur-2xl rounded-2xl h-fit flex flex-col gap-6">
            <div className="px-4">
              <motion.h2
              initial="offscreen"
              whileInView="onscreen"
              variants={variants.text}
              viewport={{ once: true }}
              className="text-2xl pb-2 left">
                FunParty - идеальное РПГ-выживание.
              </motion.h2>
              <motion.p
              initial="offscreen"
              whileInView="onscreen"
              variants={variants.text}
              viewport={{ once: true }}
              className="left">
                Наш сервер - это настоящая революция в мире майнкрафт-выживания,
                здесь вы найдете множество интересных механик, проработанную до
                мелочей экономику, по-настоящему честное PvP, большое и
                дружелюбное комьюнити и многое другое. 
              </motion.p>
            </div>
            <div className="flex px-4 gap-6">
              <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={variants.text}
              viewport={{ once: true }}
              >
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
              </motion.div>
              <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={variants.text}
              viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
            <div className="px-4 flex flex-col gap-6">
              {Object.entries(testData.other).map(([key, value]) => (
                <>
                  {key == "Режимы" || key == "Мини игры" || key == "Моды" ? (
                    <div key={key}>
                      <div>
                        <motion.h3
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={variants.text}
                        viewport={{ once: true }}
                        className="text-xl mb-2 left">{key}</motion.h3>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {value.map((item, index) => (
                          <motion.div
                          key={index}
                          initial="offscreen"
                          whileInView="onscreen"
                          variants={variants.text}
                          viewport={{ once: true }}
                          className="left py-1 px-2 bg-gray-transparent rounded-full">
                            {item}
                          </motion.div>
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
                        <motion.h3
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={variants.text}
                        viewport={{ once: true }}
                        className="left text-xl mb-2">{key}</motion.h3>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={variants.text}
                        viewport={{ once: true }}
                        className="text-gray-main">{value}</motion.p>
                      </div>
                    </div>
                  ) : null}

                  {key == "Другое" && (
                    <div>
                      <div>
                        <motion.h3
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={variants.text}
                        viewport={{ once: true }}
                        className="left text-xl mb-2">{key}</motion.h3>
                      </div>
                      <div>
                        {value.map((item) => (
                          <div className="flex flex-wrap gap-1">
                            <motion.p
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={variants.text}
                            viewport={{ once: true }}
                            className="text-gray-main">{item}</motion.p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
            <div className="px-4">
              <p className="text-gray-main">На нашем сервере каждый игрок сможет найти себе занятие по душе.</p>
            </div>
            <div className="md:px-4">
              <div className="w-full">
                <div className="flex md:grid md:grid-cols-4 gap-5 overflow-x-scroll md:overflow-hidden">
                  {[img1, img2, img3, img4].map((img, index) => (
                    <motion.img
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={variants.text}
                    transition={{delay: index * 0.5}}
                    viewport={{ once: true }}
                    className="w-full first:ml-5 md:first:ml-0" src={img} alt="img" />
                  ))}
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="pb-3">
                <h3>Статистика онлайна</h3>
                <p className="text-gray-main">FunParty - боссы мебель крафты 1.21.4</p>
              </div>
              <div className="w-full">
                <Line data={chartData} options={options} className="w-full h-full max-h-60"/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <ScrollRestoration /> */}
    </main>
  );
}
