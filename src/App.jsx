
//import './App.css';
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from "./users/Users";
import Menu from "./pages/Menu";
import ContextProvider from "./context/Context";
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
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Toaster />
    </div>
    </ContextProvider>
  );
}
export default App;
