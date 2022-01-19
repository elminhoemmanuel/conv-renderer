import React from 'react'

const H1Component = ({text}) => {
    return (
        <h1 style={{fontSize: '32px'}} className="text-black font-bold">
            {text}
        </h1>
    )
}

export default H1Component
