import React, { Component, useState, useEffect } from 'react'

export default props => {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", setFromEvent)

        return () => {
            window.removeEventListener("mousemove", setFromEvent)
        }
    }, [])

    return (
        <>
            <span>{props.text || 'Coordinates X and Y:'} {position.x} : {position.y} </span>
        </>
    )
}