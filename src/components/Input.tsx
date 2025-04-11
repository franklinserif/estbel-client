"use client"

import {FC} from "react";
import {Input as UIInput} from "@components/ui/input";

interface Props extends React.ComponentProps<"input"> {
    // Add any additional custom props here
}

export const Input:FC<Props> = (props)=> {
    return <UIInput {...props}/>
}

export default Input;