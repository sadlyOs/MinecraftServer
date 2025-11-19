import noImg2 from '@assets/myServerblock/noImg.svg';
import noImg from '@assets/myServerblock/noImg.png';
import { useNavigate } from 'react-router-dom';
import * as m from "motion/react-m"
import cancel from '@assets/modal/cancel.svg';
import Input from "@components/ui/Input/Input";
import TextArea from "@components/ui/TextArea/TextArea";
import CreateProjectBlock from '@/components/ui/CreateProjectBlock/CreateProjectBlock';
import Button from '@/components/ui/Button/Button';

export default function CreateProjectPage() {
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        // Логика сохранения изменений сервера
        navigate(`/account/cab/`);
    }
    return (
        <main className="min-h-screen bg-color-bg">
            <div className="flex justify-center px-4 text-white">
                <m.form
                    onSubmit={(e) => handleSubmit(e)}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[610px] bg-gray-transparent p-5 rounded-2xl">
                    <div className="flex flex-col gap-5 pb-7 border-b border-gray-transparent">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl md:text-2xl font-semibold">Создание проекта Minecraft</h2>
                            <img className="duration-100 cursor-pointer hover:scale-150" onClick={() => navigate(`/account/cab/`)} src={cancel} alt="cancel" />
                        </div>
                        <div>
                            <p className="text-gray-main pb-2">Аватарка</p>
                            <img src={noImg2} alt="noImg2" />
                        </div>
                        <div>
                            <label className="block text-gray-main pb-2">Банер</label>
                            <img src={noImg} alt="noImg" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 pb-7 pt-7 border-b border-gray-transparent">
                        <Input labelText={"Название сервера"} placeholder={"MINELANDY"} type={"text"} />
                        <Input labelText={"Короткое описание"} placeholder={"Описание..."} type={"text"} />
                        <TextArea labelText={"Описание"} placeholder={""} type={"text"} style={"text-xl"} />
                        <Input labelText={"Ссылка для скачивания лаунчера"} placeholder={"Ссылка для скачивания лаунчера"} type={"text"} />
                    </div>

                    <div className="flex flex-col gap-5 pb-7 pt-7 border-b border-gray-transparent">
                        <div>
                            <h3 className='text-xl font-semibold'>Выберите сервера</h3>
                        </div>
                        <div>
                            <CreateProjectBlock />
                        </div>
                        <Button type="submit" label="Создать проект" style="bg-green-transparent text-black w-full hover:bg-green-transparent-dark mt-4" />
                    </div>
                </m.form>
            </div>

        </main>
    )
}