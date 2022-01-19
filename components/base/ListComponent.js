import React from 'react'

const ListComponent = ({ items }) => {
    return (
        <h1 className="">
            {
                items && 
                <ul className="pl-8">
                    {
                        items.map((item)=>(
                            <li key={item} >&#8226; {item}</li>
                        ))
                    }
                </ul>
            }
        </h1>
    )
}

export default ListComponent
