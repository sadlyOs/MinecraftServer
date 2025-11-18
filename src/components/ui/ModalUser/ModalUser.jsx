import { useAuth } from "@/context/AuthContext";
import { AnimatePresence } from "motion/react"; import * as m from "motion/react-m"

import profile2 from "@assets/header/profile2.svg";
import scoreYellow from "@assets/header/scoreYellow.svg"
import { NavLink } from "react-router-dom";

export default function ModalUser({ isModal, setIsModal, mouseLeave, setIsOpenBalance }) {
  const { isAuthenticated, user } = useAuth();
  const links = [['Аккаунт', '/account/cab/'], ['Добавить сервер', '/account/add/'], ['Мои сервера', '/account/servers/'], ['Пополнить баланс', '#']]


  return (
    <AnimatePresence>
      {isModal && (
        <m.div
          onMouseLeave={() => mouseLeave(false)}
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'fit-content'}}
          exit={{ opacity: 0, y: -20, height: 0}}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-[275px] absolute right-0 top-0 bg-gray-transparent backdrop-blur-2xl rounded-2xl p-1 box-border border border-gray-transparent overflow-y-hidden"
        >
          <div className="flex flex-col juscetify-center items-center py-3 bg-black-transparent rounded-2xl">
            <img className="h-[5vh]" src={profile2} alt="profile"/>
            <div className="gap-2 mb-6">
              <div>
                <div className="pb-1 text-xl text-center">
                  <p>{user.login}</p>
                </div>
                <div onClick={() => setIsOpenBalance(true)} className="px-3 py-1 bg-yellow-transparent rounded-full flex gap-2 cursor-pointer">
                  <img className="" src={scoreYellow} alt="scoreYellow" />
                  <p>{user.balance}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <nav>
                <ul className="flex flex-col"></ul>
                    {links.map((item, index) => (
                        <NavLink onClick={() => setIsModal(false)} key={index} to={item[1]} className={`text-center block px-6 py-3 duration-100 hover:bg-gray-main not-last:border-b not-last:border-gray-main ${index == 0 && 'rounded-t-xl'} ${index == links.length - 1 && 'rounded-b-xl'}`}>{item[0]}</NavLink>
                    ))}
            </nav>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
