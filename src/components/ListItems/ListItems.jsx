import React from "react";
import { useState} from "react";
import Card from "../ItemComponent/ItemComponent";
//import * as classnames from 'classnames';
import "./ListItems.css";
import data from "../../data/data.json"




function ListItems(){
  
    const [count, setCount] = useState(0);

    const getIndex = (id) => {
      if (id === count) {
        return setCount(null);
      }
        return setCount(id);

    }
    return (
        <div className="container">
          {data.map((card) =>
            <Card key={card.id} 
              price={card.price} 
              title={card.title} 
              speed={card.speed}
              description={card.description} 
              isSelected={card.isSelected} 
              isActiv = {card.id === count}
              setCount = {setCount} 
              id = {card.id}> 
              onClick = {getIndex}
              </Card>)
          }

        </div>
      
    );
  }

export default ListItems;

