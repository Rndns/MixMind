import "./ModalBasic.css";
import React, { useState } from "react";

function ModalBasic({ setModalOpen, id, comment}) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };
    const [editComment, setEditComment] = useState(comment)

    return (
        <div className="modal-container">
            <div>
                <b>{console.log(editComment)}</b>
            </div>
            {/* <input >{comment}</input> */}
            <input type="text" onChange={(e)=>setEditComment(e.target.value)} value={editComment} />
            <button className='btn btn-secondary' onClick={closeModal}>
                수정완료
            </button>
            <button className='btn btn-danger' onClick={closeModal}>
                수정취소
            </button>
        </div>
    );
}
export default ModalBasic;