import { useState } from "react";
import styles from "./Quiz.module.css";

interface Props {
    question: string,
    options: string[],
    correctAnswer: number
}

const Quiz = ({question, options, correctAnswer}: Props) => {
    const [answerValue, setAnswerValue] = useState("")
  
    const handleAnswer = (selectedOptionIndex: number, correctAnswer: number) => {    
        if (selectedOptionIndex === correctAnswer) {
            setAnswerValue("Correct");
        } else {
            setAnswerValue("Incorrect");
        }
    }
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.answerValue}>
                <p className={answerValue === "Correct" ? "text-success" : "text-danger"}>{answerValue}</p>
            </div>
            <p className={styles.question}>{question}</p>
            <div className={styles.answersContainer}>
                {options.map((option, index) =>
                    <button key={index} className={styles.answerButton} onClick={() => handleAnswer(index, correctAnswer)}>{option}</button>
                )}
            </div>
        </div>
    )
}

export default Quiz