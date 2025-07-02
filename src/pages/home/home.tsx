import React, { Fragment, HTMLAttributes } from 'react';
import SectionWithMarkdown from '../../components/section/section-with-markdown';
import Divider from '../../components/layout/divider';
import { sectionIds } from '../../constants/consts';
import Links from '../../components/links/links';

const homeMarkdownComponents = {
  img: {
    component: ({ ...props }: HTMLAttributes<HTMLImageElement>) => (
      <img
        {...props}
        style={{
          float: 'right',
          display: 'block',
          margin: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px',
          width: '350px',
          maxWidth: '100%',
          borderRadius: '5px',
        }}
      />
    ),
  },
  WelcomeLinks: {
    component: () => <Links />,
  },
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

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <SectionWithMarkdown
        sectionId={sectionIds.Welcome}
        $role="main"
        markdownOverrides={homeMarkdownComponents}
      />
      <Divider />
      <SectionWithMarkdown
        sectionId={sectionIds.Work}
        size="twelve"
        markdownOverrides={homeMarkdownComponents}
      />
      <Divider />
      <SectionWithMarkdown
        sectionId={sectionIds.Projects}
        size="twelve"
        markdownOverrides={homeMarkdownComponents}
      />
    </Fragment>
  );
};

export default Home;
