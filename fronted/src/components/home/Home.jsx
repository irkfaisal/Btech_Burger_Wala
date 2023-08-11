import React from 'react';
import { motion } from "framer-motion";
import Founder from './Founder'
import Menu from './Menu';

const Home = () => {
  const motionProp = {
    initial: {
      x: "100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section className='home'>
        <div>
          <motion.h1 {...motionProp}>BTech Burger Wala</motion.h1>
          <motion.p {...motionProp} transition={{
            delay: 0.2,
          }}>Get your burger now!</motion.p>
        </div>
        <motion.a initial={{
          y: "100%",
          opacity: 0,
        }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }} href='#menu'>Explore Menu</motion.a>
      </section >
      <Founder />
      <Menu/>
    </>
  )
}

export default Home;