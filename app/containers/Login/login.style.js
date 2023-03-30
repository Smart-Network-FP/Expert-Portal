import styled from 'styled-components';

export const Main = styled.section`
  margin: auto;
  padding-top: 100px;
  width: 350px;
  max-width: 90%;

  .center {
    text-align: center;
  }

  .remember_me_section {
    display: flex;
    justify-content: space-between;
  }

  button {
    margin: 20px auto;
    height: 50px;
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;

  img {
    width: auto;
  }
`;
