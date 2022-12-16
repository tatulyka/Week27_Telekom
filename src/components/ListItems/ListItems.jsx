import React from "react";
import Card from "../ItemComponent/ItemComponent";
//import * as classnames from 'classnames';
import "./ListItems.css";


const arr = [{
    price: "28.90",
    title: "OptikNET Max",
    speed: "1000/300",
    description: "odosielania dát až 1000/500"},
{
    price: "23.89",
    title: "OptikNET Extra",
    speed: "800/160",
    description: "odosielania dát až 1000/200",
    isSelected: true},
{
    price: "17,89",
    title: "OptikNET Ideál",
    speed: "400/80",
    description: "odosielania dát až 800/160"},
{
    price: "12.89",
    title: "OptikNET Štart",
    speed: "50/20",
    description: "odosielania dát až 100/40"}];

class listItems extends React.Component {
    render() { 
  return (
    <div className={this.props.theme.listItems}>
    <div  className="container">
      {
       arr.map((card) => 
       <Card key={card.price} price={card.price} title ={card.title} speed ={card.speed} 
       description = {card.description} isSelected = {card.isSelected}></Card> ) 
      }
      
    </div>
    </div>
    );
}
}
export default listItems;    

