
import React from "react";
import SlotM from "./SlotGame";

const App = () => {

  
    return <>

        <h1 className="heading_style">
         🎰 Welcome to 
         <span style={{fontWeight : "bold"}}> Slot machin game 🎰 </span></h1>

       <div className="slot_machine">
             <SlotM  x = '😄' y = '😄' z = '😄'/>
            <SlotM  x = '😄' y = '😆' z = '😄'/>
            <SlotM  x = '👩‍👦‍👦' y = '👩‍👦‍👦' z = '👩‍👦‍👦'/>
            <SlotM  x = '👨‍🎓' y = '👩‍🎓' z = '👨‍🎓'/>
            <SlotM  x = '🍎' y = '🍎' z = '🍎'/>
            
       </div> 
       

    </>;

};

export default App;


