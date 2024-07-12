import { FC, ReactNode } from "react"

interface OptionalChildren {
    children?:ReactNode;
}

export const BasePage= (props:OptionalChildren) => {
    return (<>{props.children?props.children:null}</>)
}