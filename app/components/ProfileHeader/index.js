/* eslint-disable react/prop-types */
/**
 *
 * ProfileHeader
 *
 */

import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #1890ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const ProfileHeader = ({ expert }) => (
  <HeaderContainer>
    <UserInfo>
      <Avatar>{expert.firstName.charAt(0).toUpperCase()}</Avatar>
      <UserDetails>
        <div style={{ fontWeight: 'bold' }}>{`${expert.firstName} ${
          expert.lastName
        }`}</div>
        <div style={{ fontWeight: 'bold' }}>
          {expert.experience[0].role}, {expert.experience[0].company}
        </div>
        <div>{expert.industry}</div>
        {/* <div>{`${expert.city}, ${expert.state}, ${expert.country}`}</div> */}
        {/* <div>{expert.phoneNumber}</div> */}
      </UserDetails>
    </UserInfo>
    <Button
      type="primary"
      onClick={() => window.location.replace(`${window.location.origin}/login`)}
    >
      Logout
    </Button>
  </HeaderContainer>
);

export default ProfileHeader;
