import React from 'react'

const Greeting = (props) => {
    const { name, year, children } = props;
    
    return (
        <>
            <h1>{name} - {year}</h1>
            <p>{children}</p>
        </>
    )
}

export default Greeting