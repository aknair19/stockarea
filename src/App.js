import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import Name from "./components/Name";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Name/>
      </div>
    </Provider>
  );
}

export default App;
