import { AnimatePresence } from "motion/react"; import * as m from "motion/react-m"

import Button from "../Button/Button";

export default function ModalDelete({ isModal, title, label, setModal, functionDelete }) {
  return (
    <>
      <AnimatePresence>
        {isModal && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => {e.stopPropagation(); setModal("")}}
            className="fixed px-4 inset-0 bg-black-transparent flex justify-center items-center z-200"
          >
            <m.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[415px] bg-black-transparent border backdrop-blur-2xl border-gray-transparent rounded-2xl p-5 text-center"
            >
              <h2 className="text-2xl font-bold pb-1">{title}</h2>
              <p className="pb-5 text-gray-main text-[1.2rem]">{label}</p>
              <Button
                handleClick={() => {setModal(""); functionDelete();}}
                label={"Удалить"}
                style={"bg-red-600 text-black w-full text-white"}
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
