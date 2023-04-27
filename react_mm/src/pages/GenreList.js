import React, { useEffect, useState } from "react";
import { genreList } from "../services/appServices";
import { useNavigate } from "react-router-dom";


export default function Genrelist(){
    const [genre, setgenre] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        genreList().then(data => (
            setgenre(data)
        ))

    })

    return(
        <div>
            {genre.map((gen) => (
                <div key = {gen.id}>
                    <img src ={gen.albumImg} alt = 'genre'
                        onClick={() => {
                            navigate('/genreListInfo', {
                                state : {
                                    gen : gen
                                }
                            })
                        }}
                        />
                </div>
            ))}
        </div>
    )
}
