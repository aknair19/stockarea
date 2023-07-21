import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Warehouse from "./components/Warehouse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [],
    },
    {
      path: "/warehouse/:warehousename",
      element: <Warehouse />,
    },
  ]);
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
