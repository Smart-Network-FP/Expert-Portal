/**
 *
 * TopWrapper
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Layout } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';
const { Header, Content, Footer } = Layout;

function TopWrapper({ children }) {
  return (
    <div>
      <Layout style={{ width: '100%' }}>
        <Header
          style={{
            position: 'sticky',
            top: '0',
            maxHeight: 70,
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
          SMART NETWORK
        </Header>
        <Content style={{ height: 'calc(100vh - 140px)' }}>{children}</Content>
        <Footer
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: '0',
            maxHeight: 70,
            background: 'darkred',
            color: '#fff',
          }}
        >
          <div style={{ display: 'flex' }}>
            <a href="/">Contact Us</a>
            {/* <FormattedMessage
              {...messages.footer}
              values={{
                author: (
                  <a href="https://github.com/habeebahmed">
                    {<FormattedHTMLMessage {...messages.author} />}
                  </a>
                ),
              }}
            /> */}
          </div>
        </Footer>
      </Layout>
    </div>
  );
}

TopWrapper.propTypes = {
  children: PropTypes.any,
};

export default memo(TopWrapper);
