import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';
import { CuartoComponente } from './components/CuartoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <p>Plataforma Educativa Deomiro Contreras Martínez </p>
      <PrimerComponente/>
      <SegundoComponente/>
      <TercerComponente/>
      <CuartoComponente/>
      </header>
    </div>
  );
}

export default App;
