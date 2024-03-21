import Logo from "../assets/Restaurant-Logo-blanco.png";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center justify-between">
        <div className="mb-4 md:mb-0">
          <img
            className="h-[100px]"
            src={Logo}
            alt="Continental Logo"
          />
        </div>
        <div className="text-sm md:text-base">
          <p>Dirección: Calle Principal #123, Ciudad</p>
          <p>Teléfono: 123-456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="mt-4 md:mt-0">
          <p>Síguenos en:</p>
          <div className="flex mt-2 items-center text-center justify-between">
            <button
              onClick={() => {}}
              className="hover:scale-105"
            >
              <FaFacebook className="text-3xl sm:text-4xl" />
            </button>

            <button
              onClick={() => {}}
              className="hover:scale-105"
            >
              <FaInstagram className="text-3xl sm:text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


