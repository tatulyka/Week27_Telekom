import React from "react";
import Card from "../ItemComponent/ItemComponent";
//import * as classnames from 'classnames';
import "./ListItems.css";
import data from "../../data/data.json"


//const arr = ;

class listItems extends React.Component {
    render() { 
  return (
    <div className={this.props.theme.listItems}>
    <div  className="container">
      {data.map((card) => 
       <Card key={card.price} price={card.price} title ={card.title} speed ={card.speed} 
       description = {card.description} isSelected = {card.isSelected}></Card> ) 
      }
      
    </div>
    </div>
    );
}
}
export default listItems;    

