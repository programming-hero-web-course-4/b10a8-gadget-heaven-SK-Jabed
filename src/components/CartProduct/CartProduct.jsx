import { useEffect, useState } from "react";
import { getAllCartProducts, removeCartProduct } from "../../utility/localStorage";
import { RxCrossCircled } from "react-icons/rx";
// import { useLoaderData } from "react-router-dom";

const CartProduct = () => {
  const [gadgets, setGadgets] = useState([]);
  console.log(gadgets);

//   const data = useLoaderData();
//   console.log(data);
//   const [products, setProducts] = useState(data);

  const handleSort = () => {
    // setSort(sortBy);

    // if (sortBy) {
        const sorted = [...gadgets].sort((a, b) => b.price - a.price);
        setGadgets(sorted);
    // }


  }

  useEffect(() => {
    const cartProduct = getAllCartProducts();
    setGadgets(cartProduct);
  }, []);

//   const handleRemove = id => {
//     removeCartProduct(id)
//   }

  return (
    <div>
      <div className="container w-11/12 mx-auto flex items-center justify-between mt-12">
        <div>
          <h2 className="font-bold text-xl">Cart</h2>
        </div>
        <div className="flex items-center gap-4">
          <p>Total Cost: </p>
          <button onClick={handleSort} className="btn">Sort by Price</button>
          <button className="btn">Purchase</button>
        </div>
      </div>

      <div className="container w-11/12 mx-auto mt-6 mb-16">
        {gadgets.map((gadget, idx) => (
          <div
            key={idx}
            className="border-2 border-solid p-2 rounded-2xl flex justify-between items-center mb-2"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <img
                  className="w-28 h-28 border-1 p-1 rounded-2xl"
                  src={gadget.product_image}
                  alt="Cart Product Image"
                ></img>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#131313]">
                  {gadget.product_title}
                </h3>
                <p className="text-lg font-semibold text-gray-600">
                  {gadget.description}
                </p>
                <p className="text-lg font-semibold text-gray-600">
                  Price: {gadget.price}
                </p>
              </div>
            </div>
            <div onClick={() => removeCartProduct(gadget.player_id)} className="">
              <button className="cursor-pointer">
                <RxCrossCircled className="text-4xl text-red-400 mr-10" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProduct;