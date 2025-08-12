// import React from "react";
// import { QRCodeCanvas } from "qrcode.react"; // Correct import from the library
// import logo from "./assets/logo.png";

// export default function MyQR() {
//   return (
//     <div className="flex flex-col items-center p-6">
//       <img src={logo} alt="Logo" className="w-24 h-auto mb-4" />
//       <QRCodeCanvas 
//         value="https://ayanshi-decorations.vercel.app" 
//         size={256} 
//       />
//       <p className="mt-4 text-gray-600">Scan to visit our website</p>
//     </div>
//   );
// }




import React from "react";
import { QRCodeCanvas } from "qrcode.react"; // QR generator
import logo from "./assets/logo.png";

export default function MyQR() {
  return (
    <div className="flex flex-col items-center p-6">

      {/* QR code with logo overlay */}
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* QR Code */}
        <QRCodeCanvas
          value="https://ayanshi-decorations.vercel.app"
          size={200}
          level="H" // High error correction so QR still works with logo
          includeMargin={true}
        />

        {/* Logo in center of QR */}
        <img
          src={logo}
          alt="QR Logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50px", // adjust for size
            height: "50px",
            borderRadius: "8px",
            background: "white", // background to keep QR readable
            padding: "4px",
          }}
        />
      </div>

      <p className="mt-4 text-gray-600">Scan to visit our website</p>
    </div>
  );
}
