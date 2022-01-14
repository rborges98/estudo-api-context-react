import React, { useContext } from "react";
import { CountContext } from "../context/countContext";
import { InputContext } from "../context/inputContext";

export const Result = () => {

    const {name} = useContext(InputContext)
    const {count} = useContext(CountContext)
    
    return (
        <>
            <span>{name}</span>
            <p>{count}</p>
        </>
    )
}