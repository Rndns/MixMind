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
            <button className='modal-close-btn' onClick={closeModal}>
                수정취소
            </button>
            <div>
                {console.log(editComment)}
            </div>
            {/* <input >{comment}</input> */}
            <input type="text" onChange={(e)=>setEditComment(e.target.value)} value={editComment} />
            <button className='modal-update-complete' onClick={closeModal}>
                수정완료
            </button>
        </div>
    );
}
export default ModalBasic;