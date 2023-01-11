import React from 'react'
import MenuCard from './MenuCard'
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCartHandler = (itemNum) => {

  }
  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          itemPrice={200}
          tittle={"Aloo tiki burger"}
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          itemPrice={120}
          tittle={"Chicken cheese burger"}
          handler={addToCartHandler}
          delay={0.5}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          itemPrice={150}
          tittle={"Chicken burger"}
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  )
}

export default Menu