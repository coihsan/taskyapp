import { useState } from "react";

export const newBoard = () =>{
    const [board, setBoard] = useState(Array(undefined).fill(undefined))
    return [board, setBoard]
}

export const newTask = () =>{
    const [task, setTask] = useState(Array(undefined).fill(undefined))
    return [task, setTask]
}