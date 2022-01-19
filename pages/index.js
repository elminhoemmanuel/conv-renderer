import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import Renderer from '../components/layout/Renderer'


export default function Home() {

    let baseUrl = "http://localhost:3005/api/"
    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);

    useEffect(() => {
        getData()
    }, [loading])
    useEffect(() => {
        getData2()
    }, [loading2])

    const getData = () => {
        fetch(`${baseUrl}data`)
            .then(response => response.json())
            .then((data) => { 
                // console.log(data)
                setData(data)
                setLoading(false)
            })
            .catch(error => console.log(error));
    }
    const getData2 = () => {
        fetch(`${baseUrl}data2`)
            .then(response => response.json())
            .then((data) => { 
                // console.log(data)
                setData2(data)
                setLoading2(false)
            })
            .catch(error => console.log(error));
    }
    
    

    return (
        <>
            <Head>
                <title>Conversional</title>
                <meta name="keywords" content="Conversional" />
            </Head>

            <div className=" 2xl:max-w-screen-2xl 2xl:mx-auto">
                {
                    loading || loading2 ? "Loading...." :

                    <Renderer data={data2}/>
                }
            </div>
        </>
    )
}
