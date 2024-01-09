import React from 'react'
import style from "./Card.module.css"

const Card = (props) => {

    const makeDiets = (diets) => {
        return diets?.join(" / ")
    }

    return (
        <div className={`${style.contenedor}`}>
            <div className={`${style.image}`}>
                <img src={props.image} alt="foods image" />
            </div>
            <div>
                <h3 className={`${style.name}`}>{props.title}</h3>
            </div>
        </div>
    )
}

export default Card
