import Header from "&/header";
import Progress from "&/progress";
import Question from "&/questions";
import Base from "&/base";
import ResultList from "&/resultList";
import Result from "&/resultList/result";
import reducer from "&/questions/reducer";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { initialState } from "./data";
import { ScoreIcon } from "./score";
import { checkIcon } from "./check";
import "./App.css";

function App() {
  const initialTime = 30;
  const [timeRemanining, setTimeRemaining] = useState(initialTime);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime == 0) {
          clearInterval(timerInterval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);
  const handleSelectAnswer = (id: number) => {
    dispatch({ type: "select-answer", payload: { id } });
  };
  const handleNextQuestion = (id: number | null) => {
    if (state.currentQuestion == state.questions.length - 1) {
      dispatch({ type: "finish-quiz" });
    } else {
      dispatch({ type: "next-question", payload: { id } });
      setTimeRemaining(initialTime);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const currentQuestion = state.questions[state.currentQuestion];
  return (
    <div className="App">
      <div className="quiz">
        <Base isFinished={state.isFinished} timeRemaning={timeRemanining}>
          <Header />
          <Progress currentQuestion={state.currentQuestion} />
        </Base>
        <Question
          currentQuestion={currentQuestion}
          state={state}
          onNextQuestion={handleNextQuestion}
          onSelectAnswer={handleSelectAnswer}
          isFinished={state.isFinished}
          timeRemaning={timeRemanining}
        />
        <ResultList isFinished={state.isFinished} timeRemaning={timeRemanining}>
          <Result
            style={{ borderRadius: "8px 8px 0 0" }}
            text="score gained"
            score={state.score}
            svg={ScoreIcon}
          />
          <div className="line"></div>
          <Result
            style={{ borderRadius: "0 0 8px 8px" }}
            text="correct answers"
            point={state.point}
            svg={checkIcon}
          />
        </ResultList>
      </div>
    </div>
  );
}

export default App;
