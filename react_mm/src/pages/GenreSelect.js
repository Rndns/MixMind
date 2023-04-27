import React ,{useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { genreSelect } from "../services/appServices";

// export default function GenreSelect(){
//     const [genre, setgenreslect] = useState("")
//     const navigate = useNavigate();

//     const handelSelect = (e) => {
//         genreSelect().then(data => (
//             setgenreslect(data)
//         ))
//         setgenreslect(e.target.value);
//     };


//     return(
//         <div>
//             <h1>Select Genre</h1>
//             <div>
//                 <select onChange={handelSelect} value={(genre)}>
//                     {genre.map((gen) => (
//                         <option value = {gen.id} key = {gen.id} 
//                         onClick={()=>{
//                             navigate('genreSelect', {
//                                 state: {
//                                     gen : gen
//                                 }
//                             } )
//                         }}>
//                             {gen}
//                         </option>
//                     ))}
//                 </select>
//                 <hr />
//                 <p>
//                 genre: <b>{genre}</b>  
//                 </p>
//             </div>
//         </div>
//     );
// }


// export default function GenreSelect() {
//     const [genre, setGenreSelect] = useState("");
//     const navigate = useNavigate();
  
//     useEffect(() => {
//       genreSelect().then((data) => {
//         if (data && data.length > 0) {
//           setGenreSelect(data[0]);
//         }
//       });
//     }, []);
  
//     const handleSelect = (e) => {
//       setGenreSelect(e.target.value);
//     };
  
//     return (
//       <div>
//         <h1>Select Genre</h1>
//         <div>
//           <select onChange={handleSelect} value={genre}>
//             {genre &&
//               genreSelect.map((gen) => (
//                 <option
//                   value={gen}
//                   key={gen}
//                   onClick={() => {
//                     navigate("genreSelect", {
//                       state: {
//                         gen: gen,
//                       },
//                     });
//                   }}
//                 >
//                   {gen}
//                 </option>
//               ))}
//           </select>
//           <hr />
//           <p>
//             genre: <b>{genre}</b>
//           </p>
//         </div>
//       </div>
//     );
//   }

// export default function GenreSelect(){
//     const [genre, setGenreSelect] = useState([])
//     const navigate = useNavigate()

//     useEffect(() => {
//         genreSelect().then(data => (
//             setGenreSelect(data)
//         ))

//     })

//     return(
//         <div>
//             <select>
//                 {genre.map((gen) => (
//                     <option
//                     key={gen.id}
//                     onClick={() => {
//                         navigate("/genreSelect", {
//                         state: {
//                             gen: gen,
//                         },
//                         });
//                     }}
//                     >
//                     {gen}
//                     </option>
//                 ))}
//                 </select>
//         </div>
//     );
// }

export default function GenreSelect() {
    const [genre, setGenreSelect] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      genreSelect().then((data) => {
        setGenreSelect(data);
      });
    }, []);
  
    const handleChange = (e) => {
      const selectedGenre = genre.find((gen) => gen.genre === e.target.value);
      navigate("/genreSelectInfo", {
        state: {
          gen: selectedGenre,
        },
      });
    };
  
    return (
      <div>
        <select onChange={handleChange}>
          <option value="">Select Genre</option>
          {genre.map((gen) => (
            <option key={gen.genre} value={gen.genre}>
              {gen.genre}
            </option>
          ))}
        </select>
      </div>
    );
  }
