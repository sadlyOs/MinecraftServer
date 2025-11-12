export default function Input({type = "text", placeholder = "test", value, setValue, err, required = false, labelText = null, style}) {
    return (
        <div className="flex flex-col gap-2">
            {labelText && <label className="text-gray-main">{labelText}</label>}
            <input type={type} placeholder={placeholder} value={value} onChange={(e) => {setValue(e.target.value); err("")}} className={`w-full py-3 px-4 box-border bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal outline-0 ${style}`} required={required}/>
        </div>
    )
}