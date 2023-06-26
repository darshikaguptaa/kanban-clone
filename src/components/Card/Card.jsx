import React from "react";
import Ellipse12 from "../../assets/Ellipse12.png";
import Ellipse13 from "../../assets/Ellipse13.png";
import Ellipse14 from "../../assets/Ellipse14.png";
import "./Card.css";
import message from "../../assets/message.svg";
import onboarding from "../../assets/onboarding.png";

import folder from "../../assets/folder-2.svg";

const Card = ({ item }) => {
    return (
        <div className="card">
            {/* {console.log(item)} */}
            <div
                className="priority"
                style={{
                    color:
                        item.priority == "Low"
                            ? "#d58d49"
                            : item.priority == "Medium"
                            ? "green"
                            : item.priority == "High"
                            ? "#D8727D"
                            : "#68B266",
                }}
            >
                {item.priority}
            </div>
            <p className="head">{item.head}</p>
            {item.image1 && <img src={item.image1} alt="Card" />}
            {item.image2 && <img src={item.image2} alt="Card" />}
            {item.content && <p className="content">{item.content}</p>}
            <div className="details">
                <div className="profiles">
                    <div className="profilesLeft">
                        {item.numberOfProfiles == 1 ? (
                            <img
                                src={Ellipse12}
                                alt="Profile"
                                className="cardProfile"
                            />
                        ) : item.numberOfProfiles == 2 ? (
                            <>
                                <img
                                    src={Ellipse12}
                                    alt="Profile"
                                    className="cardProfile"
                                />
                                <img
                                    src={Ellipse13}
                                    alt="Profile"
                                    className="cardProfile"
                                />
                            </>
                        ) : (
                            <>
                                <img
                                    src={Ellipse12}
                                    alt="Profile"
                                    className="cardProfile"
                                />
                                <img
                                    src={Ellipse13}
                                    alt="Profile"
                                    className="cardProfile"
                                />
                                <img
                                    src={Ellipse14}
                                    alt="Profile"
                                    className="cardProfile"
                                />
                            </>
                        )}
                    </div>

                    <div className="profileRight">
                        <div className="comments">
                            <img src={message} alt="" />
                            <p>{item.comments} comments</p>
                        </div>
                        <div className="files">
                            <img src={message} alt="" />
                            <p>{item.files} files</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
