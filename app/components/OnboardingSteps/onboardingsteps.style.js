import styled from 'styled-components';

export const Main = styled.section`
  background-color: #212121;
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const MessageHolder = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  * {
    color: white !important;
  }
  .left {
    width: 50%;
    #Text {
      font-weight: 200;
    }
  }
`;

export const Stepper = styled.section`
  width: 70%;
  margin: auto;
  padding: 30px 0px 10px 0px;
`;

export const HorizintalLine = styled.hr`
  color: #969696 !important;
`;
