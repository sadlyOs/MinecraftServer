import { AnimatePresence } from "motion/react"; import * as m from "motion/react-m"

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import cancel from "@assets/modal/cancel.svg";
import { useDispatch } from "react-redux";
import { editOpenReg } from "@/store/openReg";
import { editOpenLog } from "@/store/openLogin";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { createRequest } from "@/api/api";

export default function FormReg() {
  const dispatch = useDispatch();

  const [loginName, setLoginName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const [errorLogin, setErrorLogin] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [error, setError] = useState(null);

  function handleSubmit (e) {
    e.preventDefault();

    if (loginName.length <= 0) {
      setErrorLogin("Введите логин")
    }
    else if (password.length <= 8) {
      setErrorPassword("Пароль должен быть от 8 символов")
    }
    else if (email.length <= 0) {
      setErrorEmail("Введите почту")
    } else {
      const data = {
          username: loginName,
          password: password,
          email: email,
      }
      createRequest(data).then((res) => {
        console.log(res);
        dispatch(editOpenReg(false))
        dispatch(editOpenLog(true))
      }).catch(err => {
        console.log("error: ", err.message);
        setError(err.message);
      })
    }
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
            err={setErrorLogin}
            required={true}
          />
          {errorLogin.length > 0 && <p className="text-red-600">{errorLogin}</p>}
          <div className="relative">
            <Input
              labelText="Придумайте пароль"
              placeholder="Пароль"
              type="password"
              required={true}
              setValue={setPassword}
              err={setErrorPassword}
            />
            {errorPassword.length > 0 && <p className="text-red-600 text-[0.7rem] absolute -bottom-5">{errorPassword}</p>}
          </div>
          <p className="pb-3 text-blue-600">Забыли пароль?</p>
          <Input
            labelText="Ваш Email"
            placeholder="example@email.com"
            type="email"
            required={true}
            err={setErrorEmail}
            setValue={setEmail}
          />
          {errorEmail.length > 0 && <p className="text-red-600">{errorEmail}</p>}
        </div>
        {error && <p className="text-red-600">{error}</p>}
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
