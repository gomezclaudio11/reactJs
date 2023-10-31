
import './App.css';
import ClickCounter from './components/ClickCounter';
import ItemCount from './components/ItemCount';
import { ItemListContainer } from './components/ItemListContainer';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer/>
      <ClickCounter/>
      <ItemCount stock = "10"/>
    </div>
  );
}

export default App;
