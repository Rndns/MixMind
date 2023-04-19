// import React, { useState } from "react";

// const Ad = () => {
//   const [isHovering, setIsHovering] = useState(false);

//   return (
//     <div style={{ position: "relative", width: "300px", height: "200px" }}>
//       <div style={{ position: "absolute", top: 0, left: 0 }}>
//         <a href="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220501_145%2F16514103629340uweb_JPEG%2F5dc1628d969d97ede3208fa5a563812e5c705ca20eac9fdfc2b041d584c1.jpg&type=sc960_832">
//           <img
//             src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220501_145%2F16514103629340uweb_JPEG%2F5dc1628d969d97ede3208fa5a563812e5c705ca20eac9fdfc2b041d584c1.jpg&type=sc960_832"
//             alt="ad"
//             width="300"
//             height="200"
//             style={{ opacity: 0.5 }}
//             onMouseOver={() => setIsHovering(true)}
//             onMouseOut={() => setIsHovering(false)}
//           />
//         </a>
//         {isHovering && (
//           <div className="jaesaeng" style={{ position: "absolute", top: 0, left: 0 }}>
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220501_145%2F16514103629340uweb_JPEG%2F5dc1628d969d97ede3208fa5a563812e5c705ca20eac9fdfc2b041d584c1.jpg&type=sc960_832"
//               alt="ad"
//               width="300"
//               height="200" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Ad;

// import React, { useState } from "react";

// const Ad = () => {
//   const [isHovering, setIsHovering] = useState(false);

//   return (
//     <a href="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220501_145%2F16514103629340uweb_JPEG%2F5dc1628d969d97ede3208fa5a563812e5c705ca20eac9fdfc2b041d584c1.jpg&type=sc960_832">
//       <img
//         src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220501_145%2F16514103629340uweb_JPEG%2F5dc1628d969d97ede3208fa5a563812e5c705ca20eac9fdfc2b041d584c1.jpg&type=sc960_832"
//         alt="ad"
//         width="300"
//         height="200"
//         style={{ opacity: 0.5 }}
//         onMouseOver={() => setIsHovering(true)}
//         onMouseOut={() => setIsHovering(false)}
//       />
//       {isHovering && (
//         <div className="jaesaeng">
//           <p className="text">음악재생하기</p>
//         </div>
//       )}
//     </a>
//   );
// };

// export default Ad;

// import React, { useState } from "react";


// const Header = () => {
//   const [isListHover, setIsListHover] = useState(false);
//   return (
//     <li
//       onMouseOver={() => setIsListHover(true)}
//       onMouseOut={() => setIsListHover(false)}
//     >
//       <img
//         src={isListHover ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220501_145%2F16514103629340uweb_JPEG%2F5dc1628d969d97ede3208fa5a563812e5c705ca20eac9fdfc2b041d584c1.jpg&type=sc960_832"
//           : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMzFfNzQg%2FMDAxNjcyNDkxNjA5NzIz.UG3IvWApwfOy1W6kilkcjq7IIO6YgzvK2ehMhzNxV_0g.eZtKLPE-ee_L5w1p89CFocODgDZj210f0eU4HAZ4-M4g.JPEG.ildu12%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001.jpg&type=sc960_832"
//         }
//         alt=""
//       />
//     </li>
//   );
// }

// export default Header;

import React from "react";

function Header() {
  return (
    <div style={{ backgroundImage: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220501_145%2F16514103629340uweb_JPEG%2F5dc1628d969d97ede3208fa5a563812e5c705ca20eac9fdfc2b041d584c1.jpg&type=sc960_832url('/images/cover.jpg')" }}>
      <div style={{ width: '300px', padding: '2em' }}>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMzFfNzQg%2FMDAxNjcyNDkxNjA5NzIz.UG3IvWApwfOy1W6kilkcjq7IIO6YgzvK2ehMhzNxV_0g.eZtKLPE-ee_L5w1p89CFocODgDZj210f0eU4HAZ4-M4g.JPEG.ildu12%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001.jpg&type=sc960_832" alt="ad" />
      </div>
    </div>
  );
}

export default Header;

// import { useState } from "react";

// const Header = async() => {
// const [fullImg, setFullImg] = useState([]);

// return(
//   mainImg = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMzFfNzQg%2FMDAxNjcyNDkxNjA5NzIz.UG3IvWApwfOy1W6kilkcjq7IIO6YgzvK2ehMhzNxV_0g.eZtKLPE-ee_L5w1p89CFocODgDZj210f0eU4HAZ4-M4g.JPEG.ildu12%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001.jpg&type=sc960_832"
// );
// } 

// export default mainImg;