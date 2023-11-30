// CartItem.js
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Cartitem.module.css";
import { useDispatch } from "react-redux";
import {  removeItem, updatequantity } from "../../redux/slice/cartSlice";

export default function CartItem({ data }) {


   const dispatch = useDispatch()



  const [quantity , setQuantity] = useState(data.quantity)
  const [totalPrice, setTotalPrice] = useState(+data.price * +data.quantity);

  const handleChange = (e) => {
    // You need to update the total price when the quantity changes
    const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
   setQuantity(value)
  }

  const handleIncrease = () => {
     setQuantity(pre => pre+1)
  }

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleDelete = () => {
    dispatch( removeItem({id:data.id}))
  }
  


useEffect(() => {
  setTotalPrice(data.price*quantity)
  dispatch(updatequantity({id:data.id,quantity}))
},[quantity,data.price,data.id,dispatch])



  return (
    <tr>
      <td style={{maxWidth:450 ,textAlign:'left'}}>
        <div className="d-flex align-items-center">
          <img src={data.imageUrl} alt="image" style={{width:100}} />
          <p style={{marginLeft:10}}>{data.name}</p>
        </div>
      </td>
      <td className={styles.price}>{data.price}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <button className={styles.changeBtn} onClick={handleDecrease}>-</button>
          <input
            type="number"
            value={quantity}
            className={styles.input}
            onChange={handleChange}
          />
          <button className={styles.changeBtn} onClick={handleIncrease}>+</button>
        </div>
      </td>
      <td className={styles.price}>${totalPrice}</td>
      <td>
        <button variant="danger" onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
}
