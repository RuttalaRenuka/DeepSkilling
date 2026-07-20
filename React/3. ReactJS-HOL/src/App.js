import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="Renuka"
        School="Vignan's institute of engineering for women"
        Total={285}
        goal={300}
      />
    </div>
  );
}

export default App;