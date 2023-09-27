import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className=" ">
  {
    cart.length > 0  ? 
    (<div className="flex justify-between w-[80%] px-[5rem]">

      <div className="max-w-xl ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div className="flex flex-col">
          <div className="font-bold text-2xl text-lime-500">Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="text-green-600 font-semibold">Total Amount: ${totalAmount}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center h-screen">
      <h1 className="py-2 font-extrabold">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
