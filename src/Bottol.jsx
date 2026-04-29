import React from "react";

const Bottol = ({ bottol,handleAddCard }) => {
  const {id, name, img, price, stock } = bottol;

  return (
    <div className="w-72 p-3 flex flex-col  bg-emerald-200 border-2 border- blue-600">
      <img className="w-64" src={img} alt="" />
      <h1 className="text-center  font-bold ">{name}</h1>
      <div className=" flex justify-around pb-5 font-mono">
        <h3>Price : {price}</h3>
        <h3>Stock : {stock}</h3>
      </div>
      <button onClick={()=>handleAddCard(bottol)} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-300">
  Add to Cart
</button>
    </div>
  );
};

export default Bottol;
