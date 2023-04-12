/**
 *
 * OnboardingSteps
 *
 */

import React, { memo, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Typography, Steps } from 'antd';
import { HAND } from 'images';
import { HorizintalLine, Main, MessageHolder, Stepper } from './onboardingsteps.style';

import messages from './messages';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const { Title, Text } = Typography;
const { Step } = Steps;

function OnboardingSteps() {
  const Firstname = 'Jane';
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <Main>
        <FormattedMessage {...messages.header} />
        <MessageHolder>
          <div className="left">
            <Title level={2}> Welcome {Firstname}</Title>
            <Text id="Text">
              Thanks for joining Smart Network. To be eligible for jobs you must
              complete your vetting process, but don’t worry, we will guide you
              through the whole process
            </Text>
          </div>
          <div className="right">
            <img src={HAND} alt="hand icon" />
          </div>
        </MessageHolder>
      </Main>
      <Stepper>
        {/* steps go here */}
        <Steps current={0}>
          <Step
            title="Personal Details"
            description="Please provide use with your personal and contact details"
          />
          <Step
            title="Expertise"
            description="This section covers your skill level and technology stack"
          />
          <Step
            title="Professional experience"
            description="A Six digit one time password have been sent to example@gmail.com. please "
          />
        </Steps>
      </Stepper>
      <HorizintalLine />
    </>
  );
}

OnboardingSteps.propTypes = {};

export default memo(OnboardingSteps);
