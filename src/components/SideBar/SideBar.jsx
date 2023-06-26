import React, { useState } from "react";
import "./SideBar.css";
import icon from "../../assets/colorfilter.png";
import leftArrow from "../../assets/arrow-left.png";
import home from "../../assets/home.png";
import message from "../../assets/message.png";
import task from "../../assets/task.png";
import member from "../../assets/member.png";
import setting from "../../assets/setting.png";
import add from "../../assets/add.png";
import green from "../../assets/green.png";
import yellow from "../../assets/yellow.png";
import pink from "../../assets/pink.png";
import blue from "../../assets/blue.png";
import hamburger from "../../assets/hamburger.png";
import close from "../../assets/close.png";
import lamp from "../../assets/lamp.png";

const Sidebar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className={`sidebar ${isDrawerOpen ? "open" : ""}`}>
            <div className="sidebar-header">
                <div className="x">
                    <img className="icon" src={icon} alt="" />
                    <h2>Project M.</h2>
                </div>
                <div>
                    <img
                        className="leftArrow"
                        src={leftArrow}
                        alt=""
                        onClick={handleDrawerToggle}
                    />
                </div>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <img src={home} className="sideIcon" alt="" />
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <img src={message} className="sideIcon" alt="" />
                        <a href="#">Messages</a>
                    </li>
                    <li>
                        <img src={task} className="sideIcon" alt="" />
                        <a href="#">Tasks</a>
                    </li>
                    <li>
                        <img src={member} className="sideIcon" alt="" />
                        <a href="#">Members</a>
                    </li>
                    <li>
                        <img src={setting} className="sideIcon" alt="" />
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-projects">
                <div className="projectHeading">
                    <h3>My Projects</h3>
                    <img src={add} alt="" />
                </div>
                <div>
                    <ul>
                        <li>
                            <img className="projectDot" src={green} alt="" />
                            <p>Mobile App</p>
                        </li>
                        <li>
                            <img className="projectDot" src={yellow} alt="" />
                            <p>Website Redesign</p>
                        </li>
                        <li>
                            <img className="projectDot" src={pink} alt="" />
                            <p>Design System</p>
                        </li>
                        <li>
                            <img className="projectDot" src={blue} alt="" />
                            <p>Wireframes</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-thoughts">
                <img src={lamp} alt="Bulb" className="bulb" />
                <h4>Thoughts Time</h4>
                <p>
                    We don’t have any notice for you, till then you can share
                    your thoughts with your peers.
                </p>
                <h4>Write a message</h4>
            </div>
            {!isDrawerOpen && (
                <div className="drawerIcon" onClick={handleDrawerToggle}>
                    <img src={hamburger} alt="" />
                </div>
            )}
            {isDrawerOpen && (
                <div className="closeIcon" onClick={handleDrawerToggle}>
                    <img src={close} alt="" />
                </div>
            )}
        </div>
    );
};

export default Sidebar;
