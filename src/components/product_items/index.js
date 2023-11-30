// ProductItem.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./productItem.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";



export default function ProductItem({ data }) {
const dispatch  = useDispatch()
  const handleAddToCart = () => {
   dispatch(addToCart({
    ...data,
    quantity: 1
   }))
   alert ('Added To The Cart')
  }

  return (
    <Card className={styles.productItem}>
      <Card.Img variant="top" src={data.imageUrl} alt="product img" />
      <Card.Body>
        <Card.Title className={styles.name}>{data.name}</Card.Title>
        <Card.Text>
          <i>{data.description}</i>
        </Card.Text>
      </Card.Body>
      <Card.Footer className={styles.footer}>
        <span className={styles.price}>${data.price}</span>
        <Button onClick ={handleAddToCart} variant="success">Add To Cart</Button>
      </Card.Footer>
    </Card>
  );
}
