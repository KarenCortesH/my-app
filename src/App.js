import logo from './logo.svg';
import './App.css';
import { useState ,useEffect } from 'react';
//importamos el componente
import Surprise from './Surprise';

function App() {
  //mostraremos cuando esta oculto y cuando no
  const [showSurprise,setShowSurprise] = useState(false);
/*descarga cuando lo necesita, si hacemos el import,
lo va decargar desde la compilacion con el resto de los componentes
que se tengan*/
  useEffect(() => {
   import ("./Hello").then(mod => mod.default());
  }, [])
  return (
    <div className="App">
      <button onClick= { (ev) => setShowSurprise(true)}>Mostrar Sorpresa</button>
    {/* condicion para cuando este en verdadero y lo deba Mostrar */}
      {
        showSurprise && <Surprise></Surprise>
      }
    </div>
  );
}

export default App;
