import React from "react";
import Navbar from "../NavBar/NavBar";
import Head from "../Head/Head";
import "./Main.css";
import Drag from "../Drag/Drag";
import Card from "../Card/Card";
import Ellipse12 from "../../assets/Ellipse12.png";
import Ellipse13 from "../../assets/Ellipse13.png";

const cardData = {
    priority: "High",
    heading: "Example Card",
    image: Ellipse13,
    profileImage: Ellipse13,
    components: "Components...",
    files: "Files...",
};

const Main = () => {
    return (
        <>
            <div className="main">
                <Navbar />
                <Head />
                <Drag />
                {/* <Card {...cardData} /> */}
            </div>
        </>
    );
};

export default Main;
