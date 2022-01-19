import React from 'react'
import Link from "next/link"

const LinkComponent = ({ url, text, clicked }) => {
    // console.log(url)
    return (
        <Link href={url}>
            <a onClick={clicked} className="underline hover:text-convorange" target="_blank">
                {text}
            </a>
        </Link>
    )
}

export default LinkComponent
