import logo from './logo.svg';
// import './App.css';
import ProductList from './products/ProductList';
import ProductItem from './products/ProductItem';
function App() {
  return (
    <div className="App">
      <h1>My Product List</h1>
      <ProductList/>
      <ProductItem/>
    </div>
  );
}

export default App;
