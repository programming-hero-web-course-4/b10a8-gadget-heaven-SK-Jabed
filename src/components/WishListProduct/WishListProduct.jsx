import { useEffect, useState } from "react";
import { getAllWishListProducts, removeWishListProduct } from "../../utility/localStorage";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";

const WishListProduct = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
      const wishListProduct = getAllWishListProducts();
      setGadgets(wishListProduct);
    }, []);


    const handleRemove = (id) => {
      removeWishListProduct(id);
      // Remove item from state as well
      setGadgets((prevGadgets) =>
        prevGadgets.filter((gadget) => gadget.product_id !== id)
      );
    };


    return (
      <div>
        <div className="container w-11/12 mx-auto flex items-center justify-between mt-12">
          <div>
            <h2 className="font-bold text-2xl">Wishlist</h2>
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
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2  py-3 px-6 bg-[#9538E2] text-white rounded-full hover:bg-white hover:text-[#9538E2]">
                  <button
                    onClick={() => handleRemove(gadget.product_id)}
                    className=" text-lg font-semibold"
                  >
                    Remove
                  </button>
                  <RxCrossCircled className="text-2xl text-red-400" />
                </div>
                {/* <button className="cursor-pointer">
                  <RxCrossCircled className="text-4xl text-red-400 mr-10" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default WishListProduct;