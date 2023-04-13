import styled from 'styled-components';

export const Main = styled.section`
  width: 50%;
  max-width: 90%;
  margin: auto;
`;

export const AddWorkExperience = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;

  span {
    padding: 15px;
    border: 1px dotted grey;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: max-content;
    background: rgba(0, 0, 0, 0.06);
    cursor: pointer;

    .addIco {
      font-size: 20px;
    }

    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const DoubleField = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  > div {
    width: max-content;
  }
  .ant-form-item {
    width: 100% !important;
  }
`;
