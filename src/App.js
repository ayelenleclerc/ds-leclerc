import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div class="App-main">
          <ItemListContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
