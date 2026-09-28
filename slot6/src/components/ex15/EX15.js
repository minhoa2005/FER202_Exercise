import { useReducer } from "react";

function DemoHeading({ number, title, hook }) {
  return (
    <div className="demo-heading">
      <span className="demo-number">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{hook}</p>
      </div>
    </div>
  );
}

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

function CounterReducerDemo() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <article className="demo-card">
      <DemoHeading
        number="01"
        title="Reducer counter"
        hook="Các hành động đi qua counterReducer"
      />
      <div className="reducer-counter">
        <button
          className="round-button"
          aria-label="Giảm"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          −
        </button>
        <strong>{count}</strong>
        <button
          className="round-button"
          aria-label="Tăng"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          ＋
        </button>
      </div>
      <button
        className="text-button reset-button"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Đặt lại về 0
      </button>
    </article>
  );
}

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "How many sides does a hexagon have?",
      options: ["Five", "Six", "Seven", "Eight"],
      answer: "Six",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "NEXT_QUESTION": {
      const score =
        state.score +
        (state.selectedOption === state.questions[state.currentQuestion].answer
          ? 1
          : 0);
      if (state.currentQuestion === state.questions.length - 1)
        return { ...state, score, showScore: true };
      return {
        ...state,
        score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
      };
    }
    case "RESTART_QUIZ":
      return { ...initialState, questions: initialState.questions };
    default:
      return state;
  }
}

function QuestionBankDemo() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const question = state.questions[state.currentQuestion];
  return (
    <article className="demo-card quiz-card">
      <DemoHeading
        number="02"
        title="Question bank"
        hook="Quiz state với SELECT_OPTION, NEXT_QUESTION, RESTART_QUIZ"
      />
      {state.showScore ? (
        <div className="quiz-result">
          <span className="result-kicker">HOÀN THÀNH</span>
          <strong>
            {state.score}
            <small> / {state.questions.length}</small>
          </strong>
          <p>
            {state.score === state.questions.length
              ? "Tuyệt vời, bạn trả lời đúng tất cả!"
              : "Thử lại để cải thiện điểm số nhé."}
          </p>
          <button
            className="button button-primary"
            onClick={() => dispatch({ type: "RESTART_QUIZ" })}
          >
            Chơi lại <span>↻</span>
          </button>
        </div>
      ) : (
        <>
          <div className="quiz-progress">
            <span>
              CÂU {state.currentQuestion + 1} / {state.questions.length}
            </span>
            <div>
              <i
                style={{
                  width: `${((state.currentQuestion + 1) / state.questions.length) * 100}%`,
                }}
              />
            </div>
            <span>ĐIỂM {state.score}</span>
          </div>
          <h4 className="quiz-question">{question.question}</h4>
          <div className="option-list">
            {question.options.map((option, index) => (
              <button
                key={option}
                className={`option-button ${state.selectedOption === option ? "selected" : ""}`}
                onClick={() =>
                  dispatch({ type: "SELECT_OPTION", payload: option })
                }
              >
                <span>{String.fromCharCode(65 + index)}</span>
                {option}
                {state.selectedOption === option && <b>✓</b>}
              </button>
            ))}
          </div>
          <div className="quiz-footer">
            <span className="muted">Chọn một đáp án để tiếp tục</span>
            <button
              className="button button-primary"
              disabled={!state.selectedOption}
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              {state.currentQuestion === state.questions.length - 1
                ? "Xem kết quả"
                : "Câu tiếp theo"}
              <span>→</span>
            </button>
          </div>
        </>
      )}
    </article>
  );
}

export default function EX15() {
  return (
    <section className="demo-grid reducer-grid" aria-label="Bài tập useReducer">
      <CounterReducerDemo />
      <QuestionBankDemo />
    </section>
  );
}
