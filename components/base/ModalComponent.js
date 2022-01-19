import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import React, { useState, useEffect } from "react"
import H1Component from './H1Component'
import H2Component from './H2Component'
import PComponent from './PComponent'
import ListComponent from './ListComponent'
import BtnComponent from './BtnComponent'
import LinkComponent from './LinkComponent'
import BoxComponent from './BoxComponent'

const ModalComponent = ({ isOpen, width, height, children }) => {

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        setShowModal(isOpen ? true : false)
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
                return <BtnComponent clicked={() => console.log("clicked")} text={offspring[each].Content.props.text} />
            }
        }
    }
    const getLink = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'LinkComponent') {
                return <LinkComponent text={offspring[each].Content.props.url} clicked={() => console.log("link clicked")} text={offspring[each].Content.props.text} />
            }
        }
    }
    const getBox = (offspring) => {
        for (const each in offspring) {
            if (offspring[each].Content.type === 'BoxComponent') {
                return <BoxComponent children={offspring[each].Children} details={data.Content.props} />
            }
        }
    }

    return (
        <div>
            {
                showModal &&

                <Modal open={isOpen} onClose={closeModal} center styles={{ modal: { width: `${width}`, height: `${height}` } }}>
                    <div className="p-6">
                        {getH1(children)}
                        {getH2(children)}
                        {getP(children)}
                        {getList(children)}
                        {getBtn(children)}
                        {getLink(children)}
                        {getBox(children)}
                    </div>
                </Modal>
            }
        </div>
    );
};

export default ModalComponent