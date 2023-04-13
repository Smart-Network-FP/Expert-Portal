/**
 *
 * ExperiencePage
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import CustomSelect from 'components/CustomSelect';
import CustomButton from 'components/CustomButton';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import {
  Main,
  DoubleField,
  AddedSkillsSectioin,
  AddedSkills,
  SkillItem,
  ActionsTag,
  BottomNavigation,
} from './experience.style';
import { ExpertLevel, Skills, YearsOfExp } from './data';

function ExperiencePage() {
  const [skill, setSkill] = useState('');
  const [level, setLevel] = useState('');
  const [years, setYears] = useState('');

  const [mySkills, setMySkills] = useState([]);

  const AddSkill = () => {
    if (!skill || !level || !years) return;
    const [, id] = Math.random()
      .toString()
      .split('.');
    setMySkills([...mySkills, { id, skill, level, years }]);
    setSkill('');
    setLevel('');
    setYears('');
  };

  useEffect(() => {
    setSkill(skill);
  }, [mySkills]);

  const RemoveSkill = id => {
    const updatedList = mySkills.filter(item => item.id !== id);
    setMySkills([...updatedList]);
  };

  return (
    <Main>
      <DoubleField>
        <CustomSelect
          options={Skills}
          getData={data => setSkill(data)}
          label="Country"
          value={skill}
          mode="regular"
          firstActive
          placeHolder="Select skill"
        />

        <CustomSelect
          options={YearsOfExp}
          getData={data => setLevel(data)}
          label="State/Province"
          value={level}
          mode="regular"
          firstActive
          placeHolder="Year of experience"
        />

        <CustomSelect
          options={ExpertLevel}
          getData={data => setYears(data)}
          label="Experience Level"
          value={years}
          mode="regular"
          firstActive
          placeHolder="Experience Level"
        />

        <Icon
          type="plus-circle"
          theme="filled"
          className="ico"
          onClick={AddSkill}
        />
      </DoubleField>

      <AddedSkillsSectioin>
        {mySkills.length > 0
          ?  mySkills.map(item => (
            <AddedSkills key={item.id}>
               <SkillItem>{item.skill}</SkillItem>
              <SkillItem>{item.level}</SkillItem>
              <SkillItem>{item.years}</SkillItem>
              <ActionsTag>
                {/* <Icon type="edit" theme="filled" /> */}
                <Icon type="close" onClick={() => RemoveSkill(item.id)} />
              </ActionsTag>
            </AddedSkills>
            ))
          : null}
      </AddedSkillsSectioin>

      <BottomNavigation>
        <CustomButton type="secondary">Back</CustomButton>
        <CustomButton type="primary">
          <Link to="/onboarding/work-experience"> Save and Continue </Link>
        </CustomButton>
      </BottomNavigation>
    </Main>
  );
}

ExperiencePage.propTypes = {};

export default memo(ExperiencePage);
