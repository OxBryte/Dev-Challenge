import './App.css';
import Clock from './components/Clock';
import CSSVJS from './components/CSSVariablesXJS';
import DrumKit from './components/DrumKit';

function App() {
  return (
    <div className="">
      <DrumKit />
      <Clock />
      <CSSVJS />
    </div>
  );
}

export default App;
