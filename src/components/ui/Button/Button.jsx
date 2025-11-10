export default function Button({label, style, type = "button", handleClick}) {
    return (
        <button type={type} className={`${style} text-center`} onClick={(e) => handleClick(e)}>{label}</button>
    )
}