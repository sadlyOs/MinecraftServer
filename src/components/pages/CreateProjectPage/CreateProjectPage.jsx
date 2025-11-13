import noImg2 from '@assets/myServerBlock/noImg.svg';
import noImg from '@assets/myServerBlock/noImg.png';
import { useNavigate } from 'react-router-dom';

export default function CreateProjectPage() {
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        // Логика сохранения изменений сервера
        navigate(`/account/cab/`);
    }
    return (
        <main className="min-h-screen bg-[#333]">
            <div className="flex justify-center px-4 py-30 text-white">
                <m.form
                    onSubmit={(e) => handleSubmit(e)}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[610px] bg-gray-transparent p-5 rounded-2xl">
                    <div className="flex flex-col gap-5 pb-7 border-b border-gray-transparent">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl md:text-2xl font-semibold">Редактировать сервер</h2>
                            <img className="duration-100 cursor-pointer hover:scale-150" onClick={() => navigate(`/myServer/${id}`)} src={cancel} alt="cancel" />
                        </div>
                        <div>
                            <p className="text-gray-main pb-2">Аватарка</p>
                            <img src={noImg2} alt="noImg2" />
                        </div>
                        <div>
                            <label className="block text-gray-main pb-2">Банер</label>
                            <img src={noImg} alt="noImg" />
                        </div>
                        <Input labelText={"Название сервера"} placeholder={"MINELANDY"} type={"text"} />
                        <TextArea labelText={"Короткое описание"} placeholder={""} type={"text"} style={"text-xl"} />
                    </div>
                </m.form>
            </div>

        </main>
    )
}