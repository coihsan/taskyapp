"use server"
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import React from "react";
const Task = () =>{
    return(
        <div>
            <h1>Task</h1>
        </div>
    )
}
const ColumnBoard = ({children} : {children: React.ReactNode}) => {
    return(
        <section className="flex flex-1 rounded-lg border border-white/10 bg">
            <div>{children}</div>
        </section>
    )
}
const CardBoards = () =>{
    return(
        <ColumnBoard>
            <h1>Cards</h1>
            <Card />
        </ColumnBoard>
    )
}
export default CardBoards;