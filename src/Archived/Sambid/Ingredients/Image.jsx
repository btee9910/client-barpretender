import { useState } from "react";
import axios from "axios";
// import "./Image.css"

const Image = (props)=> {

    
    return(
        <>
        <div className="image-container">
            <img src={ props.cocktailData.image } alt={props.cocktailData.name} />
        </div>
        </>
    );
};

export default Image