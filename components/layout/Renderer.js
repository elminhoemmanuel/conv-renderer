import React, {useEffect} from 'react'

const Renderer = ({ data }) => {

    useEffect(() => {
        console.log("Renderer",data)
    },[])

    return (
        <div>
            Renderer
        </div>
    )
}

export default Renderer
