import React, { Component, useState } from 'react'

export default props => {
    const [positionX, setPositionX] = useState()
    const [positionY, setPositionY] = useState()

    const updateCoordinates = (e) => {
        setPositionX = e.screenX
        setPositionY = e.screenY
        console.log('entrou')
    }

    return (
        <>
            <div onMouseMove={() => updateCoordinates()}>
                <span>{props.text || 'Coordinates X and Y:'} {positionX} </span>
            </div>
        </>
    )
}