
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
