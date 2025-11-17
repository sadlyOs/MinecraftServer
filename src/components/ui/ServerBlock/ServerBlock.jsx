import serverImg from "@assets/serverBlock/serverImg1.png";
import icon1 from "@assets/serverBlock/icon1.svg";
import icon2 from "@assets/serverBlock/icon2.svg";
import icon3 from "@assets/serverBlock/likeBlue.svg";
import icon4 from "@assets/serverBlock/score.svg";
import clipboard from "@assets/serverBlock/clipboardBlue.svg";
import { NavLink, useNavigate } from "react-router-dom";
import './ServerBlock.css'
import { useState } from "react";


export default function ServerBlock({ setIsPressed }) {
  const [isPressedMouse, setIsPressedMouse] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate("/server/1")} onMouseDown={() => setIsPressedMouse(true)} onMouseUp={() => setIsPressedMouse(false)} onMouseLeave={() => setIsPressedMouse(false)}  className={`cursor-pointer w-full py-3 px-3.5 bg-[#2A2C2B] rounded-2xl flex flex-col gap-3.5 duration-150 ${isPressedMouse ? "scale-90": ""}`}>
        <div className="flex justify-between items-center">
          <div className="text-start">
            <h3 className="text-2xl font-bold">MINELANDY</h3>
            <p className="text-gray-main">К созданию боссов мы подошли особенно тщательно, на нашем сервере их целых 14 штук, каждый и... </p>
          </div>
          <div>
            <div onClick={(e) => {e.stopPropagation(); setIsPressed(true)}} onMouseDown={(e) => e.stopPropagation()} onMouseUp={(e) => e.stopPropagation()} className="flex gap-2 justify-center bg-[#3E4040] px-10 py-3 rounded-2xl">
              <img src={clipboard} alt="clipboard" />
              <p>82.100.12.1.1</p>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full gap-7">
          <div>
            <img className="rounded-2xl" src={serverImg} alt="serverImg" />
          </div>
          <div className="flex-1 flex gap-2.5">
            <div className="flex-1 text-center py-2 border-2 border-white-light rounded-3xl">
              <div className="text-white-light">
                <p>Версия</p>
              </div>
              <div className="flex gap-3 justify-center">
                <img src={icon1} alt="" />
                <p>1.15.5</p>
              </div>
            </div>
            <div className="flex-1 text-center py-2 border-2 border-white-light rounded-3xl">
              <div className="text-white-light">
                <p>Общий онлайн</p>
              </div>
              <div className="flex gap-3 justify-center">
                <img src={icon2} alt="" />
                <p>15 323</p>
              </div>
            </div>
            <div className="flex-1 text-center py-2 border-2 border-white-light rounded-3xl">
              <div className="text-white-light">
                <p>Голосов</p>
              </div>
              <div className="flex gap-3 justify-center">
                <img src={icon3} alt="" />
                <p>5 000</p>
              </div>
            </div>
            <div className="flex-1 text-center py-2 border-2 border-white-light rounded-3xl">
              <div className="text-white-light">
                <p>Баллов</p>
              </div>
              <div className="flex gap-3 justify-center">
                <img src={icon4} alt="" />
                <p>5 323</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
