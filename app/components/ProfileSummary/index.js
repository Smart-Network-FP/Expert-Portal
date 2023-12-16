/* eslint-disable react/prop-types */
/**
 *
 * ProfileSummary
 *
 */

import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const SummaryTitle = styled.h2`
  color: #1890ff;
  margin-bottom: 16px;
`;

const SummaryText = styled.p`
  color: #333;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

const ProfileSummary = ({ summary }) => (
  <SummaryContainer>
    <SummaryTitle>Profile Summary</SummaryTitle>
    <SummaryText>{summary}</SummaryText>
  </SummaryContainer>
);

export default ProfileSummary;
