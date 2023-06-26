import React from "react";
import "./NavBar.css";
import search from "../../assets/search.png";
import calendar from "../../assets/calendar.png";
import message2 from "../../assets/message2.png";
import notification from "../../assets/notification.png";
import profile from "../../assets/profile.png";
import arrowDown from "../../assets/arrow-down.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="search-bar">
                <img src={search} alt="" />
                <input type="text" placeholder="Search for anything...  " />
                <i className="fas fa-search"></i>
            </div>
            <div className="navbar-icons">
                <img src={calendar} className="navIcon" alt="" />
                <img src={message2} className="navIcon" alt="" />
                <img src={notification} className="navIcon" alt="" />
                <div className="profile">
                    <div className="profile-info">
                        <p className="profile-name">Anima Agrawal</p>
                        <p className="profile-city">U.P, India</p>
                    </div>
                    <img src={profile} alt="Profile" />
                    <img src={arrowDown} alt="arrow" className="arrow" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
