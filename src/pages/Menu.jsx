import menu from "../assets/menu.jpg";
import Omelette from "../assets/Omelette.jpeg";
import sanwis from "../assets/sanwis2.jpg";
import pay from "../assets/pay.jpeg";
import Logo from "../assets/Restaurant-Logo.png";
import cafe from "../assets/cafe.png";
import Footer from "../footer/Footer";

function Menu() {
  return (
    <div className="bg-stone-200">
      <div className="w-full">
        <img
          className="h-[300px] md:h-[700px] w-full object-cover"
          src={menu}
          alt="Logo"
        />
      </div>

      <div className="flex justify-center items-center py-8 md:py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-neonderthaw mb-4">¡Bienvenido al nuevo restaurante!</h1>
          <p className="text-xl md:text-3xl lg:text-5xl font-bold mb-4">Desayunos, comidas y más!!</p>
        </div>
      </div>

      <div className="py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <img
              className="h-[300px] w-auto lg:h-[400px] lg:w-[400px] object-cover"
              src={Omelette}
              alt="Omelette"
            />
          </div>
          <div className="mb-8 md:mb-0 min-w-[300px]">
            <p className="text-center font-bold text-xl md:text-2xl lg:text-2xl mb-3">Desayunos</p>
            <ul className="text-base md:text-md lg:text-xl list-disc ml-6">
              <li style={{whiteSpace: 'pre-wrap'}}>Omelette                       ------  $50</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Waffle con fruta            ------  $50</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Wafle con miel              ------  $25
                <ul className="text-xs md:text-xs lg:text-md ml-6">
                  <li>Miel de abeja o maple.</li>
                </ul>
              </li>
              <li style={{whiteSpace: 'pre-wrap'}}>Waffle con huevo          ------  $62</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Toast                              ------  $55
                <ul className="text-xs md:text-xs lg:text-md ml-6">
                  <li>Dulce o salado.</li>
                </ul>
              </li>
              <li style={{whiteSpace: 'pre-wrap'}}>Toast con huevo            ------  $62</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Chilaquiles                     ------  $50</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Chilaquiles con huevo   ------  $62</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Huevos al gusto            ------  $50</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Paquete desayuno         ------  $62</li>
            </ul>
          </div>
          <div>
            <img
              className="h-[300px] w-auto lg:h-[400px] lg:w-[400px] object-cover"
              src={sanwis}
              alt="Sanwis"
            />
          </div>
        </div>
      </div>

      <div className="py-8 lg:px-5 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <p className="text-center font-bold text-xl md:text-2xl lg:text-2xl mb-3">Comidas</p>
            <ul className="text-base md:text-md lg:text-xl list-disc ml-6">
            <li style={{whiteSpace: 'pre-wrap'}}>Sandwich                   ------  $50
                <ul className="text-xs md:text-xs lg:text-md ml-6">
                    <li>Pollo, jamon de pavo o panela.</li>
                </ul>
              </li>
              <li style={{whiteSpace: 'pre-wrap'}}>Wrap                         ------  $50
                <ul className="text-xs md:text-xs lg:text-md ml-6">
                    <li>Tortilla de espinaca o tomate.</li>
                </ul>
              </li>
              <li style={{whiteSpace: 'pre-wrap'}}>Ensalada                    ------  $70
                <ul className="text-xs md:text-xs lg:text-md ml-6">
                  <li>Bowl de ensalada con pollo,</li>
                  <li>aguacate y aderezo.</li>
                </ul>
              </li>
              <li style={{whiteSpace: 'pre-wrap'}}>Crepas                       ------  $55
                <ul className="text-xs md:text-xs lg:text-md ml-6">
                  <li>Dulce o salado</li>
                </ul>
              </li>
            </ul>
            <p className="text-center font-bold text-xl md:text-2xl lg:text-2xl mb-3">Extras</p>
            <ul className="text-base md:text-md lg:text-xl list-disc ml-6">
              <li style={{whiteSpace: 'pre-wrap'}}>Aguacate                   ------  +$10</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Queso panela            ------  +$10</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <img
              className="h-[300px] w-auto lg:h-[400px] lg:w-[400px] object-cover"
              src={pay}
              alt="Omelette"
            />
          </div>
          <div className="mb-8 md:mb-0">
            <p className="text-center font-bold text-xl md:text-2xl lg:text-2xl mb-3">Snacks</p>
            <ul className="text-base md:text-md lg:text-xl list-disc ml-6">
              <li style={{whiteSpace: 'pre-wrap'}}>Yogurt griego            ------  $57
                <ul className="text-base md:text-md lg:text-xl">
                    <li>con frutas</li>
                </ul>
              </li>
              <li style={{whiteSpace: 'pre-wrap'}}>Galletas surtidas        ------  $20</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Galletas caseras         ------  $25</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Pan de zanahoria       ------  $30</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Pay de queso             ------  $30</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Pack de nueces/        ------  $25
                <ul className="text-base md:text-md lg:text-xl">
                    <li>frutos secos</li>
                </ul>
              </li>
              <li style={{whiteSpace: 'pre-wrap'}}>Barra de granola        ------  $25
                <ul className="text-base md:text-md lg:text-xl">
                    <li>o higo</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <img
              className="h-[300px] w-auto lg:h-[400px] lg:w-[400px] object-cover"
              src={cafe}
              alt="Omelette"
            />
          </div>
          <div className="mb-8 md:mb-0 min-w-[300px]">
            <p className="text-center font-bold text-xl md:text-2xl lg:text-2xl mb-3">Bebidas</p>
            <ul className="text-base md:text-lg lg:text-xl list-disc ml-6">
              <li style={{whiteSpace: 'pre-wrap'}}>Cafe americano              ------  $20</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Cafe dalgona                  ------  $25</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Capuccino                      ------  $25</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Cafe de capsula              ------  $40</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Cafe starbucks               ------  $50</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Jugo de naranja             ------  $33</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Jugo de betabel             ------  $40</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Jugo verde                     ------  $40</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Te lipton                         ------  $25</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Agua mineral                 ------  $25</li>
              <li style={{whiteSpace: 'pre-wrap'}}>Licuado                          ------  $31
                <ul className="text-xs md:text-xs lg:text-md ml-6">
                    <li>fresa o chocolate</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="h-[250px] md:h-[300px] w-auto lg:h-[400px] object-cover"
              src={Logo}
              alt="Sanwis"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Menu;

// function Menu() {
//   return (
//     <div className="bg-stone-200">
//       <div className="w-full">
//         <img
//             className="h-[700px] w-full max-h-[700px]"
//             src={menu}
//             alt="Logo"
//         />
//       </div>

//       <div className="flex justify-center items-center h-[200px] bg-stone-200">
//         <div className="text-center">
//           <h1 className="text-5xl sm:text-6xl font-bold mb-4">¡Bienvenido al nuevo restaurante!</h1>
//           <p className="text-3xl sm:text-4xl font-bold mb-4">Desayunos, comidas y más!!</p>
//         </div>
//       </div>

//       <div className="h-[500px] bg-stone-200">
//         <div className="flex items-center justify-between">
//           <div>
//             <img
//                 className="h-[500px] w-[550px]"
//                 src={Omelette}
//                 alt="Logo"
//             />
//           </div>
//           <div>
//             <p className="text-center font-bold text-4xl mb-3">Desayunos</p>
//             <ul className="text-2xl list-disc ml-6">
              // <li style={{whiteSpace: 'pre-wrap'}}>Omelette                       ----------  $50</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Waffle con fruta            ----------  $50</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Wafle con miel              ----------  $25
              //   <ul className="text-sm ml-6">
              //     <li>Miel de abeja o maple.</li>
              //   </ul>
              // </li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Waffle con huevo          ----------  $62</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Toast                              ----------  $55
              //   <ul className="text-sm ml-6">
              //     <li>Dulce o salado.</li>
              //   </ul>
              // </li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Toast con huevo            ----------  $62</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Chilaquiles                     ----------  $50</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Chilaquiles con huevo   ----------  $62</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Huevos al gusto            ----------  $50</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Paquete desayuno         ----------  $62</li>
//             </ul>
//           </div>
//           <div>
//             <img
//                 className="h-[500px] w-[550px]"
//                 src={sanwis}
//                 alt="Logo"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="h-[500px] bg-stone-200">
//         <div className="flex items-center justify-between px-3">
//           <div>
//             <p className="text-center font-bold text-4xl mb-3">Comidas</p>
//             <ul className="text-2xl list-disc ml-6">
              // <li style={{whiteSpace: 'pre-wrap'}}>Sandwich                     ----------  $50
              //   <ul className="text-sm ml-6">
              //       <li>Pollo, jamon de pavo o panela.</li>
              //   </ul>
              // </li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Wrap                           ----------  $50
              //   <ul className="text-sm ml-6">
              //       <li>Tortilla de espinaca o tomate.</li>
              //   </ul>
              // </li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Ensalada                      ----------  $70
              //   <ul className="text-sm ml-6">
              //     <li>Bowl de ensalada con pollo,</li>
              //     <li>aguacate y aderezo.</li>
              //   </ul>
              // </li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Crepas                         ----------  $55
              //   <ul className="text-sm ml-6">
              //     <li>Dulce o salado</li>
              //   </ul>
              // </li>
//             </ul>
//             <p className="text-center font-bold text-4xl mb-3">Extras</p>
//             <ul className="text-2xl list-disc ml-6">
              // <li style={{whiteSpace: 'pre-wrap'}}>Aguacate                     ----------  +$10</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Queso panela              ----------  +$10</li>
//             </ul>
//           </div>
          
//           <div>
//             <img
//                 className="h-[500px] w-[500px]"
//                 src={pay}
//                 alt="Logo"
//             />
//           </div>

//           <div>
//             <p className="text-center font-bold text-4xl mb-3">Snacks</p>
//             <ul className="text-2xl list-disc ml-6">
              // <li style={{whiteSpace: 'pre-wrap'}}>Yogurt griego              ----------  $57
              //   <ul className="text-2xl">
              //       <li>con frutas</li>
              //   </ul>
              // </li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Galletas surtidas          ----------  $20</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Galletas caseras           ----------  $25</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Pan de zanahoria         ----------  $30</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Pay de queso               ----------  $30</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Pack de nueces/          ----------  $25
              //   <ul className="text-2xl">
              //       <li>frutos secos</li>
              //   </ul>
              // </li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Barra de granola          ----------  $25
              //   <ul className="text-2xl">
              //       <li>o higo</li>
              //   </ul>
              // </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="h-[500px] bg-stone-200">
//         <div className="flex items-center justify-between">
//           <div>
//             <img
//                 className="h-[500px] w-[550px]"
//                 src={cafe}
//                 alt="Logo"
//             />
//           </div>
//           <div>
//             <p className="text-center font-bold text-4xl mb-3">Desayunos</p>
//             <ul className="text-2xl list-disc ml-6">
              // <li style={{whiteSpace: 'pre-wrap'}}>Cafe americano                       ----------  $20</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Cafe dalgona                          ----------  $25</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Capuccino                               ----------  $25</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Cafe de capsula                      ----------  $40</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Cafe starbucks                        ----------  $50</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Jugo de naranja                      ----------  $33</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Jugo de betabel                     ----------  $40</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Jugo verde                             ----------  $40</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Te lipton                                 ----------  $25</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Agua mineral                         ----------  $25</li>
              // <li style={{whiteSpace: 'pre-wrap'}}>Licuado                                  ----------  $31
              //   <ul className="text-sm ml-6">
              //       <li>fresa o chocolate</li>
              //   </ul>
              // </li>
//             </ul>
//           </div>
//           <div>
//             <img
//                 className="h-[500px] w-[430px]"
//                 src={Logo}
//                 alt="Logo"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   }
  
//   export default Menu;



