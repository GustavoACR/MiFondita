import ReactDOM from "react-dom";

function Confirm({ children, isOpen, closeModal, titulo, setConfirm }) {
  const modal = isOpen ? (
    <div className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center z-[1000] backdrop-filter backdrop-blur-md bg-opacity-5">
      <div className="px-5 text-center max-h-[95vh] max-w-[80vw] bg-neutral-200 rounded-lg ring-1 shadow-xl shadow-stone-500/50 animate-fadeIn overflow-auto">
        <div className="mt-5">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            <span className="font-bold block">{titulo}</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 mb-3 items-center justify-center mt-5">
          {children}
        </div>
      </div>
    </div>
  ) : null;
  return ReactDOM.createPortal(modal, document.getElementById("root"));
}
export default Confirm;