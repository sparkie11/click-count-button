import { useState } from 'react';
import './App.css';

export default function MyButton() {
function handleClick() {
  alert('u clicked me');
  setcount(count+1);
}
const [count,setcount] =useState(0);
  return (
     <button onClick={handleClick}> clicked me {count} times 
     
    
     </button>
  
   );
 }


        
      
  
