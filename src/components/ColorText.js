import React from 'react'

export default function ColorText({selected}) {
    return (
        <div>
            <h1 style={{color: selected}}>The color is {selected}</h1>
        </div>
    )
}
