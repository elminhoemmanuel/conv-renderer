import React, { useState, useEffect } from 'react'
import H1Component from './H1Component'
import H2Component from './H2Component'
import PComponent from './PComponent'
import ListComponent from './ListComponent'
import BtnComponent from './BtnComponent'
import LinkComponent from './LinkComponent'
import ModalComponent from './ModalComponent'

const BoxComponent = ({ children, details }) => {

    // const getChildren = (given) =>{
    //     let childArr = Object.values(given)
    //     console.log(childArr)
    //     let i = 0
    //     for (let i = 0; i < childArr.length; i++) {
    //         if(childArr[i].Content.type === 'H1Component'){
    //             console.log("h1")
    //             return <H1Component text={childArr[i].Content.props.text} />
    //         }
    //         if(childArr[i].Content.type === 'H2Component'){
    //             console.log("h2")
    //             return <H2Component text={childArr[i].Content.props.text} />
    //         }
    //         if(childArr[i].Content.type === 'ListComponent'){
    //             console.log("list")
    //             return <ListComponent items={childArr[i].Content.props.li} />
    //         }
    //     }
    // }

    const getH1 = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'H1Component') {
                return <H1Component text={offspring[each].Content.props.text} />
            }
        }
    }
    const getH2 = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'H2Component') {
                return <H2Component text={offspring[each].Content.props.text} />
            }
        }
    }
    const getP = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'ParagraphComponent') {
                return <PComponent text={offspring[each].Content.props.text} />
            }
        }
    }
    const getList = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'ListComponent') {
                return <ListComponent items={offspring[each].Content.props.li} />
            }
        }
    }
    const getBtn = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'ButtonComponent') {
                return <BtnComponent clicked={() => console.log("clicked")} text={offspring[each].Content.props.text} />
            }
        }
    }
    const getLink = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'LinkComponent') {
                return <LinkComponent url={offspring[each].Content.props.url} clicked={() => console.log("link clicked")} text={offspring[each].Content.props.text} />
            }
        }
    }
    const getBox = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'BoxComponent') {
                return <BoxComponent children={offspring[each].Children} details={offspring[each].Content.props} />
            }
        }
    }
    const getModal = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'ModalComponent') {
                return <ModalComponent
                    isOpen={offspring[each].Content.props.isOpen}
                    width={offspring[each].Content.props.width}
                    height={offspring[each].Content.props.height}
                    children={offspring[each].Children}
                />
            }
        }
    }

    useEffect(() => {
        // console.log(details)
    }, [])

    return (
        <div style={{ borderWidth: `${details ? details.borderSize : "1px"}` }} className="border border-gray-500 p-2">
            {getModal(children)}
            {getH1(children)}
            {getH2(children)}
            {getP(children)}
            {getList(children)}
            {getBtn(children)}
            {getLink(children)}
            {getBox(children)}
        </div>
    )
}

export default BoxComponent
