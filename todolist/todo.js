import React { useState } from "react";

const  todo = () => {
  const [inputlist, setinputlist] =  useState("");
   const [item, setitem] = useState([]);

  const itemEvent = (event) =>{
  	setinputlist(event.target.value);
  };

  const listofitem = () =>{
  	setitem( (olditem) => {
    return [...olditem, inputlist];
  	});
  	setinputlist("");
  };


	return (
<>
<h1>Todo list</h1>
<br/>
<input type="text" placeholder="add a item" 
 value={inputlist}   onChange={itemEvent} />
<button onClick={listofitem}> click </button>
<br/><br/>
<ol>
  { item.map( (itemval) =>{
   return <li> {itemval} </li>
  }) }
</ol>
</>
		)
}

export default todo;