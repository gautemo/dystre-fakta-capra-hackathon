import { DeadAnimals } from './DeadAnimals/DeadAnimals';
import { PlasticFishes } from './fishes/PlasticFishes';
import { Oil } from './Oil/Oil';
import DumpTruck from './DumpTruck';
import { PlasticBagGarbage } from './PlasticBagGarbage/PlasticBagGarbage';
import { Splash } from './Splash/Splash';

function App() {
  return (
    <main>
      <Splash />
      <PlasticFishes />
      <DumpTruck />
      <Oil />
      <DeadAnimals />
      <PlasticBagGarbage />
    </main>
  );
}

export default App;
