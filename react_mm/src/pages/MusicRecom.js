import * as React from "react";
import { useNavigate } from "react-router-dom";
export default function MusicRecom() {
    const navigate = useNavigate();
    function goMusicRecomList() {
        navigate('/musicrecomlistpage');
    }
    return (
        <div className="musicrecompage">
        음악추천페이지
        <button onClick={goMusicRecomList}>추천음악이동</button>
        </div>
    );
}