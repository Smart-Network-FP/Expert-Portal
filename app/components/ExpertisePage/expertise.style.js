import styled from "styled-components";

export const Main = styled.section`
  width: 50%;
  max-width: 90%;
  margin: auto;

  .ico {
    font-size: 30px;
    transform: translateY(20px);
  }
`;

export const DoubleField = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  .ant-form-item {
    width: 100% !important;
  }
`;

export const AddedSkillsSectioin = styled.section`
  
`;
export const AddedSkills = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px dashed grey;
  border-radius: 4px;
  margin: 20px auto;
  background-color: rgba(0, 0, 0, 0.06);
`;

export const ActionsTag = styled.div`
  display: flex;
  gap: 20px;
`;

export const SkillItem = styled.div`
  width: 30%;
  max-width: 100%;
`;

export const BottomNavigation = styled.div`
  margin-top: 50px;
  border-top: 0.5px solid grey;
  height: 200px;
  display: flex;
  gap: 20px;
  align-items: center;
`;
