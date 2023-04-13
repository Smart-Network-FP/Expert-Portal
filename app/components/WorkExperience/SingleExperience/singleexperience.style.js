import styled from 'styled-components';

export const Main = styled.div``;

export const ExperienceCard = styled.div`
  border: 1px dotted grey;
  background-color: rgba(0, 0, 0, 0.06);
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const ExperienceHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;

export const HeaderActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  .Ico {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const CompanyDetials = styled.div`
  span {
    display: block;
  }
`;

export const JobDetails = styled.div`
  margin: 16px auto;
  font-weight: 300;
`;