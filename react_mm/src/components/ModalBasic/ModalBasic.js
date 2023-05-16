import { updateComment } from "../../services/appServices";
import "./ModalBasic.css";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalBasic({ setModalOpen, id, comment, commentList, changeList}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // 모달 끄기 
    const [editComment, setEditComment] = useState(comment)

    const closeModal = () => {
        setModalOpen(false);
    };
    

    const editCommentModal = () => {
        updateComment(id, editComment);
        const listIndex = commentList.findIndex(list => list.id === id)
        if (listIndex !== -1) {
            const updatedCommentList = [...commentList];
            updatedCommentList[listIndex].comment = editComment;
            changeList(updatedCommentList);
        }
        setModalOpen(false);
    };

    return (
        <div className="modal-container">
            <Modal.Title><b>댓글 수정하기</b></Modal.Title>
<<<<<<< HEAD
            <Button variant="outline-light" onClick={editCommentModal}>
                수정완료
=======
            <Button variant="outline-light" onClick={closeModal}>
                <b>수정완료</b>
>>>>>>> hjk
            </Button>
            <Button variant="outline-danger" onClick={closeModal}>
                <b>수정취소</b>
            </Button>
            <div>
                <b>{console.log(editComment)}</b>
            </div>
            {/* <input >{comment}</input> */}
            <Modal.Body><input type="text" onChange={(e)=>setEditComment(e.target.value)} value={editComment} /></Modal.Body>
            {/* <input type="text" onChange={(e)=>setEditComment(e.target.value)} value={editComment} /> */}
            {/* <button className='btn btn-secondary' onClick={editCommentModal}>
                수정완료
            </button>
            <button className='btn btn-danger' onClick={closeModal}>
                수정취소
            </button> */}
        </div>
    );
}
export default ModalBasic;