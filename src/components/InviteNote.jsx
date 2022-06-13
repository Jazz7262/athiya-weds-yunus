import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>
                    Mrs. Ayesha Bee & Mr. Alhaaj A. Mohammed Haneef Nizami(late){" "}
                    <br />
                    <small>and</small>
                    <br />
                    Mrs. & Mr. A. Shoaid Ahmed Quadri Sahab
                </h2>
                <h5>
                    <strong>Almas Manzil</strong>
                    <br />
                    Khalid Nagar, Badihatti, <br />
                    C.B. Bellari - 583 102..
                </h5>
                <p className="address">
                    Contact: +91 97411 53118 <br />
                    +91 85535 24786. <br />
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
