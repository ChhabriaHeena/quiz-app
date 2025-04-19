import { useState } from 'react'
import './Question.css'

const Question = () => {

    const questions: any = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4",
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: "Pacific",
        },
        {
            question: "Who wrote 'To be, or not to be'?",
            options: ["Shakespeare", "Hemingway", "Tolkien", "Twain"],
            answer: "Shakespeare",
        },
    ];


    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(""));

    const handleOptionClick = (option: any) => {
        const newSelectedOption = [...selectedOptions]
        newSelectedOption[activeQuestionIndex] = option;
        setSelectedOptions(newSelectedOption)
    }

    const handleClickNext = () => {
        if (selectedOptions[activeQuestionIndex] === questions[activeQuestionIndex].answer) {
            setCurrentScore((prev: any) => prev + 1);
        }

        setActiveQuestionIndex((prev: any) => prev + 1)
    }

    const handleClickPrev = () => {
        setActiveQuestionIndex((prev: any) => prev - 1)
    }


    const handleComplete = () => {
        if (selectedOptions[activeQuestionIndex] === questions[activeQuestionIndex].answer) {
            setCurrentScore((prev: any) => prev + 1);
        }

        setQuizComplete(true)

    }

    const handleRestart = () => {
        setCurrentScore(0)
        setQuizComplete(false)
        setActiveQuestionIndex(0)
        setSelectedOptions(Array(questions.length).fill(""))
    }


    return (

        quizComplete ? (
            <div className='score-board'>
                <h1>Your score: {currentScore}</h1>
                <div>
                    {
                        questions.map((question: any, index: number) => (
                            <div key={index}>
                                <h3>{question.question}</h3>
                                <h4>Your Answer: {selectedOptions[index]}</h4>
                                <h4>Correct Answer: {question.answer}</h4>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <button onClick={handleRestart}>Restart</button>
                </div>
            </div>
        ) : (


            < div className='question'>
                <div className='question-section'>
                    <h3>Question - {activeQuestionIndex + 1}</h3>
                    <h4>{questions[activeQuestionIndex].question}</h4>
                </div>
                <div className='options'>
                    {
                        questions[activeQuestionIndex].options.map((option: any) => (
                            <div key={option} className='quiz-option' style={{ backgroundColor: selectedOptions[activeQuestionIndex] === option ? "grey" : "" }} onClick={() => handleOptionClick(option)}>{option}</div>
                        ))
                    }
                </div>
                <div>

                    <button onClick={handleClickPrev} disabled={activeQuestionIndex === 0}>Prev</button>
                    {
                        activeQuestionIndex === (questions.length - 1) ? (
                            <button onClick={handleComplete}>Complete Quiz</button>
                        ) : (
                            <button onClick={handleClickNext}>Next</button>
                        )
                    }
                </div>
            </div >
        )


    )
}

export default Question
