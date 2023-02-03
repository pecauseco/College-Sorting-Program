
import { useState } from 'react';
import aggregator from "./aggregator.js";
export default function College(props){
const totEssays = props.totEssays;
const setTotEssays = props.setTotEssays;
const name = props.name;
const essays = props.essays;
const image = props.image;
const cart = props.cart;
const setCart = props.setCart;
const [index, setIndex] = useState(0);
function handleNextClick() {
    if(!cart.includes(name)){
    setTotEssays(totEssays + essays);
    setCart([...cart, name, "    "]);
    
    setIndex(index + 1);
  }}
  function handleRemoveClick() {
    if(cart.includes(name)){
        setCart(cart.filter(function(value, index, arr){ 
            return value != name;
        }))

  
        setTotEssays(totEssays - essays);

    setIndex(index - 1);
  }}
    return (
        
        <div>
            <div class = "blue-container">
        <div>{name} </div>
        
        
        <div><p># of Essays:</p> {essays}</div>
        
        <img class = "pic" src = {image}/>
        <button onClick={handleNextClick}>Apply</button>
        <button onClick={handleRemoveClick}>Remove</button>
        </div>
        </div>
        
    )
    
}
