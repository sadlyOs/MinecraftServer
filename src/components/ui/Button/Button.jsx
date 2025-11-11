export default function Button({label, style, type = "button", handleClick}) {
    return (
        <button type={type} className={`text-center py-3 rounded-2xl cursor-pointer duration-75 ${style}`} onClick={(e) => handleClick(e)}>{label}</button>
    )
}