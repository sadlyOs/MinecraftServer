export default function Button({children, style, type = "button", handleClick}) {
    return (
        <button type={type} className={`text-center py-3 rounded-2xl cursor-pointer duration-200 ${style}`} onClick={(e) => handleClick(e)}>{children}</button>
    )
}