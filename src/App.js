import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import "bootstrap-icons/font/bootstrap-icons.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
