import Header from "./components/Header";
import Footer from "./components/Footer";
import MainRoutes from "./Routes";
import { HashRouter } from "react-router-dom";
import TextProvider from "./components/context/Text";

function App() {
  return (
    <HashRouter>
      <TextProvider>
        <Header />
        <MainRoutes />
        <Footer />
      </TextProvider>
    </HashRouter>
  );
}

export default App;
