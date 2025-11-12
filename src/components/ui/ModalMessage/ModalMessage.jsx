import { motion, AnimatePresence } from "motion/react";
import Button from "../Button/Button";

export default function ModalMessage({ isModal, title, label, setModal, handleClick }) {
  return (
    <>
      <AnimatePresence>
        {isModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setModal("")}
            className="fixed px-4 inset-0 bg-black-transparent flex justify-center items-center z-200"
          >
            <motion.div
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
                handleClick={handleClick}
                label={"Перейти на сервер"}
                style={"bg-green-transparent text-black w-full"}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
