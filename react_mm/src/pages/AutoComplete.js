import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { titleCollect } from "../services/appServices";

// import { useRecoilState } from "recoil";

// export default function SelectOption(){
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [keyword, setkeyword] = useState('')
    

//     // const [keyword, setkeyword] = useRecoilState(searchKeyword);
   
//     return(
//         <div className = "searchopt">
//             <input type="text" className = "input-text"/>
//             <button type = "button" className = "search">
//                 <span>검색</span>
//             </button>
//         </div>
//     )
// };

const AutoComplete = () => {
    const [wholeTextArray, setWholeTextArray] = useState(['아이유', '수지', '복숭아', '밤편지'])
    const [inputValue, setInputValue] =useState('')
    const [isHaveInputValue, setIsHaveInputValue] = useState(false)
    const [dropDownList, setDropDownList] = useState(wholeTextArray)
    const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)
    const navigate = useNavigate();

    const showDropDownList = () => {
        if (inputValue === '') {
            setIsHaveInputValue(false)
            setDropDownList([])
        } else {
            const chooseTextList = wholeTextArray.filter(textItem => 
                textItem.includes(inputValue)
                )
                setDropDownList(chooseTextList)
        }
    }

    const changeInputValue = event => {
        setInputValue(event.target.value)
        setIsHaveInputValue(true)
    }

    const clickDropDownItem = clickedItem => {
        setInputValue(clickedItem)
        setIsHaveInputValue(false)
        console.log(inputValue)
        console.log(clickedItem)

        // navigate(`/autoTitleInfo/${clickedItem}`);
        // navigate(`/autoTitleSelect?title=${clickedItem}`);
        navigate(`/autoTitleInfo`, {
          state: {
            title : clickedItem
          }
        });
        
    };

    const handleDropDownKey = event => {
        if (isHaveInputValue) {
            if (
                event.key === 'ArrowDown' &&
                dropDownList.length - 1 > dropDownItemIndex
            ) {
                setDropDownItemIndex(dropDownItemIndex + 1)
            }

            if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
                setDropDownItemIndex(dropDownItemIndex - 1)
            if (event.key === 'Enter' && dropDownItemIndex >= 0) {
                clickDropDownItem(dropDownList[dropDownItemIndex])
                setDropDownItemIndex(-1)
            }
            }
    }
    useEffect(()=> {
      titleCollect().then(data =>{ 
        setWholeTextArray(data);
        console.log(wholeTextArray)
    },console.log(wholeTextArray))
    },[])

    useEffect(showDropDownList, [inputValue])

    return (
        <WholeBox>
          {/* <Title text='AutoComplete' /> */}
          <InputBox isHaveInputValue={isHaveInputValue}>
            <Input
              type='text'
              value={inputValue}
              onChange={changeInputValue}
              onKeyUp={handleDropDownKey}
            />
            <DeleteButton onClick={() => setInputValue('')}>&times;</DeleteButton>
          </InputBox>
          {isHaveInputValue && (
            <DropDownBox>
              {dropDownList.length === 0 && (
                <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
              )}
              {dropDownList.map((dropDownItem, dropDownIndex) => {
                return (
                  <DropDownItem
                    key={dropDownIndex}
                    onClick={() => clickDropDownItem(dropDownItem)}
                    onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                    className={
                      dropDownItemIndex === dropDownIndex ? 'selected' : ''
                    }
                  >
                    {dropDownItem}
                  </DropDownItem>
                )
              })}
            </DropDownBox>
          )}
        </WholeBox>
      )

}

const activeBorderRadius = '16px 16px 0 0'
const inactiveBorderRadius = '16px 16px 16px 16px'

const WholeBox = styled.div`
  padding: 10px;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${props =>
    props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`

const DeleteButton = styled.div`
  cursor: pointer;
`

const DropDownBox = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
`

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: lightgray;
  }
`

export default AutoComplete


