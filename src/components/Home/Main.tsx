import React from 'react';

import Welcome from '../Sections/Welcome';
import Work from '../Sections/Work';
import Divider from '../Layout/Divider';
import { SECTIONS } from '../../constants/consts';
import Projects from '../Sections/Projects';

const { WELCOME, WORK, PROJECTS } = SECTIONS;

const Main = () => {
  return (
    <React.Fragment>
      <Welcome $sectionid={WELCOME} $role="main" />
      <Divider />
      <Work $sectionid={WORK} size="twelve" />
      <Divider />
      <Projects $sectionid={PROJECTS} size="twelve" />
    </React.Fragment>
  );
};

export default Main;
