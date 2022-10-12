import React, { useState } from 'react'
import { AnswerProps } from './types/questionList'

const Answer = ({ answerText, value, setChangeAnswer, changeColor }: AnswerProps) => {
    const [radio, setRadio] = useState(value)
    const changeRadio = () => {
        setChangeAnswer?.(radio)
    }
    return (
        <div style={{ border: changeColor === value ? '4px solid #7CFC00' : '2px solid black' }} className='border-[2px] border-black rounded-xl p-3 basis-5/12 m-[20px]'>
            <span className='mr-1 text-[20px]'>{value}</span>
            <input className='mr-[5px] ' type="radio" value={radio} onChange={changeRadio} name="answer" />
            <span> {answerText}</span>
        </div>
    )
}

export default Answer