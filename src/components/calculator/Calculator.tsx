import React, { useState } from 'react'

const Calculator = () => {
    const operators = ['+', '-', '*', '/', '%']
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const [calc, setCalc] = useState("")
    const [result, setResult] = useState("")
    const updateInput = (value: string) => {
        if ((operators.includes(value) && calc === "") ||
            (operators.includes(value) && operators.includes(calc.slice(-1)))
        ) {
            return
        }
        setCalc(calc + value)
        if (!operators.includes(value)) {
            setResult(eval(calc + value).toString())
        }
    }
    const deleteLast = () => {
        if (calc === '') {
            return
        }
        setCalc(calc.slice(0, calc.length - 1))
    }
    return (
        <div className='flex justify-center items-center h-screen bg-[#F2D309]'>
            <div className='bg-[#121A26] text-white min-h-[380px] max-w-[420px] p-3 rounded-2xl w-full'>
                <div className='text-right '>
                    <span className='text-[20px] mr-2' >{result ? `(${result})` : ''}</span>
                    <span className='text-[25px]'>{calc || '0'} </span>
                </div>
                <div className="flex justify-around my-5">
                    {operators
                        .map(operator => <button onClick={() => updateInput(operator)} className='bg-[#E98B3B] w-full border-white border-[2px] p-3 ' key={operator}>{operator}</button>)}
                </div>
                <div className=" flex flex-wrap justify-around">
                    {numbers
                        .map(number => <button onClick={() => updateInput(number)} className='border-white border-[1px] p-3 flex-[33%]' key={number}>{number}</button>)}
                    <button onClick={() => updateInput('.')} className='border-white border-[2px] p-3 flex-[33%]'>.</button>
                    <button onClick={() => setCalc(result)} className='border-white border-[2px] p-3 flex-[33%]'>=</button>
                    <button onClick={deleteLast} className='border-white border-[2px] p-3 flex-[33%]'>Delete last</button>
                </div>
            </div>
        </div>
    )
}
export default Calculator