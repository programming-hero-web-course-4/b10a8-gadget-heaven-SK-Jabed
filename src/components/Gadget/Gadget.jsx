

const Gadget = ({ gadget }) => {
    const { product_image, product_title, price } = gadget || {};
    return (
      <div>
        <div className="card shadow-xl p-6 bg-white">
          <figure className="rounded-2xl">
            <img
              className="h-[182px] w-[282px]"
              src={product_image}
              alt={product_image}
            />
          </figure>
          <div className="border-b-2 pb-3 mt-8">
            <h2 className="text-xl font-semibold">{product_title}</h2>
            <p className="mt-3 text-base font-semibold text-gray-500">
              By: {price}
            </p>
          </div>
          <div className="mt-4">
            <button className="px-6 py-3 border-2 border-[#9538E2] text-[#9538E2] text-lg font-semibold bg-white rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
};

export default Gadget;