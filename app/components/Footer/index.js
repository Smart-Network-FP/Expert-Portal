/**
 *
 * Footer
 *
 */

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  border-top: 2px solid #e8e8e8;
`;

const FooterLink = styled.a`
  margin-left: 5px;
  color: #1890ff;
  transition: color 0.3s;

  &:hover {
    color: #40a9ff;
  }
`;
const Footer = () => (
  <FooterContainer>
    © {new Date().getFullYear()} Your Company Name. All rights reserved.{' '}
    <FooterLink href="/contact">Contact Us</FooterLink>
  </FooterContainer>
);

export default Footer;
