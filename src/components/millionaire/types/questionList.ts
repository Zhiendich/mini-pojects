export type AnswerProps = {
    answerText: string,
    isCorrect? : boolean,
    value : number,
    changeAnswer?: number | null,
    setChangeAnswer?: (value: number) => void
    changeColor? : number 
}
export type questionListProps = {
    question : string,
    answersOptions : AnswerProps[],
    price : number
}
export const questionList : questionListProps[]  = [
    {
        question: 'Cколько будет 2 + 2 * 2 ?',
        answersOptions: [
            { answerText: '8', isCorrect: false, value: 1 },
            { answerText: '12', isCorrect: false, value: 2 },
            { answerText: '4', isCorrect: false, value: 3 },
            { answerText: '6', isCorrect: true, value: 4 }
        ],
        price : 100
    },
    {
        question: 'Какая столица великобритании?',
        answersOptions: [
            { answerText: 'Киев', isCorrect: false, value: 1 },
            { answerText: 'Харьков', isCorrect: false, value: 2 },
            { answerText: 'Лондон', isCorrect: true, value: 3 },
            { answerText: 'Варшава', isCorrect: false, value: 4 }
        ],
        price : 500
    },
    {
        question: 'Кто такой Тарас Шевченко',
        answersOptions: [
            { answerText: 'Поет', isCorrect: true, value: 1 },
            { answerText: 'Программист', isCorrect: false, value: 2 },
            { answerText: 'Репер', isCorrect: false, value: 3 },
            { answerText: 'Криптомиллиардер', isCorrect: false, value: 4 }
        ],
        price : 1000
    },
    {
        question: 'Национальная валюта Украины?',
        answersOptions: [
            { answerText: 'Гривна', isCorrect: true, value: 1 },
            { answerText: 'Доллар', isCorrect: false, value: 2 },
            { answerText: 'Юань', isCorrect: false, value: 3 },
            { answerText: 'Евро', isCorrect: false, value: 4 }
        ],
        price : 5000
    },
    {
        question: 'Как с английского переводиться слово car?',
        answersOptions: [
            { answerText: 'Машина', isCorrect: true, value: 1 },
            { answerText: 'Квартира', isCorrect: false, value: 2 },
            { answerText: 'Стол', isCorrect: false, value: 3 },
            { answerText: 'Мясо', isCorrect: false, value: 4 }
        ],
        price : 10000
    },
    {
        question: 'Каким символом обозначают площадь в геометрии',
        answersOptions: [
            { answerText: 'P', isCorrect: false, value: 1 },
            { answerText: 'S', isCorrect: true, value: 2 },
            { answerText: 'R', isCorrect: false, value: 3 },
            { answerText: 'F', isCorrect: false, value: 4 },
        ],
        price : 15000
    },
    {
        question: 'Сколько граней у куба?',
        answersOptions: [
            { answerText: '3', isCorrect: false, value: 1 },
            { answerText: '6', isCorrect: true, value: 2 },
            { answerText: '9', isCorrect: false, value: 3 },
            { answerText: '12', isCorrect: false, value: 4 },
        ],
        price : 25000
    },
    {
        question: 'Что измеряют в амперах',
        answersOptions: [
            { answerText: 'Силу сопротивления', isCorrect: false, value: 1 },
            { answerText: 'Силу напряжения', isCorrect: false, value: 2 },
            { answerText: 'Силу тока', isCorrect: true, value: 3 },
            { answerText: 'Силу мощности', isCorrect: false, value: 4 }
        ],
        price : 50000
    },
    {
        question: 'Какая планета не названа в честь древнего бога',
        answersOptions: [
            { answerText: 'Земля', isCorrect: true, value: 1 },
            { answerText: 'Меркурий', isCorrect: false, value: 2 },
            { answerText: 'Марс', isCorrect: false, value: 3 },
            { answerText: 'Юпитер', isCorrect: false, value: 4 }
        ],
        price : 100000
    },
    {
        question: 'Между какими странами был подписан пакт Молотова-Либентропа?',
        answersOptions: [
            { answerText: 'Франция и Италия', isCorrect: false, value: 1 },
            { answerText: 'СССР и Германия', isCorrect: true, value: 2 },
            { answerText: 'Украина и США', isCorrect: false, value: 3 },
            { answerText: 'Китай и СССР', isCorrect: false, value: 4 },
        ],
        price : 150000
    },
    {
        question: 'Какие типы данных есть в Javascript?',
        answersOptions: [
            { answerText: 'string, number, boolean, float, array, undefined', isCorrect: false, value: 1 },
            { answerText: 'object, array, number, string, boolean, bigInt, null', isCorrect: false, value: 2 },
            { answerText: 'null, error, object, array, number, string, boolean', isCorrect: false, value: 3 },
            { answerText: 'string, number, boolean, bigInt, null, undefined, object, char', isCorrect: true, value: 4 }
        ],
        price : 250000
    },
    {
        question: 'В чем разница между обычной и стрелочной функцией?',
        answersOptions: [
            { answerText: 'У стрелочной функции нет this,стрелочние функции не могут быть использованны как конструктор, \n в стрелочных отсутствует специальный массив arguments', isCorrect: true, value: 1 },
            { answerText: 'У стрелочной функции нет this, стрелочние функции не могут быть использованны как конструктор ', isCorrect: false, value: 2 },
            { answerText: 'Стрелочная функция не могут быть многострочными, в стрелочных отсутствует специальный массив arguments', isCorrect: false, value: 3 },
            { answerText: 'У стрелочной функции нет this,стрелочние функции не могут быть использованны как конструктор, \n в стрелочных отсутствует специальный массив arguments, стрелочная функция не могут быть многострочными', isCorrect: false, value: 4 }
        ],
        price : 375000
    },
    {
        question: 'Выберите вариант где присутствуют все доступные методы массива',
        answersOptions: [
            { answerText: 'map, filter, turn', isCorrect: false, value: 1 },
            { answerText: 'turn, map, reduce, sort, filter', isCorrect: false, value: 2 },
            { answerText: 'map, filter, sort, reduce', isCorrect: true, value: 3 },
            { answerText: 'find, sort, reduce, turn', isCorrect: false, value: 4 }
        ],
        price : 500000
    },
    {
        question: 'Что такое рекурсия?',
        answersOptions: [
            { answerText: 'Функция вызывает другую функцию', isCorrect: false, value: 1 },
            { answerText: 'Функция вызывает сама себя', isCorrect: true, value: 2 },
            { answerText: 'Функция возвращает другую функцию', isCorrect: false, value: 3 },
            { answerText: 'Функция копирует функционал другой фукнции', isCorrect: false, value: 4 },
        ],
        price : 750000
    },
    {
        question: 'Какие флаги свойств имеет объект?',
        answersOptions: [
            { answerText: 'writable, enumerable, configurable', isCorrect: true, value: 1 },
            { answerText: 'writable, enumerable, updaterable', isCorrect: false, value: 2 },
            { answerText: 'updaterable, changerable, calculaterable', isCorrect: false, value: 3 },
            { answerText: 'writable, enumerable, configurable, updaterable', isCorrect: false, value: 4 },
        ],
        price : 1000000
    },
]