import "./App.css";
import { ProductList, Filters } from "./components";

function App() {
  return (
    <div className="App">
      <div className="header">FilpKart</div>
      <div className="page-layout">
        <Filters />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
