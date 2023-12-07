/**
 *
 * OnboardingPersonalForm
 *
 */

import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Upload, Icon, message, Typography, Form, Select, Input } from 'antd';
import CustomSelect from 'components/CustomSelect';
import CustomButton from 'components/CustomButton';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from 'utils/cookies';
import CustomInput from '../CustomInput';
import {
  Main,
  PhotoAreaDetails,
  ProfilPhoto,
  DoubleField,
  // PhoneInputHolder,
  BottomNavigation,
} from './onboadingpersonal.style';
import { Industries } from './data';
import Countries from './countries';

const { Option } = Select;
const InputGroup = Input.Group;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

// Typography definition
const { Text } = Typography;
function OnboardingPersonalForm({ history }) {
  const [photoState, setPhotoState] = useState({
    loading: false,
    imageUrl: '',
  });
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    languages: [],
    phoneNumber: '',
  });

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setPhotoState({ ...photoState, loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setPhotoState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  const [currCountry, setCurCountry] = useState('');
  const [currStates, setStates] = useState([]);
  const [getInduestries, setIndustries] = useState(Industries[0]);
  const countries = Countries.map(country => country.country);
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState('');

  // console.log({ history });

  const resolveStates = () => {
    if (currCountry === '') return;
    const [s] = Countries.filter(country => country.country === currCountry);

    console.log(s, currCountry);
    setStates(s.states);
  };

  const uploadButton = (
    <div>
      <Icon
        type={photoState.loading ? 'loading' : 'camera'}
        theme={photoState.loading ? null : 'filled'}
      />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const [LocationData, setLoactionData] = useState({
    country: '',
    state: '',
    city: '',
  });

  useEffect(() => {
    setAuthToken(getCookie('authToken'));
  }, []);
  useEffect(() => {
    if (currCountry === '') setCurCountry(countries[0]);
    setLoactionData({ country: currCountry, state: '' });
    resolveStates();

    console.log({ LocationData });
  }, [currCountry]);

  const onSubmitForm = async () => {
    console.log('onsubmitForm');
    setLoading(true);
    axios
      .post(
        '/api/expert/personal-info',
        {
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          industry: getInduestries,
          ...LocationData,
          // city: LocationData.city,
          // state: currStates,
          // country: currCountry,
          language: userDetails.languages.join(','),
          phoneNumber: userDetails.phoneNumber,
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
        history.push('/onboarding/expertise');
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Main>
      {/* photo area */}
      <ProfilPhoto>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
          multiple={false}
        >
          {photoState.imageUrl ? (
            <img
              src={photoState.imageUrl}
              alt="avatar"
              style={{ width: '100%' }}
            />
          ) : (
            uploadButton
          )}
        </Upload>

        <PhotoAreaDetails>
          <Text strong>Jones Gabriel</Text>
          <Text>Jonesbgabriel@gmail.com</Text>
        </PhotoAreaDetails>
      </ProfilPhoto>

      {/* formfields */}
      <Form>
        <DoubleField>
          <CustomInput
            label="Firstname"
            type="text"
            rules={[{ required: true, message: `Firstname is required.` }]}
            onGetData={data =>
              setUserDetails({ ...userDetails, firstName: data })
            }
            mode="regular"
          />

          <CustomInput
            label="Lastname"
            type="text"
            rules={[{ required: true, message: `Email is required.` }]}
            onGetData={data =>
              setUserDetails({ ...userDetails, lastName: data })
            }
            mode="regular"
          />
        </DoubleField>
        <CustomSelect
          options={Industries}
          getData={data => setIndustries(data)}
          label="Industry"
          mode="regular"
          value={getInduestries}
        />

        <DoubleField>
          <CustomSelect
            options={countries}
            getData={data => {
              setLoactionData({ state: '', country: data, city: '' });
              setCurCountry(data);
            }}
            label="Country"
            value={LocationData.country}
            mode="regular"
          />

          <CustomSelect
            placeHolder="Select State"
            options={currStates}
            getData={data => {
              setLoactionData({ ...LocationData, state: data });
            }}
            label="State/Province"
            mode="regular"
            value={LocationData.state}
          />

          <CustomInput
            label="City"
            type="text"
            rules={[{ required: true, message: `City is required.` }]}
            onGetData={data => setLoactionData({ ...LocationData, city: data })}
          />
        </DoubleField>

        <CustomSelect
          placeHolder="Select the languages"
          options={['English', 'French', 'Hindi']}
          getData={data => {
            console.log(data);
            setUserDetails({ ...userDetails, languages: data });
          }}
          mode="tag"
          label="Language(s)"
        />
        <CustomInput
          label="Phone Number"
          type="text"
          rules={[{ required: true, message: `Phone Number is required.` }]}
          onGetData={data =>
            setUserDetails({ ...userDetails, phoneNumber: data })
          }
          mode="regular"
        />
        {/* <PhoneInputHolder>
          <label htmlFor="Phone">Phone number</label>
          <InputGroup size="large" compact className="PhoneInput">
            <Select defaultValue="Zhejiang" style={{ width: '30%' }}>
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
            <Input
              id="Phone"
              style={{ width: '70%' }}
              defaultValue="Xihu District, Hangzhou"
            />
          </InputGroup>
        </PhoneInputHolder> */}
      </Form>

      <BottomNavigation>
        <CustomButton type="secondary">Cancal</CustomButton>
        <CustomButton type="primary" onClick={onSubmitForm}>
          Save and Continue
          {/* <Link to="/onboarding/experience"> Save and Continue </Link> */}
        </CustomButton>
      </BottomNavigation>
    </Main>
  );
}

OnboardingPersonalForm.propTypes = {};

export default withRouter(OnboardingPersonalForm);
