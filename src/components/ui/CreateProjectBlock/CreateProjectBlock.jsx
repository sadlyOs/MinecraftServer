import serverImg from '@assets/serverBlock/serverImg1.png';
import './CreateProjectBlock.css';

export default function CreateProjectBlock() {
    return (
        <div className='flex flex-col gap-3 bg-gray-transparent p-4 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'>MINELANDY</h3>
                <input type="checkbox" className='create-checkbox' />
            </div>
            <div className=''>
                <img className='w-full rounded-2xl' src={serverImg} alt="serverImg"/>
            </div>
        </div>
    )
}