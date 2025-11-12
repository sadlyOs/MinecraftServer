import { NavLink } from "react-router-dom";
import profile from "@assets/header/profile.svg";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function AccountPage() {
  const { user, update } = useAuth();
  const [login, setLogin] = useState(user.login);
  const [email, setEmail] = useState(user.email);
  const [errLogin, setErrLogin] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (login.length <= 0) {
      setErrLogin("Логин не может быть пустым");
    } else if (email.length <= 0) {
      setErrEmail("Email не может быть пустым");
    } else {
      const updatedUser = {
        ...user,
        login: login,
        email: email,
      };

      console.log("Данные обновились");

      update(updatedUser);
      setErrLogin("");
      setErrEmail("");
      setSuccess("Данные успешно обновлены");
      setTimeout(() => {
        setSuccess(null);
      }, 4000);
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center px-4"
      >
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-gray-transparent backdrop-blur-2xl rounded-2xl p-6 box-border border border-gray-transparent max-w-[570px] w-full mt-10"
        >
          <div className="flex justify-center mb-6">
            <img className="lg:h-[15vh]" src={profile} alt="" />
          </div>
          <div className="flex flex-col gap-4 pb-8">
            <Input
              value={login}
              setValue={setLogin}
              err={setErrLogin}
              labelText="Логин"
              type="text"
              placeholder="Введите ваш логин"
            />
            {errLogin && <p className="text-red-600">{errLogin}</p>}
            <Input
              value={email}
              setValue={setEmail}
              err={setErrEmail}
              labelText="Ваш Email"
              type="email"
              placeholder="Введите ваш email"
            />
            {errEmail && <p className="text-red-600">{errEmail}</p>}
          </div>
          <div className="flex flex-col gap-3 lg:flex-row">
            <Button
              label={"Сменить пароль"}
              style={"bg-gray-transparent flex-1"}
            />
            <Button
              type="submit"
              label={"Сохранить"}
              style={"bg-green-transparent flex-1 text-black"}
            />
          </div>
        </form>
      </motion.div>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed z-100 bottom-5 left-1/2 -translate-x-1/2 bg-green-600 text-white md:px-4 px-2 py-3 rounded-2xl md:text-[1rem] text-[0.7rem]"
          >
            {success}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
