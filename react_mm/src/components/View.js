import React from 'react';
import styled from 'styled-components';

const GREY = {
  400: '#bdbdbd',
  600: '#757575',
};
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  color: white;
  font-size: ${({ level }) => `${level}rem`};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

function View() {
  return (
    <>
      <Wrapper style={{ backgroundColor: GREY[400] }}>
        <P level={3} fontWeight="bold">
          playing music
          <br />
          SlideDir: left
        </P>
      </Wrapper>
      <Wrapper style={{ backgroundColor: GREY[600] }}>
        <P level={3} fontWeight="bold">
          playing music
          <br />
          SlideDir: right
        </P>
      </Wrapper>
    </>
  );
};

export default View;