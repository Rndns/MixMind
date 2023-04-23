import React, { useEffect, useState } from "react";
import { genreList } from "../services/appServices";
import { Navigate } from "react-router-dom";


export default function Genrelist(){
    const [genre, setgenre] = useState([])

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
                            Navigate('/genreListInfo', {
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
