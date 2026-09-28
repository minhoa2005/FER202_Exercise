import { useState } from "react";
import EX12 from "./components/ex12/EX12";
import EX13 from "./components/ex13/EX13";
import EX14 from "./components/ex14/EX14";
import EX15 from "./components/ex15/EX15";
import "./App.css";

const exercises = [
  { id: "ex12", title: "useState", subtitle: "State cơ bản" },
  { id: "ex13", title: "useEffect", subtitle: "Side effects" },
  { id: "ex14", title: "useContext", subtitle: "Chia sẻ dữ liệu" },
  { id: "ex15", title: "useReducer", subtitle: "Quản lý state" },
];

function App() {
  const [active, setActive] = useState("ex12");
  const selected = exercises.find((exercise) => exercise.id === active);
  return (
    <main className="app-shell">
      <header className="hero"><div className="hero-copy"><p className="eyebrow">FER202 · REACT HOOKS</p><h1>Hook Lab<span>.</span></h1><p className="hero-description">Thực hành các hook React qua những ví dụ nhỏ có thể tương tác.</p></div><div className="hero-badge"><span className="status-dot" /> 4 bài thực hành</div></header>
      <nav className="exercise-nav" aria-label="Chọn bài tập">{exercises.map((exercise, index) => <button key={exercise.id} className={`nav-item ${active === exercise.id ? "active" : ""}`} onClick={() => setActive(exercise.id)} aria-current={active === exercise.id ? "page" : undefined}><span className="nav-number">0{index + 1}</span><span className="nav-label"><strong>{exercise.title}</strong><small>{exercise.subtitle}</small></span><span className="nav-arrow">↗</span></button>)}</nav>
      <section className="lesson-heading"><div><p className="eyebrow">EXERCISE {active.slice(2)}</p><h2>{selected.title}</h2></div><span className="lesson-tag">{selected.subtitle}</span></section>
      {active === "ex12" && <EX12 />}{active === "ex13" && <EX13 />}{active === "ex14" && <EX14 />}{active === "ex15" && <EX15 />}
      <footer className="page-footer"><span>Hook Lab</span><span>FER202 · Exercise 12–15</span></footer>
    </main>
  );
}
export default App;
