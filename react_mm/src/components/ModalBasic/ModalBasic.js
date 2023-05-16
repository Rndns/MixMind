import { updateComment } from "../../services/appServices";
import "./ModalBasic.css";
import React, { useState } from "react";

function ModalBasic({ setModalOpen, id, comment}) {
    // 모달 끄기 
    const [editComment, setEditComment] = useState(comment)

    const closeModal = () => {
        setModalOpen(false);
    };
    

    const editCommentModal = () => {
        setModalOpen(false);
        updateComment(id, editComment);
    };

    return (
        <div className="modal-container">
            <div>
                <b>{console.log(editComment)}</b>
            </div>
            {/* <input >{comment}</input> */}
            <input type="text" onChange={(e)=>setEditComment(e.target.value)} value={editComment} />
            <button className='btn btn-secondary' onClick={editCommentModal}>
                수정완료
            </button>
            <button className='btn btn-danger' onClick={closeModal}>
                수정취소
            </button>
        </div>
    );
}
export default ModalBasic;