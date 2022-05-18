import React from "react";

const Step =(props) => {
    // const onDeleteHandler = () =>{
    // console.log(props.id);
    const {direction,instructions,distance}=props;
    return(
        <div className="stepBox">
            <span className="arrow">
            {
            direction==="left" ? "⬅" :
            props.direction === "right" ? "➡" :
            "⬆"}
            </span>
            <h1 className="instructions" >{instructions}</h1>


            <h2 className="distance" >{distance}miles</h2>
            <button onClick={props.onDeleteHandler} > x</button>
            
        </div>
    )

}

export default Step;