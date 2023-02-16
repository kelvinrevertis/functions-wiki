import { useEffect, useState } from "react";

export const FunctionUseEffect = () =>{
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `Você clicou ${count}`; // Update the document title using the browser API
    })

    return(
        <div>
            <h1>Você clicou: {count}</h1>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count - 1)}>+</button>
        </div>
    )
}
