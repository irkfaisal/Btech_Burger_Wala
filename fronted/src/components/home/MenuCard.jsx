import React from 'react'
import { motion } from 'framer-motion'

const MenuCard = ({ itemNum, burgerSrc, itemPrice, tittle, handler }) => {
    return (
        <motion.div className='menuCard'>
            <div>Item {itemNum}</div>
            <main>
                <img src={burgerSrc} alt={itemNum} />
                <h5>Price{itemPrice}</h5>
                <p>{tittle}</p>
                <button onClick={() => handler(itemNum)}>Buy Now</button>
            </main>
        </motion.div>
    )
}

export default MenuCard