import './App.css';
import { generatePalette } from './Components/ColorHelpers';
import Palette from './Components/Palette';
import SeedPalette from './Components/SeedPalette';   //this will import an array

function App() {
  console.log(generatePalette(SeedPalette[2]));
  return (
    <div className="App">
      <Palette palette={generatePalette(SeedPalette[2])} />
    </div>
  );
}

export default App;
