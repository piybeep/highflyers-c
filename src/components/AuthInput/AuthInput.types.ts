import React from "react"
export interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    password?: boolean
}