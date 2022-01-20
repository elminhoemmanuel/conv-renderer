import React, { useState, useEffect } from 'react'
import H1Component from './H1Component'
import H2Component from './H2Component'
import PComponent from './PComponent'
import ListComponent from './ListComponent'
import BtnComponent from './BtnComponent'
import LinkComponent from './LinkComponent'
import ModalComponent from './ModalComponent'
import { useSelector, useDispatch } from 'react-redux'

const BoxComponent = ({ children, details }) => {

    // for additional requirement feature
    const { modalData } = useSelector((state) => state.test);

    const [showModal, setShowModal] = useState(false);
    const openModal = () => { setShowModal(true); console.log(showModal, 'opening') };
    const closeModal = () => { setShowModal(false); console.log(showModal, "closing") };
    
    const [showModalClicked, setShowModalClicked] = useState(false);
    const openModalClicked = () => { setShowModalClicked(true); console.log(showModalClicked, 'opening clicked') };
    const closeModalClicked = () => { setShowModalClicked(false); console.log(showModalClicked, "closing clicked") };

    useEffect(() => {
        for (let [key, value] of Object.entries(children)) {
            if (children[key].Content.type === 'ModalComponent') {
                // console.log("first setter", value)
                setShowModal(value.Content.props.isOpen);
            }
        }
        console.log("rendered")
    }, [])


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
                return <BtnComponent clicked={() => { openModalClicked() }}
                    text={offspring[each].Content.props.text} />
            }
        }
    }
    const getLink = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'LinkComponent') {
                return <LinkComponent url={offspring[each].Content.props.url}
                clicked={() => { openModalClicked() }} text={offspring[each].Content.props.text} />
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
                    width={offspring[each].Content.props.width}
                    height={offspring[each].Content.props.height}
                    children={offspring[each].Children}
                    showModal={showModal}
                    closeModal={closeModal}
                    openModal={openModal}
                />
            }
        }
    }


    return (
        <div style={{ borderWidth: `${details ? details.borderSize : "1px"}` }} className="border border-gray-500 p-2">
            {getModal(children)}

            {/* to enable additional feature of button and link opening modal */}
            {
                showModalClicked && <div>
                    <ModalComponent
                    width={modalData.Content.props.width}
                    height={modalData.Content.props.height}
                    children={modalData.Children}
                    showModal={true}
                    closeModal={closeModalClicked}
                />
                </div>
            }
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
