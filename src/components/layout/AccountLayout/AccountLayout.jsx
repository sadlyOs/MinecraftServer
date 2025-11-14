import { Outlet } from "react-router-dom";
import { motion } from "motion/react"; import * as m from "motion/react-m"

import { NavLink } from "react-router-dom";

export default function AccountLayout() {
  return (
    <main className="bg-[#333] min-h-screen w-full text-white">
      <div className="lg:pt-30 pb-30 pt-20 mx-auto">
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav>
            <div className="overflow-x-auto hide-scrollbar">
              <ul className="flex justify-between lg:max-w-[1400px] max-w-full mx-auto overflow-x-scroll px-4 py-6 scrollbar-hide snap-x snap-mandatory">
                {[
                  ["Акаунт", "/account/cab/"],
                  ["Мои сервера", "/account/servers/"],
                  ["Добавить сервер", "/account/add/"],
                  ["Создать проект", "/account/create-project/"],
                  ["Мои проекты", "/account/myprojects/"],
                  ["Пополнить баланс", "/account/balance/"],
                  ["Мои платежи", "/account/mypayments"],
                ].map((item, index) => (
                  <li key={index} className="flex-none snap-start">
                    <NavLink
                      key={index}
                      to={item[1]}
                      className={({ isActive }) =>
                        isActive
                          ? "first:ml-4 px-6 py-3 bg-blue-600 duration-300 rounded-full hover:bg-gray-main"
                          : "first:ml-4 px-6 py-3 bg-gray-transparent duration-300 rounded-full hover:bg-gray-main"
                      }
                    >
                      {item[0]}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </m.div>

        <Outlet />
      </div>
    </main>
  );
}
