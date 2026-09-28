import { useState } from "react";

const searchItems = [
  "Apple",
  "Banana",
  "Blueberry",
  "Cherry",
  "Grapes",
  "Mango",
  "Orange",
  "Strawberry",
];
const initialTasks = ["Review React state", "Build a small UI"];
const initialDragItems = [
  "Plan the interface",
  "Create components",
  "Polish the styles",
  "Review the result",
];

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

function CounterDemo() {
  const [count, setCount] = useState(0);
  return (
    <article className="demo-card">
      <DemoHeading number="01" title="Counter" hook="useState" />
      <div className="counter-display">
        <span className="counter-value">{count}</span>
        <span className="muted">lần nhấn</span>
      </div>
      <button
        className="button button-primary"
        onClick={() => setCount((value) => value + 1)}
      >
        Tăng bộ đếm <span>＋</span>
      </button>
    </article>
  );
}

function ControlledInputDemo() {
  const [text, setText] = useState("");
  return (
    <article className="demo-card">
      <DemoHeading
        number="02"
        title="Controlled input"
        hook="Giá trị được đồng bộ tức thì"
      />
      <label className="field-label" htmlFor="live-text">
        Nội dung
      </label>
      <input
        id="live-text"
        className="text-input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Thử nhập một dòng..."
      />
      <div className="preview-box">
        <span className="preview-label">XEM TRƯỚC</span>
        <p>{text || <span className="muted">Văn bản sẽ hiện ở đây</span>}</p>
      </div>
    </article>
  );
}

function ToggleDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <article className="demo-card">
      <DemoHeading
        number="03"
        title="Toggle visibility"
        hook="Ẩn và hiện nội dung"
      />
      <div className="toggle-row">
        <button
          className="button button-secondary"
          onClick={() => setVisible((value) => !value)}
        >
          {visible ? "Ẩn ghi chú" : "Hiện ghi chú"}
        </button>
        <span className="muted">
          Trạng thái: {visible ? "đang hiện" : "đang ẩn"}
        </span>
      </div>
      {visible && (
        <div className="note-box">
          State thay đổi sẽ yêu cầu React render lại phần giao diện liên quan.
        </div>
      )}
    </article>
  );
}

function TodoDemo() {
  const [tasks, setTasks] = useState(initialTasks);
  const [value, setValue] = useState("");
  const addTask = (event) => {
    event.preventDefault();
    const task = value.trim();
    if (!task) return;
    setTasks((items) => [...items, task]);
    setValue("");
  };
  return (
    <article className="demo-card">
      <DemoHeading number="04" title="Todo list" hook="Thêm và xóa công việc" />
      <form className="inline-form" onSubmit={addTask}>
        <input
          className="text-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Ví dụ: luyện useState"
          aria-label="Công việc mới"
        />
        <button className="button button-primary" type="submit">
          Thêm <span>＋</span>
        </button>
      </form>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={`${task}-${index}`}>
            <span className="task-check">✓</span>
            <span>{task}</span>
            <button
              className="icon-button"
              onClick={() =>
                setTasks((items) =>
                  items.filter((_, itemIndex) => itemIndex !== index),
                )
              }
              aria-label={`Xóa ${task}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && (
        <p className="empty-state">Danh sách trống. Thêm việc đầu tiên nhé.</p>
      )}
    </article>
  );
}

function ColorSwitcherDemo() {
  const [color, setColor] = useState("#e8f1ed");
  const colors = [
    { label: "Sage", value: "#e8f1ed" },
    { label: "Peach", value: "#f8e8dc" },
    { label: "Lavender", value: "#eee9f8" },
    { label: "Sky", value: "#e3eff8" },
  ];
  return (
    <article className="demo-card">
      <DemoHeading
        number="05"
        title="Color switcher"
        hook="Đổi màu nền theo lựa chọn"
      />
      <label className="field-label" htmlFor="color-choice">
        Chọn màu
      </label>
      <select
        id="color-choice"
        className="text-input select-input"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      >
        {colors.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="color-preview" style={{ backgroundColor: color }}>
        <span className="color-swatch" style={{ backgroundColor: color }} />
        <span>{colors.find((item) => item.value === color)?.label} canvas</span>
      </div>
    </article>
  );
}

function SearchFilterDemo() {
  const [query, setQuery] = useState("");
  const filtered = searchItems.filter((item) =>
    item.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <article className="demo-card">
      <DemoHeading
        number="06"
        title="Search filter"
        hook="Lọc danh sách theo từ khóa"
      />
      <div className="search-wrap">
        <span>⌕</span>
        <input
          className="text-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm loại trái cây..."
          aria-label="Tìm kiếm"
        />
      </div>
      <div className="chip-list">
        {filtered.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="empty-state">Không tìm thấy kết quả phù hợp.</p>
      )}
      <p className="result-count">{filtered.length} kết quả</p>
    </article>
  );
}

function DragDropDemo() {
  const [items, setItems] = useState(initialDragItems);
  const [dragging, setDragging] = useState(null);
  const moveItem = (targetIndex) => {
    if (dragging === null || dragging === targetIndex) return;
    setItems((current) => {
      const next = [...current];
      const [moved] = next.splice(dragging, 1);
      next.splice(targetIndex, 0, moved);
      return next;
    });
    setDragging(null);
  };
  return (
    <article className="demo-card">
      <DemoHeading
        number="07"
        title="Drag and drop list"
        hook="Kéo để sắp xếp lại"
      />
      <ul className="drag-list">
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={(event) => {
              setDragging(index);
              event.dataTransfer.effectAllowed = "move";
            }}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              moveItem(index);
            }}
            onDragEnd={() => setDragging(null)}
            className={dragging === index ? "is-dragging" : ""}
          >
            <span className="drag-grip" aria-hidden="true">
              ⠿
            </span>
            <span className="drag-index">0{index + 1}</span>
            <span>{item}</span>
            <span className="muted drag-hint">Kéo</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function EX12() {
  return (
    <section className="demo-grid" aria-label="Bài tập useState">
      <CounterDemo />
      <ControlledInputDemo />
      <ToggleDemo />
      <TodoDemo />
      <ColorSwitcherDemo />
      <SearchFilterDemo />
      <DragDropDemo />
    </section>
  );
}
