import {useState} from 'react'

export const FunctionUseState = () =>{
    const [count, setCount] = useState<number>(0)

    return(
        <div>
            <h1>Resultado:{count}</h1>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count - 1)}>+</button>
        </div>
    )
}


// export const App: React.FC = () => {
//  const [count, setCount] = useState<number>(0)
 
//  return (
//     <div className="App">
//       <h1>Result: { count }</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }