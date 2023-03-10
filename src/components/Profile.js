import './Profile.css';
import './ToDoListItem.scss';

import React, {
  useCallback,
  useState,
} from 'react';

import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position : fixed;
  width:200%;
  height:100%;
  border-radius:10px;
  background-color :rgba(0,0,0,0.3);
  display : flex;
  justify-content : center;
  align-items : center;
`;

export const ModalBtn = styled.button`
  cursor: grab;
  color:white;
    font-weight: bold;
    background-color: rgb(255,174,197);
    border-radius: 5px;
    width:40px;
    padding: 2px;
    text-align: center;
    font-size: 11px;
    margin-top: 10px;
    border:none;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',
}))`
position:absolute;
z-index:100;
  border-radius : 10px;
  background-color : white;
  display : flex;
  flex-direction:column;
  align-items : center;
  width:200px;
  height:130px;

 input{
    border:2px solid black;
    border-radius:5px;
   margin-bottom:15px;
   padding:4px 0;
  }
  .exitBtnyes{
    font-size : 11px;
    cursor: pointer;
    background-color:rgb(224,106,140);
    color:white;
    border-radius:5px;
    padding:3px;
    margin-right:5px;
  }
  .exitBtnno{
    font-size : 11px;
    cursor: pointer;
    background-color:rgb(255,214,225);
    color:white;
    border-radius:5px;
    padding:3px;
    margin-left:5px;
  }
  .helloModal{
    font-size : 12px;
    font-weight: bold;
    margin-top:20px;
    margin-bottom:15px;
  }
`;


function Profile({  todo, onChangeSelectedTodo, onInsertToggle}) {
    

    const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen);
  };
  const [value, setValue] = useState('박희진');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])
    return (
        <div className="Profile">
            <img className="ProfileImage" src="https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDJfMjg0/MDAxNjI1MjM3MDEwMDEx.16ZkPZkXZmj6MQyJIpZlTidJmYGFnehv2QoiaIWVHAsg.louS2WVp9f5dzxMHdh1MdS-3bZgOIm68sJhcToobTPAg.JPEG.yyabbj/IMG_3332.JPG?type=w800"></img>
            <span className="ProfileName">{value}</span>
            <ModalBtn className="ProfileNameChange"  onClick={openModalHandler}>변경</ModalBtn>
            <div className="MadeBy">Made By hihijin</div>
            {isOpen === true ? 
            <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
            <div className='helloModal'>변경할 닉네임을 입력해주세요</div>
            <input onChange={onChange} value={value}/>
            <div>
            <span className='exitBtnyes' onClick={openModalHandler}>확인</span>
            <span className='exitBtnno' onClick={openModalHandler}>취소</span>
            </div>
            </ModalView>
            </ModalBackdrop>
            :null}
            
        </div>
    )
}

export default Profile;