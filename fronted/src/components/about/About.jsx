import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import userProf from "../../assets/mypic.jpeg";

const About = () => {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>

                <article>
                    <h4>BTech Burger Wala</h4>
                    <p>
                        We are BTech Burger Wala. We make most tasty BURGER in the city.
                    </p>

                    <p>
                        Explore the various type of food and burgers. Click below to see the
                        menu
                    </p>

                    <Link to="/">
                        <RiFindReplaceLine />
                    </Link>
                </article>

                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src={userProf} alt="Founder" />
                            <h3>Md Faisal Raza Khan</h3>
                        </div>

                        <p>
                            I am Faisal, the founder of BTech Burger Wala. Affiliated to
                            God Taste...
                        </p>
                    </article>
                </div>
            </main>
        </section>
    );
};

export default About;
