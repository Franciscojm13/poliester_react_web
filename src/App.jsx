
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './sass/App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    
    <div className="App">
      <NavBar />
      <ItemListContainer saludoContenedorItems={'Hola soy un contenedor de items'}/>
      <ItemDetailContainer/>
    </div>  
  )
}

export default App
