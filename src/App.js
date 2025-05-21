import React, { useState } from "react";
import "./App.css";

const PRODUCTS = [
  {
    id: 1,
    name: "vetements may the bridges i burn ",
    description: "AUTOMNE HIVER 2017",
    price: 32000,
    image:
      "https://vorhe.co/cdn/shop/products/VETEMENTS-MAY-THE-BRIDGES-I-BURN-LIGHT-THE-WAY-1.jpg?v=1678450155&width=1920"
  },
  {
    id: 2,
    name: "Rick Owens DRKSHDW",
    description: "Ramones DRKSHDW",
    price: 42000,
    image:
      "https://www.svrn.com/cdn/shop/products/slashed-ramones-in-aqua-milk-men-s-sneakers-rick-owens-drkshdw-svrn-chicago-30073964691529_800x1000_crop_center.jpg?v=1668811293"
  },
  {
    id: 3,
    name: "number (n)ine",
    description: "number nine",
    price: 20000,
    image:
      "https://img.gem.app/566326723/1t/1691745733/number-n-ine-number-n-ine-x-disney-mickey-shirt.jpg"
  },
  {
    id: 4,
    name: "erd",
    description: "enfsnts",
    price: 150000,
    image:"https://daynight.ru/upload/iblock/19f/y1weucl45mblmjvxqzv3xm5zrexnez51.jpg"
  },
  {
    id: 5,
    name: "hellstar",
    description: "hellstar hood",
    price: 30000,
    image:"https://www.hypeneedz.com/cdn/shop/files/HellstarBrainwashedWithoutBrainrosa_800x.jpg?v=1726650996"
  }
];

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  function getTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }

  return (
    <div className="main-bg">
      <header>
        <div className="container header-content">
          <div className="logo">GRAILED</div>
          <nav>
            <a href="#">HOME</a>
            <a href="#">STORE</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACTS</a>
          </nav>
          <div className="cart-btn">
            🛒 <span>{cart.length}</span>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>GRAILED CONCEPT STORE</h1>
            <p>FUCK YALL IDGAF</p>
          </div>
        </section>
        <section className="products">
          <div className="container products-list">
            {PRODUCTS.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="price">₽{product.price.toLocaleString()}</div>
                <button onClick={() => addToCart(product)}>
                  В корзину
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Корзина */}
        <section className="cart-section">
          <div className="container">
            <h2>Корзина</h2>
            {cart.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              <div>
                <ul className="cart-list">
                  {cart.map((item, i) => (
                    <li key={i} className="cart-item">
                      <span>
                        {item.name} — ₽{item.price.toLocaleString()}
                      </span>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(i)}
                      >
                        Удалить
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="total">Итого: ₽{getTotal().toLocaleString()}</div>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          © Bitch im drowning in emotions
        </div>
      </footer>
    </div>
  );
}

export default App;
