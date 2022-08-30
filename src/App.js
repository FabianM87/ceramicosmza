import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import "bootstrap-icons/font/bootstrap-icons.css";

import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
