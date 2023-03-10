import { useState } from 'react';

import styled from 'styled-components';

export const ModalContainer = styled.div`
  background-color : white;
  display : flex;
  width:100%;
  height:70%;
  justify-content : center;
  align-items : center;
`;

export const ModalBackdrop = styled.div`
  position : fixed;
  width:89%;
  height:37%;
  border-radius:10px;
  background-color :rgba(0,0,0,0.3);
  display : flex;
  justify-content : center;
  align-items : center;
`;

export const ModalBtn = styled.button`
  background-color: #FCC8DC;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',
}))`
  border-radius : 10px;
  background-color : white;
  display : flex;
  flex-direction:column;
  align-items : center;
  width:300px;
  height:200px;
  >.exitBtn{
    font-size : 25px;
    margin: 10px 0px 45px 0px;
    cursor: pointer;
  }
  .helloModal{
    font-size : 20px;
    font-weight: bold;
  }
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn
        // TODO : 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
        onClick={openModalHandler}
        >
          {isOpen === true ? "Opened":"Open Modal" /* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현해야 합니다. */}
        </ModalBtn>
        {isOpen === true ? 
        <ModalBackdrop onClick={openModalHandler}>
        <ModalView onClick={(e) => e.stopPropagation()}>
          <div className='exitBtn' onClick={openModalHandler}>&times;</div>
          <div className='helloModal'>💗Hello Modal💗</div>
        </ModalView>
        </ModalBackdrop>
        :null /* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현해야 합니다. */}
      </ModalContainer>
    </>
  );
};