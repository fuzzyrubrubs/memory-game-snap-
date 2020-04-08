import React from 'react';
import classes from './Card.module.css';


const Card = (props) => {

    var style = null;
    if(props.show === "showing" || props.show === "paired"){
        style = {backgroundColor: props.color.color}
    }


    return (
        <div className={classes.Card} style={style} onClick={() => props.change(props.color.id)} >
            
        </div>
    )
}

export default Card