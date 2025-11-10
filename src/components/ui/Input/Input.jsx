export default function Input(type = "text", labelText, placholder, value, setValue, required = false) {
    return (
        <div>
            <label>{labelText}</label>
            <input type={type} placeholder={placholder} value={value} onChange={(e) => setValue(e.target.value)} className="w-full py-3 px-4 box-border bg-gray-transparent backdrop-blur-2xl rounded-2xl border-2 border-modal outline-0" required={required}/>
        </div>
    )
}