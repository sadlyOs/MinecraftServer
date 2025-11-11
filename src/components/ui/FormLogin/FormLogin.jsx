import { motion, AnimatePresence } from "motion/react";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import cancel from "@assets/modal/cancel.svg";
import { useDispatch } from "react-redux";
import { editOpenLog } from "@/store/openLogin";
import { editOpenReg } from "@/store/openReg";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function FormLogin() {
    const { login } = useAuth();

  const dispatch = useDispatch();
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      login: loginName,
      password: password,
    }

    if (!login(data)) {
      setError("Логин или пароль не верны")
    }
    else {
      setError("")
      dispatch(editOpenLog(false))
      dispatch(editOpenReg(false))
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex justify-between pb-8">
        <div className="text-2xl font-bold">
          <p>Вход</p>
        </div>
        <div
          className="modal__cancel"
          onClick={() => dispatch(editOpenLog(false))}
        >
          <img src={cancel} alt="cancel" />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 relative">
          <Input value={loginName} setValue={setLoginName} placeholder="Логин" required={true}/>
          <Input
            type="password"
            value={password}
            setValue={setPassword}
            placeholder="Пароль"
            required={true}
          />
          <a href="" className="pl-1 text-blue-600">
            Забыли пароль?
          </a>
          {error && <p className="text-red-600 absolute -bottom-5 left-0 text-[0.8rem] pl-1">{error}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Button
            type="submit"
            label={"Войти"}
            style={
              "bg-green-transparent text-black hover:bg-green-transparent-dark"
            }
          />
          <Button
            label={"Регистрация"}
            style={
              "bg-gray-transparent text-white hover:bg-gray-transparent-dark"
            }
            handleClick={() => {dispatch(editOpenLog(false)); dispatch(editOpenReg(true))}}
          />
        </div>
      </div>
    </form>
  );
}
