import React from 'react'
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";


const Footer = () => {
    return (
        <footer>
            <div>
                <h2>MBA Burger Wala</h2>

                <p>We are trying to give you the best taste possible.</p>
                <br />

                <em>We give attention to genuine feedback.</em>

                <strong>All right received @mbaburgerwala</strong>
            </div>
            <aside>
                <h4>Follow Us</h4>

                <a href="https://linkedin.com/irkfaisal">
                    <AiFillYoutube />
                </a>
                <a href="https://linkedin.com/irkfaisal">
                    <AiFillLinkedin />
                </a>
                <a href="https://github.com/irkfaisal">
                    <AiFillGithub />
                </a>
            </aside>
        </footer>
    )
}

export default Footer