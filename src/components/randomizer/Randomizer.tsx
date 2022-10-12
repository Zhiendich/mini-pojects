import React, { ChangeEvent, useState, MouseEvent } from 'react'

const Randomizer = () => {
    const [value, setValue] = useState('')
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [checkbox, setCheckBox] = useState(false)
    const [unicValue, setUnicValue] = useState(() => new Set())
    const validation = () => {
        if (min !== '' && max !== '' && +min < +max) {
            return true
        }
        alert('Выберите правильный диапазон!')
        return false
    }
    const randomize = (e: MouseEvent<HTMLButtonElement>) => {
        if (validation()) {
            if (checkbox == true) {
                unicRandomize(e)
                return
            }
            const rand = Math.round(+min + Math.random() * (+max - +min))
            setValue(String(rand))
        }
    }
    const unicRandomize = (e: MouseEvent<HTMLButtonElement>) => {
        const rand = Math.round(+min + Math.random() * (+max - +min))
        setUnicValue(prev => new Set(prev).add(rand));
        if (unicValue.has(rand) && unicValue.size < +max - +min + 1) {
            unicRandomize(e)
        }
        else if (unicValue.has(rand) && unicValue.size == +max - +min + 1) {
            alert('Уникальных чисел больше нет!!')
            e.currentTarget.disabled = true
            e.currentTarget.style.opacity = '0.7'
            return
        }
        else {
            setValue(String(rand))
        }
    }
    return (
        <div className='flex justify-center items-center w-full h-screen bg-[#E8668D]'>
            <div className='flex flex-col items-center justify-around bg-[#2D335E] text-white min-h-[400px] min-w-[400px] rounded-3xl p-5'>
                <h1>Выберите диапазон чисел</h1>
                <h1 className='text-[60px] '>{value ? value : ''}</h1>
                <div className='flex text-center'>
                    <div className='mb-[50px]'>
                        <span className='mb-2 block'>Min: </span>
                        <input value={min} onChange={(e: ChangeEvent<HTMLInputElement>) => setMin(e.target.value)} className='bg-[#4B5781] border-white border-[2px] p-3' type="number" />
                    </div>
                    <div className='ml-4'>
                        <span className='mb-2 block'>Max: </span>
                        <input value={max} onChange={(e: ChangeEvent<HTMLInputElement>) => setMax(e.target.value)} className='bg-[#4B5781] border-white border-[2px] p-3' type="number" />
                    </div>
                </div>
                <div className='text-center'>
                    <input onChange={() => setCheckBox(!checkbox)} checked={checkbox} type="checkbox" />
                    <span className='ml-2 '>Уникальные значения</span>
                    <button onClick={randomize} className='p-4 mt-1 border-[2px] w-full bg-[#E8668D] rounded-2xl'>Получить случайное значение</button>
                </div>
            </div>
        </div>
    )
}

export default Randomizer