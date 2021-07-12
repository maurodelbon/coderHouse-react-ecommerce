import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/shop/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting="hola bienvenide"/>
    </div>
  );
}

export default App;
