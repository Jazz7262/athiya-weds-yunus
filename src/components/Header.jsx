import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            <img
                src="../assets/images/bismillah.png"
                alt="bismillah"
                className="poster"
            />

            <h3>
                Begin With The Name Of Allah, The Most Benificient And The Most
                Merciful
            </h3>

            <h4>
                Under the spirutual patronage of:
                <br />
                Sayyidi-O-Murshadi Hazrath Khwaja Sayyid Ibraheem Shah Quadri
                Chisti Yamani Banda Nawazi Saheb Quadri Rahamatullaahi Alaih, 
                Aastana-e-Quadri, Halkatta Shereef, Gulbarga Dist.
            </h4>
        </section>
    );
}

export default Header;
