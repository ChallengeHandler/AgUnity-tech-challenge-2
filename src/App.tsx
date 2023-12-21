import './App.css';
import { DataCell } from './components/DataCell';
import populationData from './data/population.json'
import { DataCard } from './components/DataCard';
import { DataGroup } from './components/DataGroup';

function App() {
  return (
    <div className="App">
      {Object.keys(populationData).map((key) => (
        <DataGroup
          key={key}
          data={populationData[key as CategoryType]}
          category={key as CategoryType}
        />
      ))}
    </div>
  );
}

export default App;
