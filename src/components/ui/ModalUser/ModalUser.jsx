import { useAuth } from "@/context/AuthContext";
import { AnimatePresence } from "motion/react"; import * as m from "motion/react-m"

import profile2 from "@assets/header/profile2.svg";
import scoreYellow from "@assets/header/scoreYellow.svg"
import { NavLink } from "react-router-dom";

export default function ModalUser({ isModal, setIsModal }) {
  const { isAuthenticated, user } = useAuth();

  return (
    <AnimatePresence>
      {isModal && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed flex justify-end inset-0 w-full h-full"
        >
          <div
            onClick={() => setIsModal(false)}
            className="relative w-full h-full"
          >
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[275px] absolute right-50 top-5 bg-gray-transparent backdrop-blur-2xl rounded-2xl p-1 box-border border border-gray-transparent"
            >
              <div className="flex flex-col juscetify-center items-center py-3 bg-black-transparent rounded-2xl">
                <img className="h-[5vh]" src={profile2} alt="profile" />
                <div className="gap-2 mb-6">
                  <div>
                    <div className="pb-1 text-xl text-center">
                      <p>{user.login}</p>
                    </div>
                    <div className="px-3 py-1 bg-yellow-transparent rounded-full flex gap-2">
                      <img className="" src={scoreYellow} alt="scoreYellow" />
                      <p>{user.balance}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <nav>
                    <ul className="flex flex-col"></ul>
                        {[['Акаунт', '/account/cab/'], ['Добавить сервер', '/account/add/'], ['Мои сервера', '/account/servers/'], ['Пополнить баланс', '#']].map((item, index) => (
                            <NavLink onClick={() => setIsModal(false)} key={index} to={item[1]} className=" text-center block px-6 py-3 duration-100 hover:bg-gray-main  not-last:border-b not-last:border-gray-main">{item[0]}</NavLink>
                        ))}
                </nav>
              </div>
            </m.div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
