/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import ProfileHeader from 'components/ProfileHeader';
import ProfileMainSection from 'components/ProfileMainSection';
import Footer from 'components/Footer';
import ProfileSummary from 'components/ProfileSummary';
import styled from 'styled-components';
import axios from 'axios';
import { getCookie } from 'utils/cookies';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState('');
  const [expert, setExpert] = useState({});
  const calls = [
    {
      id: 1,
      clientName: 'Alice Johnson',
      date: '2023-03-15T14:00:00Z',
      isConfirmed: false,
    },
    {
      id: 2,
      clientName: 'Bob Smith',
      date: '2023-03-16T16:00:00Z',
      isConfirmed: true,
      confirmedLink: 'https://example.com/meeting/bob',
    },
    {
      id: 1,
      clientName: 'Alice Johnson',
      date: '2023-03-15T14:00:00Z',
      isConfirmed: false,
    },
    {
      id: 2,
      clientName: 'Bob Smith',
      date: '2023-03-16T16:00:00Z',
      isConfirmed: true,
      confirmedLink: 'https://example.com/meeting/bob',
    },
    {
      id: 1,
      clientName: 'Alice Johnson',
      date: '2023-03-15T14:00:00Z',
      isConfirmed: false,
    },
    {
      id: 2,
      clientName: 'Bob Smith',
      date: '2023-03-16T16:00:00Z',
      isConfirmed: true,
      confirmedLink: 'https://example.com/meeting/bob',
    },
    {
      id: 1,
      clientName: 'Alice Johnson',
      date: '2023-03-15T14:00:00Z',
      isConfirmed: false,
    },
    {
      id: 2,
      clientName: 'Bob Smith',
      date: '2023-03-16T16:00:00Z',
      isConfirmed: true,
      confirmedLink: 'https://example.com/meeting/bob',
    },
    // ... Add more calls as needed
  ];
  useEffect(async () => {
    setAuthToken(getCookie('authToken'));
  }, []);
  useEffect(() => {
    if (authToken) {
      axios
        .get('/api/expert/profile', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then(res => {
          console.log('apiRes, ', res.data);
          setExpert(res.data);
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
          console.log(err);
        });
    }
  }, [authToken]);
  return loading ? (
    <p>Loading</p>
  ) : (
    <>
      <AppContainer>
        <Content>
          <ProfileHeader expert={expert} />
          <ProfileSummary summary={expert.summary || ''} />
          <ProfileMainSection calls={calls} authToken={authToken} />
        </Content>
        <Footer />
      </AppContainer>
    </>
  );
}
