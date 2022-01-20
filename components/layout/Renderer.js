import React, { useEffect, useState } from 'react'
import ModalComponent from '../base/ModalComponent'
import BoxComponent from '../base/BoxComponent'
import { useSelector, useDispatch } from 'react-redux'
import { setChildren } from "../../redux/actions/test"

const Renderer = ({ data }) => {

    const [viewModal, setViewModal] = useState(true);
    const dispatch = useDispatch();
    const { children } = useSelector((state) => state.test);

    useEffect(() => {
        if(data.Content.type === "BoxComponent"){
            dispatch(setChildren(data.Children));
        }
        console.log(data);
    },[])

    

    return (
        <div className="p-3">
            {
                data.Content.type === "BoxComponent" &&
                <BoxComponent children={data.Children} details={data.Content.props} />
            }
            
            {
                data.Content.type === "ModalComponent" && viewModal &&
                <ModalComponent
                    width={data.Content.props.width}
                    height={data.Content.props.height}
                    children={data.Children}
                    showModal={data.Content.props.isOpen}
                    closeModal={()=>{setViewModal(false)}}
                />
            }
        </div>
    )
}

export default Renderer
