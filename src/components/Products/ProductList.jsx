import React, {useState} from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ProductCard from "./ProductCard";

// Products array using public paths
const products = [
 { id: 1, title: "16a Plug", image: "/assets/Products/16A Plug.jpg" },
{ id: 2, title: "266 Clamp Meter", image: "/assets/Products/266 Clamp Meter.jpg" },
{ id: 3, title: "4'' Proj. Meter", image: "/assets/Products/4'' Proj. Meter.jpg" },
{ id: 4, title: "8108 Limit Switch", image: "/assets/Products/8108 Limit Switch.jpg" },
{ id: 5, title: "Ats", image: "/assets/Products/ATS.jpg" },
{ id: 6, title: "Add On Block", image: "/assets/Products/Add On Block.jpg" },
{ id: 7, title: "Airvent", image: "/assets/Products/Airvent.jpg" },
{ id: 8, title: "Bearing", image: "/assets/Products/Bearing.jpg" },
{ id: 9, title: "Bimettalic Lugs", image: "/assets/Products/Bimettalic Lugs.jpg" },
{ id: 10, title: "Brass Gland", image: "/assets/Products/Brass Gland.jpg" },
{ id: 11, title: "Buzzer", image: "/assets/Products/Buzzer.jpg" },
{ id: 12, title: "Ch Contector", image: "/assets/Products/CH Contector.jpg" },
{ id: 13, title: "Cob", image: "/assets/Products/COB.jpg" },
{ id: 14, title: "Ct Coil", image: "/assets/Products/CT Coil.jpg" },
{ id: 15, title: "Cable Tie", image: "/assets/Products/Cable Tie.jpg" },
{ id: 16, title: "Cable Tags", image: "/assets/Products/Cable tags.jpg" },
{ id: 17, title: "Change Over", image: "/assets/Products/Change Over.jpg" },
{ id: 18, title: "Channel Patti", image: "/assets/Products/Channel Patti.jpg" },
{ id: 19, title: "Coil", image: "/assets/Products/Coil.jpg" },
{ id: 20, title: "Connector", image: "/assets/Products/Connector.jpg" },
{ id: 21, title: "Contactor", image: "/assets/Products/Contactor.jpg" },
{ id: 22, title: "Control Box", image: "/assets/Products/Control Box.jpg" },
{ id: 23, title: "Cooling Fan", image: "/assets/Products/Cooling Fan.jpg" },
{ id: 24, title: "Crane Remote", image: "/assets/Products/Crane Remote.jpg" },
{ id: 25, title: "Cutter", image: "/assets/Products/Cutter.jpg" },
{ id: 26, title: "Double Nail Clip", image: "/assets/Products/Double Nail Clip.jpg" },
{ id: 27, title: "Dummy Plate", image: "/assets/Products/Dummy Plate.jpg" },
{ id: 28, title: "Element", image: "/assets/Products/Element.jpg" },
{ id: 29, title: "End Pvc Lugs", image: "/assets/Products/End PVC Lugs.jpg" },
{ id: 30, title: "Float Switch", image: "/assets/Products/Float Switch.jpg" },
{ id: 31, title: "Foot Switch", image: "/assets/Products/Foot Switch.jpg" },
{ id: 32, title: "Fuse Base", image: "/assets/Products/Fuse Base.jpg" },
{ id: 33, title: "Glass Fuse", image: "/assets/Products/Glass Fuse.jpg" },
{ id: 34, title: "Hrc Fuse", image: "/assets/Products/HRC Fuse.jpg" },
{ id: 35, title: "Indicator", image: "/assets/Products/Indicator.jpg" },
{ id: 36, title: "Junction Box", image: "/assets/Products/Junction Box.jpg" },
{ id: 37, title: "Lugs", image: "/assets/Products/Lugs.jpg" },
{ id: 38, title: "Mccb", image: "/assets/Products/MCCB.jpg" },
{ id: 39, title: "Mk 1 Coil", image: "/assets/Products/MK-1 Coil.jpg" },
{ id: 40, title: "Mpcb", image: "/assets/Products/MPCB.jpg" },
{ id: 41, title: "My Relay", image: "/assets/Products/MY-Relay.jpg" },
{ id: 42, title: "Main Switch", image: "/assets/Products/Main Switch.jpg" },
{ id: 43, title: "Metal Box", image: "/assets/Products/Metal Box.jpg" },
{ id: 44, title: "Metal Push Button", image: "/assets/Products/Metal Push Button.jpg" },
{ id: 45, title: "Mini Mcb Modular", image: "/assets/Products/Mini MCB Modular.jpg" },
{ id: 46, title: "Modular Box", image: "/assets/Products/Modular Box.jpg" },
{ id: 47, title: "Motor Starter", image: "/assets/Products/Motor Starter.jpg" },
{ id: 48, title: "Multi Meter", image: "/assets/Products/Multi Meter.jpg" },
{ id: 49, title: "Ns Link", image: "/assets/Products/NS Link.jpg" },
{ id: 50, title: "Pvc Channel Patti", image: "/assets/Products/PVC Channel Patti.jpg" },
{ id: 51, title: "Pvc Db Mcb Box", image: "/assets/Products/PVC DB MCB Box.jpg" },
{ id: 52, title: "Pvc End Lugs", image: "/assets/Products/PVC End Lugs.jpg" },
{ id: 53, title: "Pvc Mcb Box", image: "/assets/Products/PVC MCB Box.jpg" },
{ id: 54, title: "Pvc Open Board", image: "/assets/Products/PVC Open Board.jpg" },
{ id: 55, title: "Pvc Tape", image: "/assets/Products/PVC Tape.jpg" },
{ id: 56, title: "Pakad", image: "/assets/Products/Pakad.jpg" },
{ id: 57, title: "Proxy", image: "/assets/Products/Proxy.jpg" },
{ id: 58, title: "Push Button", image: "/assets/Products/Push Button.jpg" },
{ id: 59, title: "Push Connetor", image: "/assets/Products/Push Connetor.jpg" },
{ id: 60, title: "Relay Socket", image: "/assets/Products/Relay Socket.jpg" },
{ id: 61, title: "Relay", image: "/assets/Products/Relay.jpg" },
{ id: 62, title: "Sch Add On Block", image: "/assets/Products/SCH Add On Block.jpg" },
{ id: 63, title: "Sch Lc1d", image: "/assets/Products/SCH LC1D.jpg" },
{ id: 64, title: "Sch Lc1e", image: "/assets/Products/SCH LC1E.jpg" },
{ id: 65, title: "Sch Mcb", image: "/assets/Products/SCH MCB.jpg" },
{ id: 66, title: "Sch Rccb", image: "/assets/Products/SCH RCCB.jpg" },
{ id: 67, title: "Sch Relay", image: "/assets/Products/SCH Relay.jpg" },
{ id: 68, title: "Spn Dd Mcb Box", image: "/assets/Products/SPN DD MCB Box.jpg" },
{ id: 69, title: "Selec Apfc", image: "/assets/Products/Selec APFC.jpg" },
{ id: 70, title: "Selector Switch", image: "/assets/Products/Selector Switch.jpg" },
{ id: 71, title: "Siren", image: "/assets/Products/Siren.jpg" },
{ id: 72, title: "Sub Meter", image: "/assets/Products/Sub Meter.jpg" },
{ id: 73, title: "Surface Box", image: "/assets/Products/Surface Box.jpg" },
{ id: 74, title: "Tester", image: "/assets/Products/Tester.jpg" },
{ id: 75, title: "Tools", image: "/assets/Products/Tools.jpg" },
{ id: 76, title: "Volt Amp Led", image: "/assets/Products/Volt-AMP LED.jpg" },
{ id: 77, title: "Wall Grip", image: "/assets/Products/Wall Grip.jpg" },
{ id: 78, title: "Water Level", image: "/assets/Products/Water Level.jpg" },
{ id: 79, title: "Cableroll", image: "/assets/Products/cableroll.jpg" },
{ id: 80, title: "Capacitor", image: "/assets/Products/capacitor.jpg" },
{ id: 81, title: "Circuitbreaker", image: "/assets/Products/circuitbreaker.jpg" },
{ id: 82, title: "Industrialpanel", image: "/assets/Products/industrialpanel.jpg" },
{ id: 83, title: "Mainswitch", image: "/assets/Products/mainswitch.jpg" },
{ id: 84, title: "Nail Clip", image: "/assets/Products/nail Clip.jpg" },
];

function ProductList() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    if (isExpanded) {
      setVisibleCount(8);
      setIsExpanded(false);
    } else {
      setVisibleCount(products.length);
      setIsExpanded(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
        {products.slice(0, visibleCount).map((product, index) => (
          <div
            key={product.id}
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Show More / Less Button */}
      <button
        onClick={handleShowMore}
        className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
                   hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
      >
        <span>{isExpanded ? "Show Less" : "Show More"}</span>
        {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
      </button>
    </div>
  );
}

export default ProductList;