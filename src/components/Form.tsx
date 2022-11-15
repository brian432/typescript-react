import React, { useState } from "react"
import { Sub } from "../types/types"

interface Props {
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: Props) => {
    const [inputValues, setInputValues] = useState<Sub>({
        nick: "",
        subMonths: 0,
        avatar: "",
        description: ""
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        onNewSub(inputValues)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [event?.target.name]: event?.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="nick" value={inputValues.nick} />
            <input onChange={handleChange} type="number" name="subMonths" value={inputValues.subMonths} />
            <input onChange={handleChange} type="text" name="avatar" value={inputValues.avatar} />
            <input onChange={handleChange} type="text" name="description" value={inputValues.description} />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form