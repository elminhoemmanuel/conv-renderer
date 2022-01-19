import React from 'react'

const H2Component = ({text}) => {
    return (
        <h2 style={{fontSize: '24px'}} className="text-gray-700 ">
            {text}
        </h2>
    )
}

export default H2Component
