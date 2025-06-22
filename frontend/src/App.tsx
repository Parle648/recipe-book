import { Provider } from "react-redux";
import "./App.css";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import appStore from "./store/store";

function App() {
  return (
    <Provider store={appStore}>
      <CatalogPage />
    </Provider>
  );
}

export default App;
