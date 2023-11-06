


// create context
// provider

import { createContext, useState } from "react";


export let CounterContext=createContext();

// React Component 
 export default function CounterContextProvider({children}){
   

    let [counter,setCounter]=useState(false);

    return <CounterContext.Provider value={{counter,setCounter}}>
      {children}
    </CounterContext.Provider>
}

