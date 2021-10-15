import { DeadAnimals } from './DeadAnimals/DeadAnimals';
import { Demo } from './DemoCard/Demo';
import { PlasticFishes } from './fishes/PlasticFishes';
import { Oil } from './Oil/Oil';
import DumpTruck from './DumpTruck';

function App() {
  return (
    <main>
      <PlasticFishes />
      <DumpTruck />
      <Oil />
      <DeadAnimals />
    </main>
  );
}

export default App;
