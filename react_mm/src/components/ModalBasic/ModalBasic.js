import "./ModalBasic.css";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalBasic({ setModalOpen, id, comment}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };
    const [editComment, setEditComment] = useState(comment)

    return (
        <div className="modal-container">
            <Modal.Title><b>댓글 수정하기</b></Modal.Title>
            <Button variant="outline-light" onClick={closeModal}>
                <b>수정완료</b>
            </Button>
            <Button variant="outline-danger" onClick={closeModal}>
                <b>수정취소</b>
            </Button>
            <div>
                <b>{console.log(editComment)}</b>
            </div>
            {/* <input >{comment}</input> */}
            <Modal.Body><input type="text" onChange={(e)=>setEditComment(e.target.value)} value={editComment} /></Modal.Body>
        </div>
    );
}
export default ModalBasic;