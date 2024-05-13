"use server"
import { Card, CardFooter, CardHeader, CardTitle, CardDescription, Lab } from "@/components/ui/card";
import React from "react";
const AddTask = () =>{
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
const SubTask = () =>{
    return(
        <div>
            <h1>SubTask</h1>
        </div>
    )
}
const CardBoards = () =>{
    return(
        <ColumnBoard>
            <h1>Cards</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                </CardHeader>
            </Card>
        </ColumnBoard>
    )
}
export default CardBoards;