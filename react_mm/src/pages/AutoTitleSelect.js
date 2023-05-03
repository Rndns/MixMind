// import React ,{useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { autoTitleSelect } from "../services/appServices";

// export default function AutoTitleSelect() {
//     const [title, setTitleSelect] = useState([]);
//     const navigate = useNavigate();
  
//     useEffect(() => {
//         autoTitleSelect().then((data) => {
//         setTitleSelect(data);
//       });
//     }, []);
  
//     const handleClick = (e) => {
//         const selectedTitle = title.find((ttl) => ttl.title === e.target.value);
//         navigate("/autoTitleInfo", {
//             state: {
//                 ttl: selectedTitle,
//         },
//       });
//     };
    
//     return (
//       <div>
//           {title.map((ttl) => (
//             <div key={ttl.title} onClick={() => handleClick(ttl)}>
//               {ttl.title}
//             </div>
//           ))}
//       </div>
//     );
//   }

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { autoTitleSelect } from "../services/appServices";

// export default function AutoTitleSelect() {
//   const navigate = useNavigate();
//   const [titleSelect, setTitleSelect] = useState([]);

//   useEffect(() => {
//     autoTitleSelect().then((data) => {
//       setTitleSelect(data);
//     });
//   }, []);

//   const handleClick = (selectedTitle) => {
//     navigate("/autoTitleInfo", {
//       state: {
//         ttl: selectedTitle,
//       },
//       search: `title=${selectedTitle.title}`
//     });
//   };

//   return (
//     <div>
//       {titleSelect.map((ttl) => (
//         <div key={ttl.title} onClick={() => handleClick(ttl)}>
//           {ttl.title}
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { titleSelect } from "../services/appServices";

// export default function AutoTitleSelect() {
//   const navigate = useNavigate();
//   const [ttlSelect, setTitleSelect] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await titleSelect();
//       titleSelect(data);
//     };

//     fetchData();
//   }, []);

//   const handleClick = (selectedTitle) => {
//     navigate("/autoTitleInfo", {
//       state: {
//         ttl: selectedTitle,
//       },
//       search: `title=${selectedTitle.title}`,
//     });
//   };

  export default function AutoTitleSelect() {
    const navigate = useNavigate();
    const [clickedItem, setClickedItem] = useState(""); // clickedItem 상태값 추가
    const [ttlSelect, setTitleSelect] = useState([]);
  
    const fetchData = async () => {
      const data = await titleSelect(clickedItem); // titleSelect 함수에 clickedItem 전달
      setTitleSelect(data);
    };
  
    useEffect(() => {
      fetchData();
    }, [clickedItem]); // clickedItem 값이 변경될 때마다 fetchData 함수 호출

    const handleClick = (selectedTitle) => {
      navigate("/autoTitleInfo", {
      state: {
        ttl: selectedTitle,
      },
      search: `title=${selectedTitle.title}`,
    });
  };

  return (
    <div>
      {ttlSelect.map((ttl) => (
        <div key={ttl.title} onClick={() => handleClick(ttl)}>
          {ttl.title}
        </div>
      ))}
    </div>
  );
}