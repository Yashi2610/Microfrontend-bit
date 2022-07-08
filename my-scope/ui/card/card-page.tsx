import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";



import styles from "./home.module.scss"



const CardPage = ({ item, handleClick }) => {



  const { title, author, price, img } = item;



  return (

   <div className="container">

    <div className={styles["cards"]}>



      <div className={styles["image_box"]}>



        <img src={img} alt="" />



      </div>



      <div className={styles["details"]}>



        <p className="title">{title}</p>



        <p>{author}</p>



        <p>Price - {price}Rs</p>



        <button  onClick={() => handleClick(item)}>Add to Cart</button>



      </div>



    </div>

    </div>



  );



};





export default CardPage;