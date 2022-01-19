import React from 'react'

const BtnComponent = ({clicked, text, }) => {
    return (
        <button onClick={clicked} type="button" className="rounded block py-2 px-5 focus:outline-none bg-convorange text-white hover:bg-orange-600">
            {text}
        </button>
    )
}

export default BtnComponent
