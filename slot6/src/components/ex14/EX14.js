import { createContext, useContext, useMemo, useState } from "react";

const themes = {
  light: { foreground: "#18231f", background: "#f5f7f4", button: "#dbe8df" },
  dark: { foreground: "#f5f7f4", background: "#202c29", button: "#344b44" },
};
const ThemeContext = createContext(null);
const CartContext = createContext(null);
const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    category: "Mains",
    label: "Hot",
    price: 4.99,
    description: "Bánh uthappam kiểu pizza với cà chua, ô liu và gia vị.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    category: "Appetizer",
    label: "",
    price: 1.99,
    description: "Bí ngòi chiên giòn với bột đậu gà và sốt me.",
  },
  {
    id: 2,
    name: "Vadonut",
    category: "Appetizer",
    label: "New",
    price: 1.99,
    description: "Món ăn vui nhộn: là bánh vada hay một chiếc donut?",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    category: "Dessert",
    label: "",
    price: 2.99,
    description: "Bánh phô mai mềm với đế bánh quy và hương bạch đậu khấu.",
  },
];

function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light");
  const value = useMemo(
    () => ({
      themeName,
      theme: themes[themeName],
      toggleTheme: () =>
        setThemeName((current) => (current === "light" ? "dark" : "light")),
    }),
    [themeName],
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (dish) =>
    setCartItems((items) => {
      const existing = items.find((item) => item.id === dish.id);
      return existing
        ? items.map((item) =>
            item.id === dish.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...items, { ...dish, quantity: 1 }];
    });
  const removeFromCart = (dishId) =>
    setCartItems((items) => items.filter((item) => item.id !== dishId));
  const clearCart = () => setCartItems([]);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function ThemeDemo() {
  const { themeName, theme, toggleTheme } = useContext(ThemeContext);
  return (
    <article
      className="demo-card theme-demo"
      style={{ color: theme.foreground, background: theme.background }}
    >
      <div className="demo-heading">
        <span className="demo-number">01</span>
        <div>
          <h3>Theme switcher</h3>
          <p>ThemeContext chia sẻ chế độ màu</p>
        </div>
      </div>
      <div className="theme-preview">
        <span className="theme-icon">{themeName === "light" ? "☼" : "☾"}</span>
        <div>
          <strong>{themeName === "light" ? "Light mode" : "Dark mode"}</strong>
          <p>Giao diện hiện tại được đọc từ Context.</p>
        </div>
      </div>
      <button
        className="button theme-button"
        style={{ background: theme.button, color: theme.foreground }}
        onClick={toggleTheme}
      >
        Chuyển sang {themeName === "light" ? "dark" : "light"} mode{" "}
        <span>↗</span>
      </button>
    </article>
  );
}

function DishesList() {
  const { addToCart } = useContext(CartContext);
  return (
    <article className="demo-card wide-card">
      <div className="demo-heading">
        <span className="demo-number">02</span>
        <div>
          <h3>Thực đơn</h3>
          <p>Thêm món vào giỏ hàng</p>
        </div>
      </div>
      <div className="dish-list">
        {dishes.map((dish) => (
          <div className="dish-item" key={dish.id}>
            <div className="dish-icon" aria-hidden="true">
              {["🍕", "🥒", "🍩", "🍰"][dish.id]}
            </div>
            <div className="dish-info">
              <div className="dish-title">
                {dish.name}
                {dish.label && <span className="dish-label">{dish.label}</span>}
              </div>
              <p>{dish.description}</p>
              <span className="dish-category">{dish.category}</span>
            </div>
            <div className="dish-buy">
              <strong>${dish.price.toFixed(2)}</strong>
              <button
                className="button button-small button-primary"
                onClick={() => addToCart(dish)}
              >
                Thêm <span>＋</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function Cart() {
  const { cartItems, removeFromCart, clearCart, itemCount, total } =
    useContext(CartContext);
  return (
    <article className="demo-card cart-card">
      <div className="demo-heading">
        <span className="demo-number">03</span>
        <div>
          <h3>Giỏ hàng</h3>
          <p>Cập nhật trực tiếp qua Context</p>
        </div>
        <span className="cart-count">{itemCount}</span>
      </div>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <span>⌑</span>
          <p>Chưa có món ăn</p>
          <small>Chọn món từ thực đơn để bắt đầu.</small>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <span>
                    {item.quantity} × ${item.price.toFixed(2)}
                  </span>
                </div>
                <strong>${(item.quantity * item.price).toFixed(2)}</strong>
                <button
                  className="icon-button"
                  aria-label={`Xóa ${item.name}`}
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <span>{itemCount} món</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <button className="text-button clear-cart" onClick={clearCart}>
            Xóa toàn bộ giỏ hàng
          </button>
        </>
      )}
    </article>
  );
}

function ContextExercises() {
  const { themeName } = useContext(ThemeContext);
  return (
    <div
      className={`context-surface ${themeName === "dark" ? "context-dark" : ""}`}
    >
      <div className="context-intro">
        <span className="context-mark">useContext</span>
        <p>
          Theme và giỏ hàng được cung cấp từ Provider, nên các component con có
          thể dùng chung dữ liệu mà không truyền props qua từng tầng.
        </p>
      </div>
      <div className="demo-grid context-grid">
        <ThemeDemo />
        <DishesList />
        <Cart />
      </div>
    </div>
  );
}

export default function EX14() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ContextExercises />
      </CartProvider>
    </ThemeProvider>
  );
}
