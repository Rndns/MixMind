import "./ModalBasic.css";
import React from "react";

function ModalBasic({ setModalOpen, id, content}) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="modal-container">
            <button className='modal-close-btn' onClick={closeModal}>
                X
            </button>
            <p>모달창입니다.</p>
        </div>
    );
}
export default ModalBasic;