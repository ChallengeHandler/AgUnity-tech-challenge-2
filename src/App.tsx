import './App.css';
import { DataCell } from './components/DataCell';
import populationData from './data/population.json'
import { DataCard } from './components/DataCard';
import { DataGroup } from './components/DataGroup';

function App() {
  return (
    <div className="App">
      <DataCell
        label='efefe'
        value='123123'
        style='green'
      />
      <DataCell
        label='efefe'
        value='123123'
        style='violet'
      />
      <DataCell
        label='efefe'
        value='123123'
        style='blue'
      />
      <DataCard
        data={populationData.men.countries}
      />
      <DataGroup
        data={populationData.men}
        category="men"
      />
    </div>
  );
}

export default App;
