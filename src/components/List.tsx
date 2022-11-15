import React from 'react'
import { AppState } from '../types/types'

export default function List({ subs }: AppState) {
    return (
        <ul>
            {
                subs.map(sub => {
                    return (
                        <li key={sub.nick}>
                            <img src={sub.avatar} alt={`Avatar de ${sub.nick}`} />
                            <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                            <p>{sub.description}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}