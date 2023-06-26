import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./Drag.css";
import Card from "../Card/Card";
import Column from "../Column/Column";
import todo from "../../assets/todo.svg";
import onp from "../../assets/onp.svg";
import done from "../../assets/done.svg";
import onboarding from "../../assets/onboarding.png";
import moodboard1 from "../../assets/moodboard1.png";
import moodboard2 from "../../assets/moodboard2.png";
import mad from "../../assets/mad.png";

const ToDo = [
    {
        id: "1",
        priority: "Low",
        head: "Brainstorming",
        content:
            "Brainstorming brings team members' diverse experience into play. ",
        numberOfProfiles: 3,
        comments: 12,
        files: 0,
    },
    {
        id: "2",
        priority: "High",
        head: "Research",
        content:
            "User research helps you to create an optimal product for users.",
        numberOfProfiles: 2,
        comments: 10,
        files: 3,
    },
    {
        id: "3",
        priority: "High",
        head: "Wireframes",
        content:
            "Low fidelity wireframes include the most basic content and visuals.",
        numberOfProfiles: 3,
        comments: 12,
        files: 2,
    },
];

const onProgress = [
    {
        id: "4",
        priority: "Low",
        head: "Onboarding Illustrations ",
        image1: onboarding,
        numberOfProfiles: 3,
        comments: 14,
        files: 15,
    },
    {
        id: "5",
        priority: "Low",
        head: "Moodboard",
        image1: moodboard1,
        image2: moodboard2,
        numberOfProfiles: 1,
        comments: 9,
        files: 10,
    },
];

const completed = [
    {
        id: "6",
        priority: "Completed",
        head: "Mobile App Design ",
        image1: mad,
        numberOfProfiles: 2,
        comments: 12,
        files: 5,
    },
    {
        id: "7",
        priority: "Completed",
        head: "Design System",
        content: "It just needs to adapt the UI from what you did before ",
        numberOfProfiles: 3,
        comments: 12,
        files: 15,
    },
];

const columnsFromBackend = {
    6: {
        name: "To do",
        items: ToDo,
        image: todo,
        numberOfEle: 4,
        color: "#5030E5",
    },
    7: {
        name: "On Progress",
        items: onProgress,
        image: onp,
        numberOfEle: 3,
        color: "#FFA500",
    },
    8: {
        name: "Done",
        items: completed,
        image: done,
        numberOfEle: 2,
        color: "#8BC48A",
    },
};

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems,
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems,
            },
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems,
            },
        });
    }
};

const Drag = () => {
    const [columns, setColumns] = useState(columnsFromBackend);
    return (
        <div className="board">
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <Column
                            key={columnId}
                            columnId={columnId}
                            column={column}
                            index={index}
                        />
                    );
                })}
            </DragDropContext>
        </div>
    );
};

// const Drag = () => {
//     const [columns, setColumns] = useState(columnsFromBackend);

//     const onDragEnd = (result) => {
//         const { source, destination } = result;

//         if (!destination) return;

//         if (
//             source.droppableId === destination.droppableId &&
//             source.index === destination.index
//         ) {
//             return;
//         }

//         const sourceColumn = columns[source.droppableId];
//         const destColumn = columns[destination.droppableId];

//         const sourceItems = [...sourceColumn.items];
//         const destItems = [...destColumn.items];

//         const [removed] = sourceItems.splice(source.index, 1);
//         destItems.splice(destination.index, 0, removed);

//         const updatedColumns = {
//             ...columns,
//             [source.droppableId]: {
//                 ...sourceColumn,
//                 items: sourceItems,
//             },
//             [destination.droppableId]: {
//                 ...destColumn,
//                 items: destItems,
//             },
//         };

//         setColumns(updatedColumns);
//     };

//     return (
//         <div className="board">
//             <DragDropContext onDragEnd={onDragEnd}>
//                 {Object.entries(columns).map(([columnId, column], index) => (
//                     <Column
//                         key={columnId}
//                         columnId={columnId}
//                         column={column}
//                         index={index}
//                     />
//                 ))}
//             </DragDropContext>
//         </div>
//     );
// };

export default Drag;
