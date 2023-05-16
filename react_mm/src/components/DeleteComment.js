import React, { useState } from "react";

function DeleteCmt({ setModalOpen, id, comment}) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };
    const [deleteComment, setDeleteComment] = useState(comment)

    return (
        <div className="delete-container">
            <div>
                <b>{console.log(deleteComment)}</b>
            </div>
            {/* <input >{comment}</input> */}
            <input type="text" onChange={(e)=>setDeleteComment(e.target.value)} value={deleteComment} />
            <button className='btn btn-secondary' onClick={closeModal}>
                X
            </button>
        </div>
    );
}
export default DeleteCmt;