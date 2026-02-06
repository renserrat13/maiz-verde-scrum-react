import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import QuienesSomos from "./components/Nosotros";
import Productos from "./components/Productos";

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <QuienesSomos />
      <Productos />
      <Footer />
    </div>
  );
}

export default App;