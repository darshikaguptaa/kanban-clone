import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "../Card/Card";
import "./Column.css";

const Column = ({ columnId, column, index }) => {
    return (
        <div className="columns" key={columnId}>
            <div className="name">
                <img src={column.image} alt="ab" />
                <h2 className="title">{column.name}</h2>
                <p>{column.numberOfEle}</p>
            </div>
            <hr color={column.color} style={{ height: "2px", width: "80%" }} />
            <div>
                <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                        return (
                            <div
                                className="column"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {column.items.map((item, itemIndex) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={itemIndex} // Update the index value here
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                className="card"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                    userSelect: "none",
                                                    ...provided.draggableProps
                                                        .style,
                                                }}
                                            >
                                                <Card item={item} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        </div>
    );
};

export default Column;
