import React, { useState } from "react";

function StoreImgList(props) {
  const [state, setState] = useState({
    slideSpot: 0
    //현재 화면에 보이고 있는 슬라이드의 시작점
  });

  const imagesData = props.imagesData || [["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832"], ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832"], ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjBfOTUg%2FMDAxNjc5MzIxNTg2NjAx.2ElhTpg11LChrcHV06EZYyIDVKdgyourCBNKR8Fb2iAg.dhva9hRZ13Uc6dv138hb2h2ppFqMaG6WeSX6T9SVzf0g.JPEG.chomh71888%2F31.jpg&type=sc960_832"]];

  // const imgQuantity = props.imagesData.length;
  const imgQuantity = 3;

  //데이터로 들어오는 총 이미지 수가 항상 다르기 때문에 총 이미지 수를 구해준다.
  const slideWidth =
    IMG_WIDTH * imgQuantity + (imgQuantity - 1) * SLIDE_GAP;
  //슬라이드 내부 컨텐츠의 전체 길이를 구해준다. 
  const hiddenedSlideWidth = slideWidth - window.innerWidth;
  //슬라이드 내부 컨텐츠 전체 길이에서 윈도우의 innerWidth 값을 빼 남아있는 슬라이드의 길이를 구한다.
  let slideEnd;
  //슬라이드의 끝부분에 갔을 때 next 버튼이 없어지도록 만들 때 사용할 변수이다.

  const handlePrevBtn = () => {
    const { slideSpot } = state;

    if (Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
      //슬라이드 왼쪽으로 남은 값이 한 번에 이동하는 값보다 작으면 

      setState({
        slideSpot: 0,
        //0까지만 이동

      });
    } else {
      //그 외의 경우

      setState({
        slideSpot: slideSpot + SLIDE_MOVING_UNIT,
        //현재 위치에서 한 번에 이동해야 하는 값만큼 이동

      });
    }
  };

  const handleNextBtn = () => {
    const { slideSpot } = state;

    if (hiddenedSlideWidth - Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
      //남아있는 슬라이드의 길이에서 현재 슬라이드의 위치값을 뺀 값이 한 번에 움직여야 하는 값보다 작으면

      setState({
        slideSpot: slideSpot - (hiddenedSlideWidth - Math.abs(slideSpot)),
        //남은 길이만큼만 이동하고

      });
      slideEnd =
        slideSpot - (hiddenedSlideWidth - Math.abs(slideSpot));
      //slideEnd의 값을 slideSpot의 값과 동일하게 만들어 nextBtn을 보이지 않게 한다 

    } else {
      //남아있는 슬라이드의 길이가 한 번에 움직여야 하는 값보다 크면

      setState({
        slideSpot: slideSpot - SLIDE_MOVING_UNIT,
        //한 번에 움직여야 하는 만큼 값을 빼준다

      });
    }
  };

  const { slideSpot } = state;
  // const imagesData = props.imagesData;

  return (
    <div className="storeImgBox">
      {!!slideSpot && (
        <button onClick={handlePrevBtn} className="slideArrow arrowLeft">
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
      <ul className="storeImgUl">
        <div
          style={{ transform: `translateX(${slideSpot}px)` }}
          className="slideInner"
        >
          {imagesData.map((img, i) => (
            <li key={i} className="storeImgLi">
              <img src={img} />
            </li>
          ))}

        </div>
      </ul>
      {slideSpot !== slideEnd && (
        <button
          onClick={handleNextBtn}
          className="slideArrow arrowRight"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
}


const SLIDE_GAP = 14;  //각 슬라이드 사이 간격 
const SLIDE_MOVING_UNIT = 500;  //슬라이드 버튼 클릭 시 움직일 길이
const IMG_WIDTH = 400;  //이미지 가로 길이

export default StoreImgList;