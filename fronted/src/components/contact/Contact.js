import React from 'react'
// import burger1 from '../../assets/burger1.png'
import { motion } from 'framer-motion'

const Contact = () => {
    const fm1 = {
        initial: {
            x: "-100vw",
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
        },
        transition: { delay: 0.2 }
    }

    const fm2 = {
        initial: {
            x: "100vw",
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
        },
        transition: { delay: 0.2 }
    }

    // const fm3 = {
    //     initial: {
    //         y: "-100vh",
    //         x: "50%",
    //         opacity: 0,
    //     },
    //     animate: {
    //         x: "50%",
    //         y: "-50%",
    //         opacity: 1,
    //     },
    //     transition: {
    //         delay: 1,
    //     }
    // }
    return (
        <section className="contact">
            <motion.form
                {...fm1}
            >
                <h2>Contact Us</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />

                <textarea placeholder="Message..." cols="30" rows="10"></textarea>

                <button type="submit">Send</button>
            </motion.form>

            <motion.div
                className="formBorder" {...fm2}
            >
                {/* <motion.div {...fm3} >
                    <img src={burger1} alt="Burger" />
                </motion.div> */}
            </motion.div>
        </section>
    )
}

export default Contact