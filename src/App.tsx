import { DeadAnimals } from './DeadAnimals/DeadAnimals';
import { Demo } from './DemoCard/Demo';
import { PlasticFishes } from './fishes/PlasticFishes';
import { Oil } from './Oil/Oil';
import DumpTruck from './DumpTruck';
import { PlasticBagGarbage } from './PlasticBagGarbage/PlasticBagGarbage';

function App() {
  return (
    <main>
      <PlasticFishes />
      <DumpTruck />
      <Oil />
      <DeadAnimals />
      <PlasticBagGarbage />
    </main>
  );
}

export default App;
