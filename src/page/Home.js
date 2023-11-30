// Home.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import productList from "../data/product.json";
import ProductItem from "../components/product_items"; // Adjust the path based on your actual file structure

export default function Home() {
    return (
      <div className="container">
        <div className="row">
          {productList.map((item) => (
            <div key={item.id} className="col-xs-12 col-sm-6 col-md-4">
              <ProductItem data={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
