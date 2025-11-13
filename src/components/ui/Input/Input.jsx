import selectArrow from '@assets/myServerblock/selector.svg';


export default function Input({type = "text", placeholder = "test", value, setValue, err, required = false, labelText = null, img=false, handleClick, handleKeyUp, readOnly, style}) {
    return (
        <div className="flex flex-col gap-2">
            {labelText && <label className="text-gray-main">{labelText}</label>}
            <div className='relative'>
                <input onKeyUp={handleKeyUp} onClick={handleClick} type={type} placeholder={placeholder} value={value} onChange={(e) => {setValue(e.target.value); err("")}} className={`w-full py-3 px-4 box-border bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal outline-0 ${style}`} required={required} readOnly={readOnly}/>
                {img && <img className='absolute top-1/2 right-4 -translate-y-1/2' src={selectArrow} alt="selectArrow" />}
            </div>
        </div>
    )
}