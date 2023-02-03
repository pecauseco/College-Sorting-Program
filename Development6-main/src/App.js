
import './App.css';
import itemData from "./assets/items-data.json";
import College from "./components/item.js";
import { useState } from "react";
import Aggregator from './components/aggregator';

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([...itemData]);
  const [totEssays, setTotEssays] = useState(0);
  const [saved, setSaved] = useState([...itemData]);
  const [checked, setChecked] = useState([false, false, false, false])

  const sortColleges = event => {
    const sortBy = event.target.value;
    
      if(sortBy === "reset") {
        setItems([...saved]);
      return;
   }
   
    const sortedArray = items.sort((a, b) => {
      if(sortBy === "acceptance-rate-high"){
        return b.acceptancerate - a.acceptancerate;
      }else if(sortBy === "acceptance-rate-low"){
        return a.acceptancerate - b.acceptancerate;
      }
    });
  
    
    setItems([...sortedArray]);
    return;
        
  }
  
  
  
  const onCheck = (event, index) => {
    const newChecked = [...checked]
    newChecked[index] = !newChecked[index]
    setChecked(newChecked)
  }

  let filteredItems = [...items]
  if (checked[0]) {
    filteredItems = filteredItems.filter((item) => item.APs === "true")
  }
  if (checked[1]) {
    filteredItems = filteredItems.filter((item) => item.ACTSATRequired === "true")
  }
  if (checked[2]) {
    filteredItems = filteredItems.filter((item) => item.interview === "true")
  }
  if (checked[3]) {
    filteredItems = filteredItems.filter((item) => item.earlyaction === "true")
  }
  if (checked[4]) {
    filteredItems = filteredItems.filter((item) => item.earlydecision === "true")
  }



  return (
    
    
    <div className="App">
     
       <p class = "header">University Requirements</p>
       <div class = "giant-container">
       <div class = "big-container">
       {
        filteredItems.map((item, index) => ( 

        <College name={item.name} essays={item.essays} acceptancerate={item.acceptancerate} image= {item.image} cart = {cart} setCart={setCart} 
        totEssays = {totEssays} setTotEssays = {setTotEssays} />
      ))}
      
      </div>
      
      
      <div class = "cart-container">
        <p class = "title">Acceptance Rate</p>
        <input type="radio" value="acceptance-rate-high" onClick={sortColleges} name="acceptancerate" /> High To Low
        <input type="radio" value="acceptance-rate-low" onClick={sortColleges} name="acceptancerate" /> Low to High
        <input type="radio" value="reset" onClick={sortColleges} name="acceptancerate" /> Popular
        <p class = "title">Requirements</p>
        <input type="checkbox" onChange = {(event) => onCheck(event, 0)} value= "true" id="accept" name="accept" />  
        <label for="accept"> Requires APs </label>
        <input type="checkbox" onChange = {(event) => onCheck(event, 1)} value= "true" id="accept" name="accept" />  
        <label for="accept"> Requires ACT/SAT </label>
        <input type="checkbox" onChange = {(event) => onCheck(event, 2)} value= "true" id="accept" name="accept" />  
        <label for="accept"> Requires Interview </label>
        <p class = "title">Early Admissions</p>
        <input type="checkbox" onChange = {(event) => onCheck(event, 3)} value= "true" id="accept" name="accept" />  
        <label for="accept"> Early Action </label>
        <input type="checkbox" onChange = {(event) => onCheck(event, 4)} value= "true" id="accept" name="accept" />  
        <label for="accept"> Early Decision </label>
        

      
      </div>

      <div class = "cart-container">
      <Aggregator cart = {cart} totEssays = {totEssays}/>
      </div>
      </div>
    </div>
  );
}

export default App;
