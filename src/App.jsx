
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
import Pedidos from "./pages/Pedidos";
import Admin from "./pages/Admin";
import Items from "./controlTables/items/Items";
import Footer from "./footer/Footer";
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
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Toaster />
    </div>
    </ContextProvider>
  );
}
export default App;
