import "./App.css";
import ProductCard from "./components/ProductCard";
import products from "./products";

function App() {
  return (
    <div className="App">
      <h1>Simple-Product-App</h1>
      <div className="main">
        <div className="products">
          {products.map((product) => {
            return <ProductCard />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
