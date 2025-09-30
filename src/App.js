import Routing from "./components/Routing/Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEventsStore } from "./store";
import { useEffect } from "react";

function App() {
  let store = useEventsStore();
  let { fetchData } = store;

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
