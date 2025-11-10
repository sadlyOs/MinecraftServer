import { motion, AnimatePresence } from "motion/react";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import cancel from "@assets/modal/cancel.svg";
import { useDispatch } from "react-redux";
import { editOpenReg } from "@/store/openReg";
import { editOpenLog } from "@/store/openLogin";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function FormReg() {
  const dispatch = useDispatch();

  const { login } = useAuth();

  const [loginName, setLoginName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit (e) {
    e.preventDefault();

    const data = {
        login: loginName,
        password: password,
        email: email
    }

    login(data)
    dispatch(editOpenReg(false))
    dispatch(editOpenLog(false))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex justify-between pb-8">
        <div className="text-2xl font-bold">
          <p>Регистрация</p>
        </div>
        <div
          className="modal__cancel"
          onClick={() => dispatch(editOpenReg(false))}
        >
          <img src={cancel} alt="cancel" />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Input
            labelText="Придумайте логин"
            placeholder="Логин"
            setValue={setLoginName}
            required={true}
          />
          <Input
            labelText="Придумайте пароль"
            placeholder="Пароль"
            type="password"
            required={true}
            setValue={setPassword}
          />
          <p className="pb-3 text-blue-600">Забыли пароль?</p>
          <Input
            labelText="Ваш Email"
            placeholder="example@email.com"
            type="email"
            required={true}
            setValue={setEmail}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            type="submit"
            label={"Зарегестрироваться"}
            style={
              "bg-green-transparent text-black hover:bg-green-transparent-dark"
            }
          />

          <Button
            label={"Отменить"}
            style={
              "bg-gray-transparent text-white hover:bg-gray-transparent-dark"
            }
            handleClick={() => {
              dispatch(editOpenLog(false));
              dispatch(editOpenReg(false));
            }}
          />
        </div>
      </div>
    </form>
  );
}
