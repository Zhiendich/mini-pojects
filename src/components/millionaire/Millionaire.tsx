import React, { useState } from 'react'
import Answer from './Answer'
import { questionList, questionListProps } from './types/questionList'
import Button from './UI/Button'

const Millionaire = () => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [sumPrice, changeSumPrice] = useState(0)
    const [changeAnswer, setChangeAnswer] = useState(0)
    const [random, setRandom] = useState<number | undefined>(undefined)
    const [lose, setLose] = useState(false)
    const [savedSum, setSavedSum] = useState(0)
    const [questions, setQuestions] = useState(questionList)
    const [question, setQuestion] = useState<questionListProps>(questions[questionNumber])
    const nextQuestion = () => {
        if (changeAnswer === 0) {
            alert('Выберите вариант!')
            return
        }
        const correctAnswer = question.answersOptions.find(answer => answer.isCorrect)
        if (changeAnswer === correctAnswer?.value) {
            setQuestion(questions[questionNumber + 1])
            setQuestionNumber(questionNumber + 1)
            changeSumPrice(question.price)
            setRandom(undefined)
            setChangeAnswer(0)
            if (questionNumber === 4 || questionNumber === 9) {
                setSavedSum(question.price)
            }
        }
        else {
            setRandom(undefined)
            setLose(!lose)
        }
    }
    const friendCall = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rand = Math.floor(1 + Math.random() * (question.answersOptions.length - 1));
        setRandom(question.answersOptions[rand].value)
        e.currentTarget.disabled = true
        e.currentTarget.style.opacity = '0.5'
    }
    const fiftyFifty = (e: React.MouseEvent<HTMLButtonElement>) => {
        const correctAnswer = question.answersOptions.find(answer => answer.isCorrect)
        const rand = Math.floor(1 + Math.random() * (question.answersOptions.length - 1));
        if (correctAnswer?.value !== rand) {
            const filterArr = question.answersOptions.filter(answer => answer.value == correctAnswer?.value || answer.value == rand)
            let newObj = {} as questionListProps | any
            let iterator: keyof questionListProps
            for (iterator in question) {
                newObj[iterator] = question[iterator]
                if (iterator === "answersOptions") {
                    newObj[iterator] = filterArr
                }
            }
            setQuestion(newObj)
            e.currentTarget.disabled = true
            e.currentTarget.style.opacity = '0.5'
        }
        else {
            fiftyFifty(e)
        }
    }
    return (
        <div className=' max-w-[800px] container mx-auto'>
            {lose && savedSum === 0 ? <h1 className='text-center mt-5 text-[40px] text-[bold]'>К сожалению вы проиграли</h1>
                :
                lose && savedSum > 0 ? <h1 className='text-center mt-5 text-[40px] text-[bold]'>К сожалению вы проиграли но у вас остался несгораемый выиграш {savedSum}$</h1>
                    :
                    questionNumber <= questions.length - 1 ?
                        <div>
                            <div className='border-[2px] border-black p-10 mt-10 flex flex-wrap justify-around  rounded-2xl min-h-[450px]'>
                                <div className=' basis-full flex justify-between mb-2 border-b-2 pb-3 border-black'>
                                    <h3>Вопрос номер : {questionNumber + 1}/{questions.length}</h3>
                                    <h3>Текущая сумма : {sumPrice}$ </h3>
                                </div>
                                <h2 className='basis-full text-center my-3 text-[20px] '>{question.question}</h2>
                                {question.answersOptions
                                    .map(answer => <Answer key={answer.answerText}
                                        answerText={answer.answerText} value={answer.value}
                                        changeAnswer={changeAnswer} setChangeAnswer={setChangeAnswer} changeColor={random} />)}
                            </div>
                            <div className='flex justify-between mt-3 items-center'>
                                <div className='flex'>
                                    <Button onClick={friendCall} buttonText='Звонок другу' buttonColor='blue' />
                                    <div className='ml-3'></div>
                                    <Button onClick={fiftyFifty} buttonText='50 на 50' buttonColor='blue' />
                                </div>
                                {random && <h2 className='text-[20px]'>Я считаю правильный ответ {random}</h2>}
                                <Button buttonText='Следующий вопрос' onClick={nextQuestion} buttonColor='lawngreen' />
                            </div>
                        </div>
                        :
                        <h1 className='text-center mt-5 text-[40px] text-[bold]'>Поздравляю вы выиграли {sumPrice}$</h1>
            }
        </div>
    )
}
export default Millionaire