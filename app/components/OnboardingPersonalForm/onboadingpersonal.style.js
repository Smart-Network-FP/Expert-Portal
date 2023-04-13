import styled from 'styled-components';

export const Main = styled.section`
  /* border: 1px solid red; */
  width: 50%;
  max-width: 90%;
  margin: auto;
  padding-top: 30px;
  /* padding-bottom: 60px; */

  .PhoneInput {
    width: calc(50% - 10px);
    margin: 9px 0px;
    margin-bottom: 20px;
  }
`;

export const ProfilPhoto = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  width: max-content;

  .avatar-uploader {
    width: max-content;

    .ant-upload-select-picture-card {
      border-radius: 100px !important;
      background-color: #d9d9d9;
    }
  }
`;

export const PhotoAreaDetails = styled.div`
  span {
    display: block;
  }
`;

export const DoubleField = styled.div`
  display: flex;
  gap: 20px;
  .ant-form-item {
    width: 100% !important;
  }
`;

export const PhoneInputHolder = styled.div`
  margin-top: 20px;
  label {
    display: block;
  }
`;

export const BottomNavigation = styled.div`
  margin-top: 50px;
  border-top: 0.5px solid grey;
  height: 200px;
  display: flex;
  gap: 20px;
  align-items: center;
`;