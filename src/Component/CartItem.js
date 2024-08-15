import React,{ useState, useEffect } from "react"
import { products } from '../Pages/product';
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart";

function CartItem(props) {  
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);  
  const dispatch= useDispatch();

  const handleMinusQuantity =()=>{
    dispatch(changeQuantity({
        productId:productId,
        quantity:productId -1 
    }));
}
const handlePlusQuantity =()=>{
    dispatch(changeQuantity({
        productId:productId,
        quantity:quantity +1
    }));
}
  useEffect(() => {
    const findDetail = products.filter(product => product.id === productId)[0];  
    setDetail(findDetail ); 
  }, [productId]);
  console.log(detail);

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      {detail.image && <img src={detail.image} alt="" className="w-12" />}  {/* Ensure image exists */}
      <h3>{detail.name }</h3>
      <p>${detail.price ? detail.price * quantity : 0}</p>
      <div className="w-20 flex justify-between gap-2">
        <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={handleMinusQuantity}>-</button>
        <span>{quantity}</span>
        <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={handlePlusQuantity}>+</button>
      </div>
    </div>
  );
}

export default CartItem;  // Capitalized the export
 