import { useState, useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiHelpCircle, BiLogIn, BiSupport, BiSolidUserCircle, BiLogOut } from "react-icons/bi";
import { BsDatabaseFillCheck, BsFillFileBarGraphFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/LogoOcsakNegro.png";
import SidebarLink from "./SidebarLink";
import { Context } from "../context/Context";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const Ctx = useContext(Context);
  return (
    <>
      {!showSidebar && (
        <div
          className={`border-b border-black flex items-center justify-center absolute bg-white cursor-pointer z-[1400] ease-in-out duration-300 w-[60px] h-[60px] sm:hidden`}
          onClick={() => setShowSidebar((oldState) => !oldState)}
          onMouseEnter={() => setShowSidebar((oldState) => !oldState)}
        >
          <FaBars />
        </div>
      )}
      <div
        className={`absolute flex h-[100vh] ${showSidebar ? "w-full" : "w-0"}`}
      >
        <div
          className={`text-black pb-5 flex flex-col bg-clip-padding backdrop-filter backdrop-blur-md border border-black bg-sidebarcolor/[0.9] w-[250px] z-[1500] ease-in-out duration-300 ${
            showSidebar
              ? "translate-x-0 "
              : "sm:-translate-x-[calc(100%-60px)] -translate-x-full"
          }`}
          onMouseEnter={() => setShowSidebar(true)}
          onMouseLeave={() => setShowSidebar(false)}
        >
          <div className="bg-black h-[64px] flex items-center justify-center">
            {showSidebar && (
              <img
                className="h-[60px] w-[200px]"
                src={Logo}
                alt="Continental Logo"
              />
            )}
          </div>
          <div className="flex flex-col justify-between	h-full">
            <div>
            {Ctx.authenticated ? (
              <SidebarLink
                title="Requerimientos OCSAK"
                link="/requerimientos"
                icon={<BsDatabaseFillCheck />}
                onClick={() => setShowSidebar(false)}
              />
              ) : (
                <SidebarLink
                  title="Inicio"
                  link="/"
                  icon={<AiFillHome />}
                  onClick={() => setShowSidebar(false)}
                />
              )}
            {Ctx.authenticated ? (
              <SidebarLink
                title="Graficas"
                link="/graficas"
                icon={<BsFillFileBarGraphFill />}
                onClick={() => setShowSidebar(false)}
              />
            ) : null}
            {Ctx.user.rol === "ADMIN" ? (
              <SidebarLink
                title="Control de Usuario"
                link="/usuarios"
                icon={<BiSolidUserCircle />}
                onClick={() => setShowSidebar(false)}
              />
            ) : null}
          </div>
          <div>
            {Ctx.authenticated ? (
                <SidebarLink
                  title="Logout"
                  link="/"
                  icon={<BiLogOut />}
                  onClick={() => Ctx.logout()}
                />
              ) : (
                <SidebarLink
                  title="Login"
                  link="/login"
                  icon={<BiLogIn />}
                  onClick={() => setShowSidebar(false)}
                />
                )}
                <SidebarLink
                  title="PDR"
                  link="/guide"
                  icon={<BiHelpCircle />}
                  onClick={() => setShowSidebar(false)}
                />
                <SidebarLink
                  title="Soporte"
                  link="/support"
                  icon={<BiSupport />}
                  onClick={() => setShowSidebar(false)}
                />
            </div>
          </div>
        </div>
        {showSidebar && (
          <div
            className={`h-full bg-transparent  w-[calc(100%-200px)]`}
            onClick={() => setShowSidebar(false)}
          ></div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
