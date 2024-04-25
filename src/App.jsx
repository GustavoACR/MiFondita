
//import './App.css';
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from "./controlTables/users/Users";
import Menu from "./pages/Menu";
import ContextProvider from "./context/Context";
import Ordenar from "./pages/Ordenar";
import Admin from "./pages/Admin";
import Items from "./controlTables/items/Items";
import Footer from "./footer/Footer";
import Tiempos from "./pages/Tiempos";
import Bebidas from "./controlTables/bebidas/Bebidas";
import Comidas from "./controlTables/comidas/Comidas";
import Desayunos from "./controlTables/desayunos/Desayunos";
import Extras from "./controlTables/extras/Extras";
import Snacks from "./controlTables/snacks/Snacks";
import Pedidos from "./controlTables/pedidos/Pedidos";
function App() {
  return (
    <ContextProvider>
      <div className="min-h-screen bg-stone-200">
      <Header />
      {/* <Sidebar /> */}
      <div className="bg-stone-200 overflow-auto max-h-[calc(100vh-60px)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/usuarios" element={<Users />} />
              <Route path="/items" element={<Items />} />
              <Route path="/ordenar" element={<Ordenar />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/tiempos" element={<Tiempos />} />
              <Route path="/bebidas" element={<Bebidas />} />
              <Route path="/comidas" element={<Comidas />} />
              <Route path="/desayunos" element={<Desayunos />} />
              <Route path="/extras" element={<Extras />} />
              <Route path="/snacks" element={<Snacks />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Toaster />
    </div>
    </ContextProvider>
  );
}
export default App;
