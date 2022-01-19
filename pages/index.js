import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'


export default function Home() {


    return (
        <>
            <Head>
                <title>Conversional</title>
                <meta name="keywords" content="Conversional" />
            </Head>

            <div className=" 2xl:max-w-screen-2xl 2xl:mx-auto">
                Conversional
            </div>
        </>
    )
}
