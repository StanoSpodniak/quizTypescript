import './App.css';
import Quiz from "./components/Quiz";
// https://www.youtube.com/watch?v=F2JCjVSZlG0

const App = () => {
  const question = "What is the capital of Slovakia?";
  const options = ["Bratislava", "Prague", "Vienna", "Krakow"];
  const correctAnswer = 0;

  return (
    <div className="App">
      <Quiz question={question} options={options} correctAnswer={correctAnswer}/>
    </div>
  )
}

export default App
