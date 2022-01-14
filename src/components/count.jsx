import { useContext } from "react";
import { CountContext } from "../context/countContext";

export const Count = () => {

    const {count, setCount} = useContext(CountContext)
    
    return (
        <>
            <button onClick={() => setCount(count + 1) }> increment </button>
            <button onClick={() => setCount(count - 1) }> decrement </button>
        </>
    )
     
};