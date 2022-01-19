import React, { useEffect } from 'react'
import ModalComponent from '../base/ModalComponent'
import BoxComponent from '../base/BoxComponent'

const Renderer = ({ data }) => {

    useEffect(() => {
        // console.log(data.Content.props)
    },[])

    return (
        <div className="p-3">
            {
                data.Content.type === "BoxComponent" &&
                <BoxComponent children={data.Children} details={data.Content.props} />
            }
            {
                data.Content.type === "ModalComponent" &&
                <ModalComponent
                    isOpen={data.Content.props.isOpen}
                    width={data.Content.props.width}
                    height={data.Content.props.height}
                    children={data.Children}
                />
            }
        </div>
    )
}

export default Renderer
