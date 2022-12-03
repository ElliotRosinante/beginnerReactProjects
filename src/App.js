import "./styles.css";
import Counter from "./components/counter";
import TemperatureApp from "./components/temperatureControl";
import SearchFilter from "./components/SearchFilter";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <TemperatureApp />
      <SearchFilter />
    </div>
  );
}
