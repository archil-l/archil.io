import React from 'react';
import Section from '../section/section';
import Divider from '../layout/divider';
import { SectionIds } from '../../constants/consts';

const Main = () => {
  return (
    <React.Fragment>
      <Section $sectionid={SectionIds.Welcome} $role="main" />
      <Divider />
      <Section $sectionid={SectionIds.Work} size="twelve" />
      <Divider />
      <Section $sectionid={SectionIds.Projects} size="twelve" />
    </React.Fragment>
  );
};

export default Main;
