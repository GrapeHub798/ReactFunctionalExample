import React from "react";
import "./cell.css";

const Cell = ({ imageData, setCurrentImage }) => {
    const image = imageData && imageData.src && imageData.src.small;
    const photographer = imageData && imageData.photographer;

    return (
        <div className="border d-inline-block pointer cell" onClick={() => setCurrentImage(imageData)}>
            <div><img src={image} alt={`by: ${photographer}`} /></div>
        </div>
    )
}

export default Cell;