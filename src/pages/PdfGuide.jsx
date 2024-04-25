import Pdf from "../assets/CANSAT.pdf";

// Descomentar y referencias correctamente el PDF

function PdfGuide() {
    return (
      <div className="h-[calc(100vh-65px)] w-full">
        <object
          data={Pdf}
          type="application/pdf"
          width="100%"
          height="100%"
        ></object>
      </div>
    );
  }
  
  export default PdfGuide;