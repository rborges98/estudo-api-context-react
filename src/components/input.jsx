import React, { useContext } from "react";
import { InputContext } from "../context/inputContext";

export const Input = () => {
    const {setName} = useContext(InputContext)
    return (
        <>
            <input type='text' onChange={(event) => {setName(event.target.value)}} />
        </>
    )
}