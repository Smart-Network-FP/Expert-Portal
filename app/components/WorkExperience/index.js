/**
 *
 * WorkExperience
 *
 */

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Icon, Modal, Checkbox } from 'antd';
import CustomSelect from 'components/CustomSelect';
import CustomButton from 'components/CustomButton';
import { Link, withRouter } from 'react-router-dom';
import { getCookie } from 'utils/cookies';
import axios from 'axios';
import { GENERATE_RANDOM_ID, GET_DATE } from 'utils/utility';
import CustomInput from '../CustomInput';
import {
  AddWorkExperience,
  Main,
  DoubleField,
  BottomNavigation,
} from './workExperience.style';
import SingleExperience from './SingleExperience';

function WorkExperience({ history }) {
  const [experiences, setExperiences] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [workhere, setWorkhere] = useState(false);
  const [currExperience, setCurrExperience] = useState({
    id: '',
    company: '',
    location: '',
    role: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    setAuthToken(getCookie('authToken'));
  }, []);

  const deleteCard = card => {
    console.log(card);
    const update = experiences.filter(item => card.id !== item.id);
    setExperiences([...update]);
  };
  const showModal = () => setIsVisible(true);

  const handleCancel = () => setIsVisible(false);

  const handleOk = e => {
    if (
      !currExperience.company ||
      !currExperience.location ||
      !currExperience.role ||
      (!currExperience.startDate && !currExperience.endDate) ||
      !currExperience.description
    )
      return;
    const ID = GENERATE_RANDOM_ID();
    setExperiences([...experiences, { ...currExperience, id: ID }]);
    setCurrExperience({});
    handleCancel();
  };

  const onSubmitForm = async () => {
    console.log('onsubmitForm');
    setLoading(true);
    axios
      .post(
        '/api/expert/experience',
        {
          experience: experiences,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      )
      .then(res => {
        console.log('apiRes, ', res.data);
        setLoading(false);
        history.push('/home');
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Main>
      {experiences.length > 0
        ? experiences.map(item => (
            <SingleExperience
              handleDelete={() => deleteCard(item)}
              key={item.id}
              {...item}
            />
          ))
        : ''}
      <Modal
        title="Add work experience"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ size: 'large' }}
        cancelButtonProps={{ size: 'large' }}
        okText="Save experience"
        forceRender
      >
        <CustomInput
          value={currExperience.role}
          label="Role"
          type="text"
          rules={[{ required: true, message: `Role is required.` }]}
          onGetData={data =>
            setCurrExperience({ ...currExperience, role: data })
          }
        />
        <CustomInput
          label="Company name"
          type="text"
          rules={[{ required: true, message: `Role is required.` }]}
          onGetData={data =>
            setCurrExperience({ ...currExperience, company: data })
          }
        />
        <CustomInput
          label="Country/state"
          type="text"
          rules={[{ required: true, message: `Country/state is required.` }]}
          onGetData={data =>
            setCurrExperience({ ...currExperience, location: data })
          }
        />
        <DoubleField>
          <CustomSelect
            mode="DatePicker"
            getData={data =>
              setCurrExperience({
                ...currExperience,
                startDate: GET_DATE(data._d),
              })
            }
            label="Select start date"
          />

          {!workhere && (
            <CustomSelect
              mode="DatePicker"
              getData={data =>
                setCurrExperience({
                  ...currExperience,
                  endDate: GET_DATE(data._d),
                })
              }
              label="Select End date"
            />
          )}
        </DoubleField>

        <Checkbox
          onChange={e => {
            setWorkhere(e.target.checked);
            setCurrExperience({
              ...currExperience,
              endDate: 'Present',
            });
          }}
          style={{ margin: '12px auto' }}
          setFieldsValue={[workhere]}
        >
          I currently work here
        </Checkbox>

        <CustomInput
          label="Job Description"
          type="TextArea"
          rules={[{ required: true, message: `Job description is required.` }]}
          onGetData={data =>
            setCurrExperience({
              ...currExperience,
              description: data,
            })
          }
        />
      </Modal>
      <AddWorkExperience>
        <span onClick={showModal}>
          Add Experience
          <Icon type="plus-circle" theme="filled" className="addIco" />
        </span>
      </AddWorkExperience>

      <BottomNavigation>
        <CustomButton type="secondary">Back</CustomButton>
        <CustomButton type="primary" onClick={onSubmitForm}>
          Save and Continue
          {/* <Link to="/onboarding/experience"> Save and Continue </Link> */}
        </CustomButton>
      </BottomNavigation>
    </Main>
  );
}

WorkExperience.propTypes = {};
export default withRouter(WorkExperience);
