
import './App.css';
import ClickCounter from './components/ClickCounter';
import { ItemListContainer } from './components/ItemListContainer';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonList from './components/PokemonList';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import RutasDinamicas from './components/RutasDinamicas';
import RutasDinamicas2 from './components/RutasDinamicas2';

function App() {
  return (
    <BrowserRouter>
         <Navbar />
      <Routes>
        <Route exact path="/" element = {<ItemListContainer/>} />
        <Route exact path="/clickCounter" element = {<ClickCounter/>} />
        <Route exact path="/itemDetailContainer" element = {<ItemDetailContainer/>} />
        <Route exact path="/pokemonList" element = {<PokemonList/>} />
        <Route exact path="/users" element = {<RutasDinamicas2/>} />
        <Route exact path="/users/:id" element = {<RutasDinamicas/>} />
      </Routes>
    </BrowserRouter>
  )}

export default App;


