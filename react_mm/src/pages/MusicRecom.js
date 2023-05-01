import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import Slick from "../components/Slick";
import { musicRecommend } from "../services/appServices";
import SearchBar from "../components/Search";
import SearchApp from '../components/SearchApp'
import Spinner from 'react-bootstrap/Spinner';
import '../styles.css';

export default function MusicRecom() {
    const location = useLocation();
    const navigate = useNavigate();
    const [musicInfos, setImagesData] = useState([
        {
            id: 0,
            albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
        },
        {
            id: 1,
            albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
        },
        {
            id: 2,
            albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
        },
        {
            id: 3,
            albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
        },
        {
            id: 4,
            albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
        },
        {
            id: 5,
            albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
        },
        {
            id: 6,
            albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
        },
        {
            id: 7,
            albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
        },
        {
            id: 8,
            albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
        },
        {
            id: 9,
            albumImg: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
        },
    ]);

    

    useEffect(() => {
        musicRecommend(location.state.emotions).then(data => {
            setImagesData(data);
        });
    }, []);

    return (
        <div className="musicrecompage">
            {/* <SearchBar /> */}
            {/* <button onClick={() => {navigate('/musicrecomlistpage')}}>추천음악이동</button> */}
            <div>
                <Container>
                    <div>
                        <h3 class="slick1"><b>당신에게 이 음악을 추천드립니다</b></h3>
                        <Slick musicInfos={musicInfos} />
                    </div>
                    <div>
                        <h3 class="slick2"><b>90%의 사용자는 슬플 때 이 음악을 듣습니다</b></h3>
                        <Slick musicInfos={musicInfos} />
                    </div>
                    <div>
                        <h3 class="slick3"><b>87%의 사용자는 행복할 때 이 음악을 듣습니다</b></h3>
                        <Slick musicInfos={musicInfos} />
                    </div>
                    <div>
                        <h3 class="slick4"><b>사랑스러운 분위기의 음악을 들어보세요</b></h3>
                        <Slick musicInfos={musicInfos} />
                    </div>
                </Container>
            </div>
        </div>
    );
}

// function MusicRecom() {
//     const navigate = useNavigate();
//     const images = [
//         "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
//         "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832",
//         "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832"
//     ];

//     function goMusicRecomList() {
//         navigate('/musicrecomlistpage');
//     }

//     return (
//         <div className="musicrecompage">
//             음악추천페이지
//             <button onClick={goMusicRecomList}>추천음악이동</button>
//             <div>
//                 <Container sm={6}>
//                     <Row>
//                         <Col>
//                             ~~ 할때 듣는 노래 추천
//                         </Col>
//                         <Col >
//                             {images.map((img, index) => (
//                                 <img
//                                     sm={6}
//                                     key={index}
//                                     src={img}
//                                     alt={'Image ${index}'}
//                                     stryle={{ width: "100%", height: "auto" }}//이미지
//                                 ></img>
//                             ))}
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </div>
//     );
// }


// export default MusicRecom;