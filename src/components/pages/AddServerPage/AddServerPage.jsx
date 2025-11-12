import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ModalMessage from "@/components/ui/ModalMessage/ModalMessage";
import { useAuth } from "@/context/AuthContext";

export default function AddServerPage() {
  const [serverAddress, setServerAddress] = useState("");
  const [error, setError] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const { user, update } = useAuth();


  function handleErr(err) {
    setError(err);
        setTimeout(() => {
          setError(null);
    }, 3000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (serverAddress.length <= 0) {
      handleErr("Пожалуйста, введите адрес сервера");
    } else {
      const info = serverAddress.split(":");
      console.log(info);

      if (!info[1]) {
        handleErr("Пожалуйста, укажите порт сервера");
      }

      else if (isNaN(parseInt(info[1]))) {
        handleErr("Порт сервера должен быть числом");
      }

      else {
          console.log("Сервер добавлен:", serverAddress);
          const newData = { ...user };
          newData.servers.push({
            address: {
                id: Date.now(),
                serverAddress: serverAddress
            }
          });
          update(newData);
          console.log(newData);
          setServerAddress("");
          setModalMessage(
            "Вы добавили сервер. Для того чтобы контролировать свой сервер, посетите раздел “Мои сервера”"
          );
      }

    }
  }

  return (
    <div className="flex justify-center px-4">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={(e) => handleSubmit(e)}
        className="w-[570px] text-center flex flex-col gap-5 bg-gray-transparent p-5 rounded-3xl"
      >
        <div className="text-[1.2rem] font-bold">
          <h2>Добавление сервера Minecraft</h2>
        </div>
        <Input
          value={serverAddress}
          setValue={setServerAddress}
          placeholder="Адрес сервера Minecraft:порт"
          style={"text-center lg:text-xl"}
        />
        <div className="text-gray-main">
          <p>
            На этой странице ты можешь добавить свой или знакомый тебе сервер в
            наш топ серверов Minecraft.Если порт сервера отличается от
            стандартного 25565, нужно указать его самостоятельно.
          </p>
        </div>
        <div>
          <Button
            type="submit"
            label="Добавить сервер"
            style="bg-green-transparent text-black w-full hover:bg-green-transparent-dark mt-4"
          />
        </div>
      </motion.form>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed z-100 bottom-5 left-1/2 -translate-x-1/2 bg-red-600 text-white md:px-4 px-2 py-3 rounded-2xl md:text-[1rem] text-[0.7rem]"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
      <ModalMessage
        isModal={modalMessage.length > 0}
        title={"Поздравляем"}
        label={modalMessage}
        setModal={setModalMessage}
      />
    </div>
  );
}
