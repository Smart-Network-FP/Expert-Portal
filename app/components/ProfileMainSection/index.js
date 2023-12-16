/* eslint-disable react/prop-types */
/**
 *
 * ProfileMainSection
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { DatePicker, TimePicker, Modal, List, Button } from 'antd';
// import moment from 'moment'; // Ensure you have 'moment' installed
import axios from 'axios';

const MainSectionContainer = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

// const ListItem = styled(List.Item)`
//   border: 1px solid #f0f0f0;
//   border-radius: 4px;
//   margin-bottom: 10px;
//   padding: 15px;
//   transition: box-shadow 0.3s;

//   &:hover {
//     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//   }
// `;
const StyledListItem = styled(List.Item)`
  background: #fff;
  border-radius: 8px;
  padding: 20px !important;
  margin-bottom: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .ant-list-item-meta-title {
    margin-bottom: 8px;
    font-size: 16px;
    color: #333;
  }

  .ant-list-item-meta-description {
    color: #555;
  }
`;

const StyledMeta = styled(List.Item.Meta)`
  align-items: center;
`;

const ListItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ProfileMainSection = ({ calls, authToken }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const googleMeetLink =
    'https://meet.google.com/szv-pufz-ibt?hs=187&authuser=0&ijlm=1702629302923&adhoc=1';
  const handleOk = () => {
    setIsModalVisible(false);
    // Generate and copy link logic here
    navigator.clipboard.writeText(googleMeetLink);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const showConfirmModal = () => {
    setModalVisible(true);
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  const handleTimeChange = (time, timeString) => {
    setSelectedTime(timeString);
  };

  const handleConfirm = () => {
    // Logic to handle the confirmation
    axios
      .get('/api/expert/sendEmail', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(res => {
        console.log('apiRes, ', res.data);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
    // Generate link based on selectedDate and selectedTime
    setModalVisible(false);
    navigator.clipboard.writeText(googleMeetLink);
    // Reset the date and time
    setSelectedDate(null);
    setSelectedTime(null);
  };

  return (
    <MainSectionContainer>
      <List
        itemLayout="horizontal"
        dataSource={calls}
        renderItem={call => (
          <StyledListItem>
            <StyledMeta
              title={`Call with ${call.clientName}`}
              description={`Scheduled on ${new Date(
                call.date,
              ).toLocaleString()}`}
            />
            <ListItemActions>
              {call.isConfirmed ? (
                <Button
                  onClick={() => navigator.clipboard.writeText(googleMeetLink)}
                >
                  Copy Link
                </Button>
              ) : (
                <Button type="primary" onClick={showConfirmModal}>
                  Accept
                </Button>
              )}
            </ListItemActions>
          </StyledListItem>
        )}
      />
      <Modal
        title="Confirm Call Schedule"
        visible={modalVisible}
        onOk={handleConfirm}
        onCancel={() => setModalVisible(false)}
      >
        <p>Select Date and Time for the Call:</p>
        <DatePicker onChange={handleDateChange} />
        <TimePicker onChange={handleTimeChange} format="HH:mm" />
      </Modal>
    </MainSectionContainer>
  );
};

export default ProfileMainSection;
