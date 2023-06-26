import React from "react";
import "./Head.css";
import edit from "../../assets/edit.png";
import link from "../../assets/link.svg";
import add from "../../assets/add-square.svg";
import Ellipse12 from "../../assets/Ellipse12.png";
import Ellipse13 from "../../assets/Ellipse13.png";
import Ellipse14 from "../../assets/Ellipse14.png";
import Ellipse15 from "../../assets/Ellipse15.png";
import calendar from "../../assets/calendar.png";
import filter from "../../assets/filter.svg";
import arrowDown from "../../assets/arrow-down.svg";
import profile2 from "../../assets/profile-2user.svg";
import line from "../../assets/Vector10.svg";
import pause from "../../assets/pause.svg";
import menu from "../../assets/menu.svg";

const Head = () => {
    return (
        <div className="head">
            <div className="part1">
                <div className="right1">
                    <p>Mobile App</p>
                    <img className="edit" src={edit} alt="" />
                    <img className="link" src={link} alt="" />
                </div>
                <div className="left1">
                    <img className="add" src={add} alt="" />
                    <p>Invite</p>
                    <img src={Ellipse12} className="ep" alt="" />
                    <img src={Ellipse13} className="ep" alt="" />
                    <img src={Ellipse15} className="ep" alt="" />
                    <img src={Ellipse14} className="ep" alt="" />
                    <p className="plus2">+2</p>
                </div>
            </div>
            <div className="part2">
                <div className="right2">
                    <div className="filter">
                        <img src={filter} alt="" />
                        <p>Filter</p>
                        <img src={arrowDown} alt="" />
                    </div>
                    <div className="calendar">
                        <img src={calendar} alt="" />
                        <p>Today</p>
                        <img src={arrowDown} alt="" />
                    </div>
                </div>
                <div className="left2">
                    <div className="profile2">
                        <img src={profile2} alt="" />
                        <p>Today</p>
                    </div>
                    <img className="line" src={line} alt="" />
                    <div className="pause">
                        <img src={pause} alt="" />
                    </div>
                    <img src={menu} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Head;
