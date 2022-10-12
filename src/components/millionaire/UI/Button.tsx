import React from 'react'

interface ButtonProps {
    buttonText?: string,
    buttonColor?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const Button = ({ buttonText, buttonColor, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: buttonColor }} className='p-3 mt-3 text-white min-w-[122px] rounded-xl'>{buttonText}</button>
    )
}

export default Button