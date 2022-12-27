import React from "react";
import "./ItemComponent.сss";
//import * as classnames from 'classnames';

export default class Card extends React.Component {
    render() {
        const {price, title, speed, description, isSelected, isActiv, setCount, id} = this.props;   
        let classCard = "";
        if (isSelected) classCard = "selected";  
        const classActiv = isActiv ?  "activ" : '';
        function getValueID(){
            setCount(id)
        }
    
    return (
    <div className={`card_body ${classCard} ${classActiv}`}>
        <div className="card-text">
            <h1 className="card-price">{price}€</h1>
            <div className="card-period">mesačne</div>
            <h2 className="card-title">{title}</h2>
            <div className="card-speed">Rýchlosť {speed} Mb/s </div>
            <div className="card-description">So skupinou Magenta 1 rýchlosť {description} Mb/s 
                <p>Superrýchle pripojenie cez optickú sieť</p>
                <p>Magio GO Benefit zadarmo</p>
            </div>
        </div>
        <div className="card-button">
            <button className="button" onClick = {getValueID}>Overiť dostupnosť</button>
        </div>
        
    </div>  
    );
}
}
