/* eslint-disable no-unused-vars */
/**
 *
 * OnboardingSteps
 *
 */

import React, { memo, useState } from 'react';
import { Typography, Steps } from 'antd';
import { HAND } from 'images';
// import OnboardingPersonalForm from 'components/OnboardingPersonalForm';
import {
  HorizintalLine,
  Main,
  MessageHolder,
  Stepper,
} from './onboardingsteps.style';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const { Title, Text } = Typography;
const { Step } = Steps;

function OnboardingSteps() {
  // const Firstname = 'Jane';
  const [currentStep, setCurrentStep] = useState(0);

  // const handleNext = () => {
  //   setCurrentStep(currentStep + 1);
  // };

  return (
    <>
      <Main>
        <MessageHolder>
          <div className="left">
            <Title level={2}> Welcome</Title>
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
        <Steps current={currentStep}>
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
      {/* 
      <OnboardingPersonalForm /> */}
    </>
  );
}

OnboardingSteps.propTypes = {};

export default memo(OnboardingSteps);
