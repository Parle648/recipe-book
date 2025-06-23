import { Provider } from "react-redux";
import "./App.css";
import appStore, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import router from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Provider store={appStore}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
