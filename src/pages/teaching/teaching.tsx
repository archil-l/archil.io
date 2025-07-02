import React, { Fragment } from 'react';
import SectionWithMarkdown from '../../components/section/section-with-markdown';
import Divider from '../../components/layout/divider';
import { sectionIds } from '../../constants/consts';

const teachingMarkdownComponents = {
  SectionHeader: {
    component: ({ sectionId, children }: { sectionId: sectionIds; children: React.ReactNode }) => (
      <h2 id={sectionId}>{children}</h2>
    ),
  },
  SiteHeader: {
    component: ({ sectionId, children }: { sectionId: sectionIds; children: React.ReactNode }) => (
      <h1 id={sectionId}>{children}</h1>
    ),
  },
};

const Teaching = (): JSX.Element => {
  return (
    <Fragment>
      <SectionWithMarkdown
        sectionId={sectionIds.Teaching}
        $role="main"
        markdownOverrides={teachingMarkdownComponents}
      />
      <Divider />
    </Fragment>
  );
};

export default Teaching;
