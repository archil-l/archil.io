import React, { Fragment } from 'react';
import Section from '../../components/section/section';
import Divider from '../../components/layout/divider';
import { SectionIds } from '../../constants/consts';

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <Section $sectionid={SectionIds.Welcome} $role="main" />
      <Divider />
      <Section $sectionid={SectionIds.Work} size="twelve" />
      <Divider />
      <Section $sectionid={SectionIds.Projects} size="twelve" />
    </Fragment>
  );
};

export default Home;
