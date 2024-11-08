import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";
import { useEffect, useState } from "react";

const GadgetCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [gadgets, setGadgets] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (category) {
      const filteredByCategory = data.filter(
        (gadget) => gadget.category === category
      );
      setGadgets(filteredByCategory);
    } else {
      setGadgets(data.slice(0, 9));
    }
  }, [category, data]);

  return (
    <div>
      {gadgets.length === 0 ? (
        <div className="lg:flex items-start justify-start w-full">
          <p className="text-4xl font-bold text-gray-500">
            No Data Available
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gadgets.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget} />
          ))}
        <div className="mt-6">     
            
        </div>
        <button className="btn btn-warning" onClick={() => navigate("/products")}>
              View All
            </button>
        </div>
      )}
    </div>
  );
};

export default GadgetCards;
