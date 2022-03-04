import React, { useEffect, useState } from "react";
import Cell from "../cell/cell";
import ImageModal from "../imagemodal/imagemodal";
import Spinner from "../spinner/spinner";
import { search } from "./getData";
import "./grid.css";

const Grid = ({ searchValue }) => {
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const showLargerImage = (image) => {
        setCurrentImage(image.src.large);
        setShowModal(true);
    }

    const resetImage = () => {
        setCurrentImage('');
        setShowModal(false);
    }

    const handleSearch = (searchTerm) => {
        setLoading(true);
        search(searchTerm)
            .then(imageData => {
                setTimeout(() => {
                    setImages([]);
                    setLoading(false);
                    if (imageData && imageData.photos) {
                        setImages(imageData.photos);                        
                    }
                }, 3000)
            })
    }
    
    useEffect(() => {
        if (!searchValue) {
            return;
        }
        handleSearch(searchValue);
    }, [searchValue])

    return (
        <>
            {loading && <Spinner />}
            {!loading && <div className="gridrow">
                {images && images.map((img, id) => (
                    <Cell key={img.id} imageData={img} setCurrentImage={showLargerImage} />
                ))}
            </div>}
            <ImageModal show={showModal} image={currentImage} imageClosed={resetImage} />
        </>
    )
}

export default Grid;