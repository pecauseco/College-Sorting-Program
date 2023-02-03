
export default function Aggregator(props){
const totEssays = props.totEssays;
const cart = props.cart;
return(
    <div>
    <p>Colleges:</p>
      <div>{cart}</div>
      <p>Total Essays:</p>
      <div>{totEssays}</div>
      </div>

)}

