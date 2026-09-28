import { useEffect, useState } from "react";

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

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

function UserPostsDemo() {
  const [userId, setUserId] = useState(1);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    const controller = new AbortController();
    const loadPosts = async () => {
      setStatus("loading");
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("Không thể tải bài viết.");
        setPosts(await response.json());
        setStatus("ready");
      } catch (error) {
        if (error.name !== "AbortError") setStatus("error");
      }
    };
    loadPosts();
    return () => controller.abort();
  }, [userId]);
  return (
    <article className="demo-card wide-card">
      <DemoHeading
        number="01"
        title="User posts"
        hook="Fetch dữ liệu khi mount và khi userId thay đổi"
      />
      <div className="control-row">
        <label className="field-label" htmlFor="user-id">
          User ID
        </label>
        <select
          id="user-id"
          className="text-input compact-input"
          value={userId}
          onChange={(event) => setUserId(Number(event.target.value))}
        >
          {[1, 2, 3, 4, 5].map((id) => (
            <option value={id} key={id}>
              User {id}
            </option>
          ))}
        </select>
        <span className="muted">JSONPlaceholder · {posts.length} bài viết</span>
      </div>
      {status === "loading" && (
        <p className="inline-status">Đang tải bài viết…</p>
      )}
      {status === "error" && (
        <p className="error-message">
          Không tải được dữ liệu. Kiểm tra kết nối rồi thử lại.
        </p>
      )}
      {status === "ready" && (
        <div className="post-list">
          {posts.slice(0, 5).map((post) => (
            <div className="post-item" key={post.id}>
              <span className="post-id">
                {String(post.id).padStart(2, "0")}
              </span>
              <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function CountdownDemo() {
  const [initialValue, setInitialValue] = useState(12);
  const [timeRemaining, setTimeRemaining] = useState(12);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    if (!running || timeRemaining <= 0) return undefined;
    const timerId = window.setInterval(
      () => setTimeRemaining((time) => Math.max(0, time - 1)),
      1000,
    );
    return () => window.clearInterval(timerId);
  }, [running, timeRemaining]);
  const restart = () => {
    setTimeRemaining(Math.max(1, Number(initialValue) || 1));
    setRunning(true);
  };
  return (
    <article className="demo-card">
      <DemoHeading
        number="02"
        title="Countdown timer"
        hook="Interval được dọn dẹp khi kết thúc"
      />
      <div className="timer-face">
        <span className="timer-number">
          {String(timeRemaining).padStart(2, "0")}
        </span>
        <span className="timer-caption">Time Remaining: {timeRemaining}</span>
      </div>
      <div className="inline-form timer-controls">
        <label className="sr-only" htmlFor="timer-start">
          Thời gian bắt đầu
        </label>
        <input
          id="timer-start"
          className="text-input compact-input"
          type="number"
          min="1"
          max="999"
          value={initialValue}
          onChange={(event) => setInitialValue(event.target.value)}
        />
        <button className="button button-secondary" onClick={restart}>
          Bắt đầu lại
        </button>
        {timeRemaining > 0 && (
          <button
            className="text-button"
            onClick={() => setRunning((value) => !value)}
          >
            {running ? "Tạm dừng" : "Tiếp tục"}
          </button>
        )}
      </div>
      {timeRemaining === 0 && <p className="success-message">Đã hết giờ.</p>}
    </article>
  );
}

function WindowSizeDemo() {
  const [size, setSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <article className="demo-card">
      <DemoHeading
        number="03"
        title="Window resize"
        hook="Đăng ký và gỡ sự kiện resize"
      />
      <div className="dimension-display">
        <div>
          <span>WIDTH</span>
          <strong>
            {size.width}
            <small>px</small>
          </strong>
        </div>
        <i>×</i>
        <div>
          <span>HEIGHT</span>
          <strong>
            {size.height}
            <small>px</small>
          </strong>
        </div>
      </div>
      <p className="muted">Thay đổi kích thước cửa sổ để cập nhật.</p>
    </article>
  );
}

function ValidatedInputDemo() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    setIsValid(value === "" || validateEmail(value));
  }, [value]);
  const hasValue = value.length > 0;
  return (
    <article className="demo-card">
      <DemoHeading
        number="04"
        title="Form validation"
        hook="Kiểm tra email mỗi khi giá trị thay đổi"
      />
      <label className="field-label" htmlFor="email-input">
        Email
      </label>
      <input
        id="email-input"
        type="email"
        className={`text-input ${!isValid ? "input-error" : ""}`}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="ban@example.com"
        aria-invalid={!isValid}
      />
      {!isValid ? (
        <p className="error-message">Vui lòng nhập địa chỉ email hợp lệ.</p>
      ) : (
        <p className="success-message">
          {hasValue ? "Địa chỉ email hợp lệ." : "Nhập email để kiểm tra."}
        </p>
      )}
    </article>
  );
}

export default function EX13() {
  return (
    <section className="demo-grid" aria-label="Bài tập useEffect">
      <UserPostsDemo />
      <CountdownDemo />
      <WindowSizeDemo />
      <ValidatedInputDemo />
    </section>
  );
}
