import React from 'react';

import PropTypes from 'prop-types';
import { Typography, Icon } from 'antd';
import {
  ExperienceCard,
  ExperienceHeader,
  HeaderActions,
  Main,
  CompanyDetials,
  JobDetails,
} from './singleexperience.style';

const { Title, Text } = Typography;

const SingleExperience = ({
  id,
  company,
  location,
  role,
  startDate,
  endDate,
  desc,
  handleDelete,
  handleEdit,
}) => (
  <Main>
    <ExperienceCard>
      <ExperienceHeader>
        <Title level={4}>{role || 'Jobe Descriptioin'}</Title>
        <HeaderActions>
          <Icon
            onClick={handleEdit}
            type="edit"
            theme="filled"
            className="Ico"
          />
          <Icon onClick={handleDelete} type="close" className="Ico" />
        </HeaderActions>
      </ExperienceHeader>

      <CompanyDetials>
        <Text strong>{company || 'Microsoft · Full-time'}</Text>
        <Text>
          {`${startDate} - ${endDate}` || 'Jul 2021 - Present · 1 yr 9 mos '}
        </Text>
        <Text>{location || 'Los Angles, California'} </Text>
      </CompanyDetials>

      <JobDetails>
        <Text>
          {desc ||
            ` Spearhead the product design and contributed to the development of 7+
          digital products cutting across different industries and yielded great
          customer satisfaction•Guide 4 Junior designers in the
          conceptualization and design of 2 digital products. Spearhead the
          product design and contributed to the development of 7+ digital
          products cutting across different industries and yielded great
          customer satisfaction •Guide 4 Junior designers in the
          conceptualization and design of 2 digital products. Skills: Reactjs ·
          JavaScript Libraries · Product Design · Product Development ·
          Leadership · Prototyping · Figma (Software) · Communication · User
          Interface Prototyping · Adobe XD`}
        </Text>
      </JobDetails>
    </ExperienceCard>
  </Main>
);

SingleExperience.propTypes = {
  id: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  role: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  desc: PropTypes.string,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
};
export default SingleExperience;
